FROM node:16.14.0

ARG FWCLOUD_VERSION=v1.4.0

RUN apt update && apt install -y default-mysql-client
RUN wget -c -O /tmp/fwcloud-api.zip https://github.com/soltecsis/fwcloud-api/archive/refs/tags/$FWCLOUD_VERSION.zip

WORKDIR /tmp
RUN unzip /tmp/fwcloud-api.zip
RUN mv fwcloud-api-$(echo $FWCLOUD_VERSION | sed 's/v//') /fwcloud-api

WORKDIR /fwcloud-api

RUN npm install && npm run build

COPY env.default .env.default
COPY run.sh run.sh
COPY wait-for-it/wait-for-it.sh wait-for-it.sh
RUN chmod u+x run.sh && chmod u+x wait-for-it.sh

CMD ["sh", "-c", "./run.sh"]
