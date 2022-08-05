FROM node:16

COPY ./app /app/

WORKDIR /app

ENV APP_ENV DEV

ENV CHOKIDAR_USEPOLLING true

RUN npm install --location=global npm && \
    npm --location=global install expo-cli && \
    npm install --location=global @expo/ngrok && \
    yarn install

