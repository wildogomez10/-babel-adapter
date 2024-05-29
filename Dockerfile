FROM node:20.9.0-alpine
LABEL maintainer="Wildo Gómez"

# Establece zona horaria del contenedor.
ENV TZ=America/Asuncion

# Create a workdir for project
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY .npmrc ./.npmrc

# Install dependences
RUN npm ci

# Get all the code needed to run the app
COPY . .

RUN cp /usr/share/zoneinfo/America/Asuncion /etc/localtime
RUN echo "America/Asuncion" >  /etc/timezone
RUN apk del tzdata
RUN npm config set registry https://registry.npmjs.org/

CMD ["npm", "start"]