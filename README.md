<div align="center">

# 🛍️ Solara — Premium Shoe E-Commerce Platform

### *Where Style Meets Performance — A Production-Ready Full-Stack MERN App*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-solara--v2.vercel.app-6366f1?style=for-the-badge&logoColor=white)](https://solara-v2.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-yogesh--123231-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yogesh-123231/Solara_v2)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yogeshdumane-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yogeshdumane/)

<br/>

<!-- Replace with your GitHub CDN screenshot URL -->
![Solara Preview](./client/src/Images/readmeImage.png)

<br/>

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 📖 Overview

**Solara** is a production-ready, full-stack e-commerce platform built with the **MERN stack**, designed to simulate a real-world premium shoe shopping experience. It features secure JWT authentication, a fully-functional admin dashboard, Stripe payment integration with webhooks, coupon system, product reviews, and a clean, responsive UI.

> 💡 Built as a complete real-world project demonstrating strong skills in both frontend architecture and scalable backend development.

---

## ✨ Feature Highlights

### 🛒 Shopping Experience
- Browse products with **advanced filtering** (category, brand, color, size)
- **Debounced search** for fast, smooth product lookup
- Detailed product pages with **size selection** and stock awareness
- **Cart system** with quantity management and real-time price calculation
- **Coupon / discount code** support at checkout
- **Stripe-powered secure checkout** with webhook order confirmation
- Order history with **delivery status tracking**
- **Product reviews & star ratings** after purchase

### 🔐 Authentication & Security
- **JWT-based auth** with token persistence via localStorage
- **Bcrypt** password hashing
- **Protected routes** for user and admin areas
- **Forgot password** & **email-based reset** flow via Nodemailer
- Separate **admin login** with role-based access control

### 👨‍💼 Admin Dashboard
- Overview **stats dashboard** with charts (Chart.js)
- Full **product CRUD** — add, edit, delete products with images
- **Category & Brand management**
- **Order management** with pagination and status updates
- **Customer list** with registration details
- **Coupon management** — create and manage discount codes
- Protected by `adminOnly` middleware

### 💳 Payments & Orders
- **Stripe Checkout Session** integration
- **Webhook handler** for reliable post-payment order creation
- Automatic **stock quantity updates** on successful payment
- Graceful **checkout success** page with confirmation

### 📱 UI & UX
- Fully **responsive** across all screen sizes
- Smooth loading states with custom **TriangleLoader**
- Toast notifications via **React Toastify**
- **Lazy-loaded** admin pages for performance
- `ScrollToTop` on every route change
- Empty state for cart, errors, and 404 pages

---

## 🧰 Tech Stack

