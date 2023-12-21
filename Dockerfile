#react app docker
FROM node:18-buster-slim as builder

WORKDIR /app

RUN npm i -g pnpm

COPY . .

FROM node:18-buster-slim as installer

WORKDIR /app
RUN npm i -g pnpm

COPY .gitignore .gitignore
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/package.json ./package.json

RUN pnpm i

COPY . .

ENV HOST=$host
ENV VITE_SPRING_API_URL=http://spring.${HOST}
ENV VITE_NODE_API_URL=http://node.${HOST}

RUN pnpm build

FROM nginx:1.25.1-alpine

COPY --from=installer /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]











