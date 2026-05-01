# STAGE 1: Build the application
# Use the official Node.js v22 image, matching your local environment.
FROM node:22-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies cleanly and reliably
COPY package*.json ./
RUN npm ci

# Copy the rest of your application code
COPY . .

# Run the Nuxt build command. This creates the final .output directory.
RUN npm run build


# STAGE 2: Create the final, minimal production image
FROM node:22-alpine

WORKDIR /app

# Copy the built application from the 'build' stage into this final image
COPY --from=build /app/.output .

# Set the HOST environment variable to make the app accessible from outside the container.
# This is CRITICAL for Cloud Run's health checks.
ENV HOST=0.0.0.0

# Expose the port that Nuxt runs on.
EXPOSE 3000

# This is the command that will run when the container starts.
# It directly executes the production server.
CMD [ "node", ".output/server/index.mjs" ]