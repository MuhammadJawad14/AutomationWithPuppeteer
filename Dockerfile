# Use an official Node.js image as a base
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Chromium and other necessary dependencies
RUN apt-get update && apt-get install -y chromium

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Set the command to run your Puppeteer tests
CMD ["npm", "test"]
