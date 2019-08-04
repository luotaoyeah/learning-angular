# docker build -t learning-angular . && docker run -p 88:80 -p 8888:8888 learning-angular

# stage-build
FROM node:12 AS stage-build

WORKDIR /app
COPY . .

WORKDIR /app
RUN npm install --production --no-save

WORKDIR /app
RUN npm run build:prod

# stage-nginx
FROM nginx:1.17.2 AS stage-nginx

WORKDIR /app
COPY --from=stage-build /app/dist .

WORKDIR /app
COPY /config/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 8888

CMD ["nginx", "-g", "daemon off;"]
