FROM node:22 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22

WORKDIR /app

COPY --from=build /app/.output .
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json .

# CRITICAL FIXES
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]