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

# Expose port and start application
EXPOSE 5000
CMD ["yarn", "start:dev"]
