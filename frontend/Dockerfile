FROM node:lts AS development

# Variables
ENV CI=true
ENV PORT=3000

WORKDIR /frontend

# Copy source dependecies to container
COPY package.json /frontend/package.json
COPY package-lock.json /frontend/package-lock.json

# Install dependencies
RUN npm ci

# Copy source code to container
COPY . /frontend

# Run the app
CMD [ "npm", "start" ]