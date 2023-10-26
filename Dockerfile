# Menggunakan OS node alpine pada saat docker dijalankan di container
FROM node:lts-alpine3.17

ENV NODE_VERSION 21.0.0

# Menentukan direktori yang akan digunakan di projek
WORKDIR /todo-api/src/app

# Copy semua file yang berformat json dalam current directory (/todo-api/src/app)
COPY package*.json ./

RUN npm install

# Copy semua folder ke dalam folder docker
COPY . .

EXPOSE 8010

# Jalankan perintah node app.js
CMD [ "node", "app.js" ]

# di terminal, jalankan docker build -t rakamin/apitodo .