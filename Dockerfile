FROM node:22-alpine

WORKDIR /app

COPY .output ./output

ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "./output/server/index.mjs"]