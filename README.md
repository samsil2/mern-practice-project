Store App 🛒

Live demo → https://store-fdt5.onrender.com

A mini‑e‑commerce CRUD project built with the MERN stack, Chakra UI, Vite and Zustand.
It lets you list the current products and add new ones through a simple form.

✨ Features

Front‑end	Back‑end
### ⚙️ Tech Stack

| Front‑end | Back‑end |
|-----------|----------|
| ⚡ **Vite + React** – blazing‑fast HMR | 🌐 **Express + Node** REST API |
| 💅 **Chakra UI** component library & built‑in dark‑mode | 🗄️ **MongoDB Atlas** for persistence |
| ⚛️ **Zustand** for global product state | 🔐 **.env**‑driven config (Mongo URI, port) |
| 🗃️ **SimpleGrid** responsive gallery | 🛡️ CORS & JSON body‑parsing middleware |
| 🔄 Proxy setup for clean `/api` calls in dev | 🚀 Deploy‑ready on **Render** |


## 📂 Project Structure
. ├── backend/  # Express API │   ├── models/Product.js │   ├── routes/product.js │   └── server.js ├── frontend/  # React client (Vite) │   ├── src/ │   │   ├── components/ProductCard.jsx │   │   ├── pages/HomePage.jsx │   │   └── pages/CreatePage.jsx │   └── vite.config.js ├── store/  # Shared Zustand store ├── package.json └── README.md

🚀 Local development
Prerequisites
Node ≥ 18.18 (LTS)    nvm install 18.18.0

MongoDB running locally or an Atlas connection string

### 🚀 Clone & Install & Environment variables

```bash
# 1. Grab the code
git clone https://github.com/samsil2/mern-practice-project.git
cd mern-practice-project

# Environment variables
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/store?retryWrites=true&w=majority
-replace with your mongo uri
PORT=3000

# 2. Build
npm run build

# 3. Run
npm run start







