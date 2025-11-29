FROM node:20-alpine

# inside container create app folder and my code will be inside it app 
WORKDIR /app

# copy each and everything of package.json 
COPY package*.json ./

# install all packages inside container
RUN npm install

# copy each and every thing
COPY . .

# on which port our app is going to listen
EXPOSE 5000

# when container start run this one and start my server
CMD [ "node","server.js" ]