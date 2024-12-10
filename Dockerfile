FROM --platform=linux/amd64 node:20.18.0

# ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i
COPY  ./src ./src
COPY ./svelte.config.js ./svelte.config.js
COPY ./tsconfig.json ./tsconfig.json
COPY ./vite.config.ts ./vite.config.ts

RUN npm run build

CMD [ "node", "build/index.js" ]