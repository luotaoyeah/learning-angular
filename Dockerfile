# stage-build
FROM node:15.14.0-buster-slim AS stage-build

ENV DISABLE_OPENCOLLECTIVE=1
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1

WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install --no-save

WORKDIR /app
COPY . .

WORKDIR /app
RUN npm run build:prod

# stage-nginx
FROM nginx:1.20.0 AS stage-nginx

WORKDIR /app
COPY --from=stage-build /app/dist .

WORKDIR /app
COPY /nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
