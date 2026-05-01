# STAGE 1: Build the application
# Use the full Node.js v22 image. It has all the necessary system build tools.
FROM node:22 AS build

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# THIS IS THE FIX:
# We use 'npm install' so it works without a lockfile.
# We use '--ignore-scripts' to prevent the broken 'postinstall' from running here.
RUN npm install --ignore-scripts

# Copy the rest of your application code
COPY . .

# THIS IS THE SECOND FIX:
# Now that all dependencies are installed, the 'nuxt' command exists.
# We manually run the 'postinstall' script from your package.json.
RUN npm run postinstall

# Finally, run the main build command
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

# Expose the port
EXPOSE 3000

# The command that will run when the container starts
CMD [ "npm", "start" ]
