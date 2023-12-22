# Base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app
RUN yarn install

# Copy the rest of your backend application
COPY . /app

# Expose port and start application
EXPOSE 5000
CMD ["yarn", "start"]
