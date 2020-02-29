FROM nginx:1.17.4-alpine

RUN touch /home/app/static/test123.js
RUN echo "console.log('test');" > app/static/test123.js

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
