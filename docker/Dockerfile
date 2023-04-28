FROM node:16.14.0

# build file copy
COPY package.json /app/
COPY package-lock.json /app/
COPY *.js /app/
COPY src /app/src/

# work directory
WORKDIR /app/

# node install
RUN npm install

#ENV NODE_MODE=development

# node run
ENTRYPOINT ["npm", "run", "json-server"]