# Dockerfile for React client

# Use node's alpine variant to save on space and version number is 17 (latest)
FROM node:16-alpine

# Create the folder "app" under the /usr/src path and set it to be the working directory
# for the further COPY, RUN and CMD instructions
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the "app" folder
COPY package*.json ./

# Install the dependencies mentioned in package.json
RUN npm install

# Copy the local files to the "app" folder
COPY . .

# Expose port 3000 on the host machine to the container for listening to external connections
EXPOSE 19006 19000

# Start the React applications
# CMD ["read", "-p", "Press enter to continue"]
# CMD ["export", "ANDROID_SDK_ROOT=$HOME/Android/Sdk"]
# CMD ["export", "PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin"]
# CMD ["export", "PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools"]
# CMD ["export", "PATH=$PATH:$ANDROID_SDK_ROOT/emulator"]

CMD ["npm", "run", "web"]
