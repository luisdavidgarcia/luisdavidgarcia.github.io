# Use a Node.js base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json 
COPY package.json ./

# Install dependencies
RUN npm install

# Expose port 3000 for the React app
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]

