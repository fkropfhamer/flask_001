FROM node:13-alpine as build
WORKDIR /build

COPY public public
COPY ./package.json /build
COPY ./package-lock.json /build
COPY ./webpack.config.js /build

RUN rm -rf /build/app/static 

RUN npm i
RUN npm run build



FROM python:3.7-alpine

RUN adduser -D app

WORKDIR /home

COPY requirements.txt requirements.txt
RUN python -m venv venv
RUN venv/bin/pip install -r requirements.txt
RUN venv/bin/pip install gunicorn

COPY app app
COPY --from=build /build/app/static /build/app/static

COPY main.py boot.sh ./
RUN chmod +x boot.sh

ENV FLASK_APP main.py
ENV FLASK_ENV production

RUN chown -R app:app ./
USER app

EXPOSE 5000
ENTRYPOINT ["./boot.sh"]
