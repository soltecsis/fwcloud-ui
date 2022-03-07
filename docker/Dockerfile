FROM node:16.14.0

ARG FWCLOUD_UI_VERSION=v1.3.1

RUN wget -c -O /tmp/fwcloud-websrv.zip https://github.com/soltecsis/fwcloud-websrv/archive/refs/heads/main.zip
RUN wget -c -O /tmp/fwcloud-ui.zip https://github.com/soltecsis/fwcloud-ui/archive/refs/tags/$FWCLOUD_UI_VERSION.zip

WORKDIR /tmp
RUN unzip /tmp/fwcloud-websrv.zip
RUN unzip /tmp/fwcloud-ui.zip
RUN mkdir -p /opt/fwcloud/ui/
RUN mv fwcloud-websrv-main /fwcloud-websrv
RUN mv fwcloud-ui-$(echo $FWCLOUD_UI_VERSION | sed 's/v//')/* /opt/fwcloud/ui/

WORKDIR /fwcloud-websrv

RUN npm install && npm run build

RUN echo '{ "checkUpdates": false }' > /opt/fwcloud/ui/dist/assets/config/config.json

EXPOSE 3030

CMD ["sh", "-c", "npm start"]


