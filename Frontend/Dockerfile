# Base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app
RUN yarn install

# Copy the rest of your frontend application
COPY . /app

# Expose port and start application
EXPOSE 3000
CMD ["yarn", "start"]
