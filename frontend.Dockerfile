FROM node:18-alpine

LABEL maintainer="Murad Alam <murad.jgec@gmail.com>"

WORKDIR /react-docker-example/

COPY ./front-end/public/ /react-docker-example/public
COPY ./front-end/src/ /react-docker-example/src
COPY ./front-end/package.json /react-docker-example/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

#docker build --tag frontend . --file ./frontend.Dockerfile
#docker run --rm --name some-frontend -p 3000:3000 -d frontend
