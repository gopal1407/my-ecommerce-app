# 🛒 My E-Commerce App

A modern, responsive e-commerce application built with **React** that supports product browsing, a dynamic cart, and seamless checkout. The project is developed with **Test-Driven Development (TDD)** and features a complete **CI/CD pipeline** using **GitHub Actions** and deployment via **Vercel**.

---

## 🔗 Live Demo

🌐 [View Deployed App on Vercel](https://your-vercel-project-name.vercel.app)

---

## 📌 CI/CD Status

![CI/CD](https://github.com/gopal1407/my-ecommerce-app/actions/workflows/main.yml/badge.svg)

---

## 🧰 Tech Stack

- **Frontend**: React, HTML5, CSS3, JavaScript
- **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel

---

## 🧪 Test-Driven Development (TDD)

This project was built using the TDD approach:

### ✅ Unit Tests
- **ProductCard.test.js**
  - Tests product rendering (name, price)
  - Tests “Add to Cart” click functionality
- **Header.test.js**
  - Ensures site header renders correctly

### 🔁 Integration Test
- **CartIntegration.test.js**
  - Simulates adding a product to the cart
  - Asserts cart state updates

> Run all tests:
```bash
npm test
