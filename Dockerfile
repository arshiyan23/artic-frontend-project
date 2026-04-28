# Stage 1: The Builder
# Use the official Node.js 20 image to build our app
FROM node:20 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
# This caches our dependencies unless they change
COPY package*.json ./

# Run the installation
# This will install nuxt and run 'nuxt prepare'
RUN npm install

# Copy the rest of your application code
COPY . .

# Run the build command
# This creates the final, optimized application in the .output directory
RUN npm run build

# Stage 2: The Production Server
# Use a smaller, more secure Node.js image for the final container
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Set the NODE_ENV to "production"
ENV NODE_ENV=production

# Copy the output of the build from the 'builder' stage
# This is the ONLY thing we need from the previous stage
COPY --from=builder /app/.output .

# Expose the port that Nuxt will run on
EXPOSE 3000

# The command to start the Nuxt server
# This runs the final, optimized server
CMD ["node", "server/index.mjs"]
