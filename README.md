# 🛒 Rozetka Admin Dashboard & Storefront

A full-stack web application replicating an e-commerce management panel and product preview store, inspired by Rozetka. The project consists of two separate repositories: a React-based frontend and an Express-based backend API.

---

## 🔗 Repositories & Live Demos

* **Frontend Repository**: [`Petro2025-pixel/my-rozetka-frontend`](https://github.com/Petro2025-pixel/my-rozetka-frontend)
* **Backend Repository**: [`Petro2025-pixel/my-rozetka-backend`](https://github.com/Petro2025-pixel/my-rozetka-backend)
* **Live App (GitHub Pages)**: `https://petro2025-pixel.github.io/my-rozetka-frontend/`
* **API Server (VPS / Railway)**: `https://my-rozetka-backend-production.up.railway.app`

---

## 🌟 Key Features

* 🔐 **JWT Authentication**: Secure login flow with JSON Web Tokens and token persistence in `localStorage`.
* ⚡ **Optimistic UI Updates**: Instant UI feedback on CRUD operations (add, edit, delete products) powered by `Redux-Saga`.
* 📋 **Product Management Table**: Administrative dashboard with sorting, detailed preview, editing, and deletion capabilities.
* 🎨 **Custom Theme**: Custom Material UI theme tailored to match modern e-commerce UI standards.
* 📝 **Form Management**: Clean form validation and state tracking using `React Final Form`.
* 🧪 **Comprehensive Testing**: Unit test coverage for components, Redux slices, sagas, and API modules using `Vitest` and `React Testing Library`.

---

## 🛠 Tech Stack

### Frontend (`my-rozetka-frontend`)
* **Framework**: React 18
* **Build Tool**: Vite
* **State Management**: Redux Toolkit, Redux-Saga
* **UI Library**: Material UI (MUI v5), SCSS, Emotion
* **Form Validation**: React Final Form
* **HTTP Client**: Axios (with Request/Response Interceptors)
* **Testing**: Vitest, React Testing Library

### Backend (`my-rozetka-backend`)
* **Runtime**: Node.js, Express 5
* **Authentication**: JSON Web Tokens (JWT)
* **Security & CORS**: CORS middleware, Dotenv
* **Data Storage**: JSON-based persistent file storage (`products.json`)

---

## 🔑 Environment Variables Setup

### Backend (`my-rozetka-backend/.env`)
Create a `.env` file in the root of the backend repository:
```env
PORT=3001
SECRET_KEY=your_super_secret_jwt_key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password