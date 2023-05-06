FROM node:18.9.0-alpine
WORKDIR /comment-service
COPY . .
RUN npm install 
RUN npm run build
#COPY app.js /dist/
EXPOSE 3000
CMD ["npm", "start"]