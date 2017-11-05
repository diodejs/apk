FROM alpine:edge
RUN apk add --no-cache nodejs
ADD . /app
RUN cd /app && npm install
