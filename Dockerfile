# Stage 1: Build the application
FROM node:22-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose build-time environment variables to the Nuxt build command
ARG API_BASE_URL
ARG API_AUTH_KEY
ENV API_BASE_URL=${API_BASE_URL}
ENV API_AUTH_KEY=${API_AUTH_KEY}

# Run the Nuxt build command
RUN npm run build

# Stage 2: Create the final production image
FROM node:22-alpine

WORKDIR /app

# Copy the built application from the 'build' stage
COPY --from=build /app/.output .
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json .

# Expose the port Nuxt will run on
EXPOSE 3000

# Set the command to start the Nuxt server
CMD [ "node", ".output/server/index.mjs" ]
