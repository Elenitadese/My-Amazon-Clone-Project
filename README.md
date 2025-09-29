# 🛒 My Amazon Clone Project – Frontend

This is the **frontend** of the My Amazon Clone Project, built using **React (Vite)**.  
It provides a clean UI for browsing products, adding them to the cart, and managing orders.  
This frontend connects to the **Amazon API Deploy** backend for data and payment processing.

---

## 🚀 Features
- User-friendly e-commerce interface similar to Amazon.
- Product listing and detail pages.
- Shopping cart management.
- Checkout flow integrated with Stripe for payments.
- Responsive design for desktop and mobile.
- Environment-based API connection (local & production).

---

## 🗂 Project Structure

My-Amazon-Clone-Project/
├─ public/
├─ src/
│ ├─ Components/
│ ├─ Pages/
│ ├─ Api/
│ ├─ App.jsx
│ └─ main.jsx
├─ package.json
└─ vite.config.js

---

## 🛠️ Tech Stack
- **React (Vite)**
- **React Router**
- **Context API** for state management
- **Axios** for API calls
- **Stripe** for payments
- **CSS Modules** for styling

---

## 🔗 Backend API
The frontend communicates with the backend API repository:  
[Amazon_Api_deploy](https://github.com/Elenitadese/Amazon_Api_deploy)

### Environment Variables
Create a `.env` file at the root of your project:


When deployed to production, replace with your deployed API URL:


---

## ⚙️ Installation & Setup (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/Elenitadese/My-Amazon-Clone-Project.git
   cd My-Amazon-Clone-Project
2.Install dependencies
npm install
3.Run the development server
npm run dev
4.Make sure your backend is running
👩‍💻Author

Eleni Tadese

GitHub: elenitadese
📝 License
This project is open-source and available under the MIT License
.