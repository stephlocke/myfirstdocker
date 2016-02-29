FROM node
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY myMockApp/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY myMockApp/. /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]