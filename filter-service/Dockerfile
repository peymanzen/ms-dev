FROM node:18.9.0-alpine
WORKDIR /filter-service
COPY . .
RUN npm install 
RUN npm run build
#COPY app.js /dist/
EXPOSE 3001
CMD ["npm", "start"]