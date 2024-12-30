# Use the official Node.js image as the base image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY ./package*.json ./

# Install dependencies
#RUN npm install -g @angular/cli@18.2.5 && npm install
RUN npm install -g @angular/cli@18.2.5 && npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Angular app for production
RUN ng build --configuration production

# Use a minimal Nginx image to serve the app
FROM nginx:alpine

# Copy the built Angular files from the build stage
COPY --from=build /app/dist/keycloak-angular-example/browser /usr/share/nginx/html

#dist/keycloak-angular-example
# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

