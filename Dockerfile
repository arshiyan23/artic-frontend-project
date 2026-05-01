# STAGE 1: Build the application
# Use the full, non-alpine Node.js v22 image. This has the build tools sharp needs.
FROM node:22 AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Run the Nuxt build command
RUN npm run build


# STAGE 2: Create the final production image
# THIS IS THE FIX: Use the full 'node:22' image here as well to ensure runtime compatibility for sharp.
FROM node:22

WORKDIR /app

# Copy the built application from the 'build' stage
COPY --from=build /app/.output .
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json .

# Set the HOST environment variable
ENV HOST=0.0.0.0

# Expose the port
ENV PORT=3000
EXPOSE 3000

# The command to start the server
CMD [ "node".output/server/index.mjs]
