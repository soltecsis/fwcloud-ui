FROM node:18

RUN wget -c -O /tmp/fwcloud-websrv.zip https://github.com/soltecsis/fwcloud-websrv/archive/refs/heads/main.zip
RUN wget -c -O /tmp/fwcloud-ui.zip https://github.com/soltecsis/fwcloud-ui/archive/refs/heads/main.zip

WORKDIR /tmp
RUN unzip fwcloud-websrv.zip && rm -f fwcloud-websrv.zip
RUN unzip fwcloud-ui.zip && rm -f fwcloud-ui.zip
RUN mkdir -p /opt/fwcloud
RUN mv fwcloud-websrv-main /opt/fwcloud/websrv
RUN mv fwcloud-ui-main /opt/fwcloud/ui

WORKDIR /opt/fwcloud/ui
RUN rm -rf .github docker

WORKDIR /opt/fwcloud/websrv
RUN npm install && npm run build
RUN rm -rf .github .eslintrc.js .gitignore .prettierrc .vscode test src

COPY env.default .env.default
COPY run.sh run.sh
RUN chmod u+x run.sh

RUN echo '{ "checkUpdates": false }' > /opt/fwcloud/ui/dist/assets/config/config.json

EXPOSE 3030

CMD ["sh", "-c", "./run.sh"]
