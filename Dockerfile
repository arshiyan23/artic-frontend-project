# STAGE 1: Build the application
# Use the full Node.js v22 image. NOT alpine. This is more robust and has more system tools.
FROM node:22 AS build

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# THIS IS THE FIX: Install dependencies BUT IGNORE the broken postinstall script.
RUN npm install --ignore-scripts

# Copy the rest of your application code
COPY . .

# THIS IS THE SECOND FIX: Manually run the 'prepare' script now that all
# dependencies are properly installed and available.
RUN npm run postinstall

# Run the final Nuxt build command to create the .output directory
RUN npm run build


# STAGE 2: Create the final, minimal production image
FROM node:22-alpine

WORKDIR /app

# Copy only the necessary built artifacts from the 'build' stage
COPY --from=build /app/.output .
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json .

# Set the HOST environment variable to make the app accessible from outside the container
ENV HOST=0.0.0.0

# Expose the port that Nuxt runs on by default
EXPOSE 3000

# This is the command that will run when the container starts.
# It directly executes the production server.
CMD [ "npm", "start" ]