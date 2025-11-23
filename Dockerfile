FROM node:22-alpine3.21 AS build
WORKDIR /app

RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM nginx:alpine-slim AS runtime

RUN adduser -D -H -s /sbin/nologin nginxuser

RUN mkdir -p /run /var/cache/nginx /var/log/nginx && \
    chown -R nginxuser:nginxuser /usr/share/nginx/html /run /var/cache/nginx /var/log/nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
USER nginxuser
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