### 🖥️ Frontend
| Technology | Purpose |
|---|---|
| ![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB) | UI Library |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Build Tool |
| ![React Router](https://img.shields.io/badge/React_Router_v6-CA4245?style=flat-square&logo=reactrouter&logoColor=white) | Client-Side Routing |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) | HTTP Client |
| ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white) | Admin Analytics Charts |
| ![React Icons](https://img.shields.io/badge/React_Icons-e91e63?style=flat-square&logo=react&logoColor=white) | Icon Library |
| ![React Toastify](https://img.shields.io/badge/React_Toastify-FFBE00?style=flat-square) | Toast Notifications |

### ⚙️ Backend
| Technology | Purpose |
|---|---|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | Runtime Environment |
| ![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) | Web Framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white) | Database |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) | ODM / Schema Modeling |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) | Authentication |
| ![Bcrypt](https://img.shields.io/badge/Bcrypt.js-003A70?style=flat-square) | Password Hashing |
| ![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white) | Payments & Webhooks |
| ![Nodemailer](https://img.shields.io/badge/Nodemailer-22B573?style=flat-square) | Email (Password Reset) |
| ![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white) | Dev Auto-Restart |

### ☁️ Deployment
| Service | Role |
|---|---|
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | Frontend Hosting |
| ![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white) | Cloud Database |

---

## 🏗️ Project Structure

```
Solara_v2/
├── client/                          # ⚛️ React Frontend (Vite)
│   ├── public/                      # Static assets & favicon
│   ├── context/
│   │   └── AuthProvider.jsx         # Global auth context
│   ├── hooks/
│   │   ├── useAuth.jsx              # Auth hook
│   │   └── useDebounce.jsx          # Debounce hook for search
│   └── src/
│       ├── components/
│       │   ├── admin/               # AdminHeader, AdminSideBar, Pagination
│       │   ├── home/                # Hero, BannerGrid, FeaturedProducts, TrendingProducts
│       │   ├── layout/              # Navbar, Footer, Header
│       │   └── ui/                  # Card, Star, TriangleLoader, Container
│       ├── pages/
│       │   ├── Home.jsx             # Landing page
│       │   ├── Product.jsx          # Product listing with filters
│       │   ├── ProductDetails.jsx   # Single product view + reviews
│       │   ├── CartLayout.jsx       # Cart & coupon management
│       │   ├── CheckoutSuccess.jsx  # Post-payment confirmation
│       │   ├── MyOrders.jsx         # User order history
│       │   ├── LoginPage.jsx        # User login
│       │   ├── SignUpPage.jsx       # User registration
│       │   ├── ResetPassword.jsx    # Password reset
│       │   ├── Dashboard.jsx        # 📊 Admin dashboard
│       │   ├── AdminProductList.jsx # Admin product management
│       │   ├── AddProducts.jsx      # Add new product
│       │   ├── UpdateProducts.jsx   # Edit product
│       │   ├── AdminOrders.jsx      # Admin order view
│       │   ├── CustomerList.jsx     # Admin customer list
│       │   ├── CouponList.jsx       # Admin coupon management
│       │   ├── BrandList.jsx        # Brand management
│       │   └── CategoryList.jsx     # Category management
│       └── utils/
│           ├── protectedRoute.jsx   # User auth guard
│           └── adminRoute.jsx       # Admin auth guard
│
└── server/                          # 🟢 Node.js + Express Backend
    ├── controllers/
    │   ├── user.js                  # Register, login, password reset
    │   ├── product.js               # Product CRUD + reviews
    │   ├── cart.js                  # Cart operations
    │   ├── payments.js              # Stripe checkout + webhook
    │   └── admin.js                 # Admin stats, orders, coupons
    ├── models/
    │   ├── user.js                  # User schema (bcrypt, cart embed)
    │   ├── product.js               # Product schema (slug, ratings)
    │   ├── order.js                 # Order schema (status, Stripe ref)
    │   ├── brands.js                # Brand schema
    │   └── category.js              # Category schema
    ├── routes/                      # Express route definitions
    ├── middleware/
    │   ├── auth.js                  # verifyToken + adminOnly
    │   ├── error.js                 # Global error handler
    │   └── asyncErrorHandler.js     # Async wrapper
    ├── utils/
    │   ├── errorHandler.js          # Custom error class
    │   └── sendEmail.js             # Nodemailer email utility
    └── db/
        └── connect.js               # MongoDB connection
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** `v18+`
- **MongoDB Atlas** account
- **Stripe** account (for payments)
- **Gmail** account (for Nodemailer password resets)

### 1. Clone the Repository

```bash
git clone https://github.com/yogesh-123231/Solara_v2.git
cd Solara_v2
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
cd client && npm install

# Install backend dependencies
cd ../server && npm install
```

### 3. Configure Environment Variables

#### 📌 `client/.env`
```env
VITE_BACKEND_URL=http://localhost:5000
```

#### 📌 `server/.env`
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

### 4. Run the Project

```bash
# Terminal 1 — Start backend
cd server
nodemon index.js

# Terminal 2 — Start frontend
cd client
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) 🎉

---

## 🧪 Demo Credentials

| Role | Email | Password |
|---|---|---|
| 👤 **User** | `user@gmail.com` | `password` |
| 👨‍💼 **Admin** | `admin@gmail.com` | `password` |

---

## 🔌 API Reference

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/v1/register` | Register new user | ❌ |
| `POST` | `/api/v1/login` | User login | ❌ |
| `GET` | `/api/v1/verify` | Verify JWT token | ✅ |
| `GET` | `/api/v1/forgetpassword/:email` | Send reset email | ❌ |
| `POST` | `/api/v1/resetpassword` | Reset password | ❌ |
| `GET` | `/api/v1/product` | Get all products (+ filters) | ❌ |
| `GET` | `/api/v1/product/:slug` | Get single product | ❌ |
| `POST` | `/api/v1/cart` | Add to cart | ✅ User |
| `POST` | `/api/v1/payment/checkout` | Create Stripe session | ✅ User |
| `POST` | `/webhook` | Stripe webhook handler | Stripe |
| `GET` | `/api/v1/admin/orders` | Get all orders | ✅ Admin |
| `GET` | `/api/v1/admin/customers` | Get all users | ✅ Admin |
| `GET` | `/api/v1/admin/coupons` | Get coupons | ✅ Admin |

---

## 🗺️ Architecture

```
Browser
  │
  ├── React (Vite)        ← AuthContext + Protected Routes
  │     └── Axios         ← JWT in Authorization header
  │
  ▼
Express Server
  ├── verifyToken middleware   ← JWT validation
  ├── adminOnly middleware     ← Role check
  └── Controllers
        ├── Stripe Checkout    ← Creates session
        ├── Stripe Webhook     ← Confirms payment + creates order
        ├── Product CRUD       ← mongoose-slug-generator
        └── Nodemailer         ← Password reset emails
  │
  ▼
MongoDB Atlas
  ├── Users (cart embedded)
  ├── Products (ratings array)
  ├── Orders (Stripe paymentIntentId)
  ├── Brands & Categories
  └── Coupons
```

---

## 🌟 Key Highlights

- 🔒 **Secure by design** — JWT auth, bcrypt hashing, admin-only guards
- 💳 **Real Stripe integration** — webhooks handle payment confirmation reliably
- 📊 **Full admin panel** — manage every aspect of the store
- 🎟️ **Coupon system** — discount codes at checkout
- ✉️ **Email flows** — password reset via Nodemailer
- ⚡ **Performance** — lazy-loaded admin routes, debounced search, optimized images
- 📱 **Responsive** — mobile-first design across all pages
- 🧱 **Scalable structure** — clean MVC backend, reusable React components

---

## 🚧 Future Improvements

- [ ] Wishlist / saved items feature
- [ ] Advanced analytics dashboard (revenue charts, top products)
- [ ] Product image upload (Cloudinary integration)
- [ ] Server-side rendering (Next.js migration)
- [ ] Unit & integration tests

---

## 👨‍💻 Author

**Yogesh Dumane** — Frontend Developer & AI/ML Student

[![GitHub](https://img.shields.io/badge/GitHub-yogesh--123231-181717?style=flat-square&logo=github)](https://github.com/yogesh-123231)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yogeshdumane-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/yogeshdumane/)
[![Email](https://img.shields.io/badge/Email-yogeshdumane987@gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:yogeshdumane987@gmail.com)

---

<div align="center">

**Made with ❤️ by [Yogesh Dumane](https://github.com/yogesh-123231)**

⭐ *If Solara impressed you, drop a star — it means a lot!*

</div>
