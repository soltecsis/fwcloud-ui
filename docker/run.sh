#!/bin/bash

################################################################
passGen() {
  PASSGEN=`cat /dev/urandom | tr -dc a-zA-Z0-9 | fold -w ${1} | head -n 1`
}
################################################################

################################################################
generateOpensslConfig() {
  cat > openssl.cnf << EOF
[ req ]
distinguished_name = req_distinguished_name
attributes = req_attributes
prompt = no

[ req_distinguished_name ]
O=SOLTECSIS - FWCloud.net
CN=${1}

[ req_attributes ]

[ cert_ext ]
subjectKeyIdentifier=hash
keyUsage=critical,digitalSignature,keyEncipherment
extendedKeyUsage=clientAuth,serverAuth
EOF
}
################################################################

################################################################
buildTlsCertificate() {
  echo "Generating GPG keys pair for fwcloud-${1} ... "

  cd $TLSDIR

  passGen 32
  CN="fwcloud-${1}-${PASSGEN}"
  generateOpensslConfig "$CN"

  # Private key.
  openssl genrsa -out fwcloud-${1}.key 2048

  # CSR.
  openssl req -config ./openssl.cnf -new -key fwcloud-${1}.key -nodes -out fwcloud-${1}.csr

  # Certificate.
  # WARNING: If we indicate more than 825 days for the certificate expiration date
  # we will not be able to access from Google Chrome web browser.
  openssl x509 -extfile ./openssl.cnf -extensions cert_ext -req \
    -days 825 \
    -signkey fwcloud-${1}.key -in fwcloud-${1}.csr -out fwcloud-${1}.crt
   
  rm openssl.cnf
  rm "fwcloud-${1}.csr"

  echo "DONE"
  echo

  cd - > /dev/null
}
################################################################

CFGDIR="/config"
if [ ! -d $CFGDIR ]; then
    mkdir $CFGDIR
fi

TLSDIR="$CFGDIR/tls"
if [ ! -d $TLSDIR ]; then
    mkdir $TLSDIR
fi

# In order to mount .env file so can be modified from the host,
# it is moved to its own directory (which it will act as a mount point)
# This must be done the first time.
if [ ! -e $CFGDIR/.env ]; then
    cp .env.default $CFGDIR/.env
fi

# And create a symlink to the right place where .env should be present
if [ ! -e .env ]; then
    ln -s $CFGDIR/.env .env
fi

# Generate self signed TLS certificate. 
if [ ! -e $TLSDIR/fwcloud-websrv.crt -o ! -e $TLSDIR/fwcloud-websrv.key ]; then
    buildTlsCertificate "websrv"
fi

npm start