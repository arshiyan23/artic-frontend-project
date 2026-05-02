FROM node:22-alpine

WORKDIR /app

COPY .output ./output

ENV PORT=3000
ENV NODE_ENV=production
ENV NITRO_PORT=3000

EXPOSE 3000

CMD ["node", "./output/server/index.mjs"]