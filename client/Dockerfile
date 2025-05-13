FROM node:latest
ARG API_URL

WORKDIR /client
COPY ./ /client/
RUN npm install --force && \
  npm run build

WORKDIR /client/server
COPY ./ /client/server
RUN npm install --prod

WORKDIR /tmp
# COPY ./client ./
ENV API_URL "$API_URL"
RUN npm install
RUN npm run build

WORKDIR /usr/src/app

RUN cp /tmp/package.json . && \
  cp /tmp/production-server.js . && \
  cp -r /tmp/dist . && \
  rm -rf /tmp && \
  npm install --prod

EXPOSE 3000
CMD ["npm", "run", "serve-prod"]
