FROM node:16-alpine as build-step

RUN mkdir -p /app

WORkDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#segunda etapa

FROM nginx:1.17-alpine

COPY --from=build-step /app/dist/web-money-converter  /usr/share/nginx/html
