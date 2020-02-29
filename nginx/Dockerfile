FROM node:13-alpine as build
WORKDIR /build

COPY . /build

RUN npm i
RUN npm run build


FROM nginx:1.17.4-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /build/app/static /home/app/static
