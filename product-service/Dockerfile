FROM node:18.9.0-alpine
WORKDIR /product-service
COPY . .
RUN npm install 
RUN npm run build
#COPY app.js /dist/
EXPOSE 3002
CMD ["npm", "start"]