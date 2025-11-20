
# 🎉 Chat App

<h4>ChatApp is a full-stack real-time messaging platform built with the MERN stack, Socket.io, and a beautifully crafted UI powered by TailwindCSS and DaisyUI.
It features secure JWT-based authentication, online status tracking, instant message delivery, and global state management with Zustand, offering a smooth and responsive chat experience.
Perfect for learning real-time systems, practicing full-stack workflows, or showcasing a production-ready chat application.</h4>


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)](https://nodejs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.x-red)](https://socket.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-purple)](https://chat-app-f2r7.onrender.com/)


---

## 🖼 UI Screenshots

<div align="center">
 <img src="./frontend/public/screenshot-for-readme.png" style=" border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); transition: transform 0.3s; cursor: pointer;" />
</div>

---

## 💎 Features

<div style="display:flex; flex-wrap:wrap; gap:10px;">
  <div>🎃 JWT Authentication & Authorization</div>
  <div>👾 Real-time Messaging (Socket.io)</div>
  <div>🚀 Online User Status</div>
  <div>👌 Zustand Global State Management</div>
  <div>🐞 Client & Server Error Handling</div>
</div>

---

## 🛠 Tech Stack
**MERN + TailwindCSS + DaisyUI + Socket.io**

| Frontend | Backend | Real-time |
|----------|---------|----------|
| React.js | Node.js | Socket.io |
| TailwindCSS | Express.js|
| DaisyUI | MongoDB|
| Zustand |  JWT |
---

## ⚡ Installation


1. Clone the Repository
 ```
git clone https://github.com/hilla10/ChatApp.git
cd ChatApp
```
3. Backend Setup
```
cd backend
npm install
npm run dev
```

Create a .env file in backend/ with:
```
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
NODE_ENV = development
CLIENT_URL = http://localhost:5173
```
3. Frontend Setup
```
cd ../frontend
npm install
npm run dev

```
Create a .env file in frontend/ with:
```
VITE_BASE_URI=http://localhost:3000
```


## 📁 Folder Structure
```bash
ChatApp/
 ├── frontend/
 │   └── src/
 │       ├── components/
 │       ├── pages/
 │       ├── lib/
 │       └── utils/
 └── backend/
     ├── controllers/
     ├── models/
     ├── routes/
     ├── middleware/
     └── lib/
```


## 🤝 Contributing
1, Fork this repo

2, Create your feature branch

3, Commit changes

4, Open a Pull Request

## 📄 License

Licensed under the MIT License.

📬 Contact

Author: Hailemichael

🌐 Portfolio: [ portfolio](https://portfolio-rho-gules-15.vercel.app/)

💼 LinkedIn:[Linkedin](https://www.linkedin.com/in/hailemichaelnegusse/)

