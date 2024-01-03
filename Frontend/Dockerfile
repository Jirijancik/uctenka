# Base image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of your frontend application source code
COPY . .

# Expose the port Vite uses
EXPOSE 3000

# Command to start the application
CMD ["yarn", "start"]