FROM node:latest
RUN npm install -g serve
COPY . .
RUN npm install

EXPOSE 8000

CMD ["npm","start"]