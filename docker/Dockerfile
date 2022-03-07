FROM node:16.14.0

ARG FWCLOUD_UI_VERSION=v1.3.1

RUN wget -c -O /tmp/fwcloud-websrv.zip https://github.com/soltecsis/fwcloud-websrv/archive/refs/heads/main.zip
RUN wget -c -O /tmp/fwcloud-ui.zip https://github.com/soltecsis/fwcloud-ui/archive/refs/tags/$FWCLOUD_UI_VERSION.zip

WORKDIR /tmp
RUN unzip fwcloud-websrv.zip && rm -f fwcloud-websrv.zip
RUN unzip fwcloud-ui.zip && rm -f fwcloud-ui.zip
RUN mkdir -p /opt/fwcloud
RUN mv fwcloud-websrv-main /opt/fwcloud/websrv
RUN mv fwcloud-ui-$(echo $FWCLOUD_UI_VERSION | sed 's/v//') /opt/fwcloud/ui

WORKDIR /opt/fwcloud/ui
RUN rm -rf .github docker

WORKDIR /opt/fwcloud/websrv
RUN npm install && npm run build
RUN rm -rf .github .eslintrc.js .gitignore .prettierrc .vscode test src

RUN echo '{ "checkUpdates": false }' > /opt/fwcloud/ui/dist/assets/config/config.json

EXPOSE 3030

CMD ["sh", "-c", "npm start"]
