FROM node:16

WORKDIR /app

ENV APP_ENV DEV

ENV CHOKIDAR_USEPOLLING true

RUN npm --location=global install expo-cli && \
    yarn install

CMD ["expo", "start"]

