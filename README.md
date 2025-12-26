# 🧑‍💻 Dev Blog Platform

A modern **Developer Blog Platform** built with **React**, where blog posts are fetched from an API and also created manually by users, with theme customization support.

---

## 🚀 Live Demo
https://your-dev-blog.vercel.app

---

## 📌 Project Overview

The **Dev Blog Platform** is designed to simulate a real-world blogging system commonly used by developers and tech writers.

It allows users to:
- Read blog posts fetched from an external API
- Create and publish their own blog posts
- Switch between light and dark themes
- Experience a clean, readable, and developer-focused UI

The project focuses on **content management, API integration, and UI customization**.

---

## ✨ Key Features

### 📰 Blog Posts
- Fetch blog posts from an external API
- Display posts in a clean blog layout
- Read full post details on click

### ✍️ User-Created Posts
- Create blog posts manually
- Instantly display new posts without page reload
- Combine API posts and user posts in one feed

### 🌙 Theme Toggle
- Light and Dark mode support
- Theme preference persists across refresh
- Improves reading experience

### 🧭 Smooth Navigation
- Home (All Posts)
- Single Post View
- Create Post Page

---

## 🧠 How It Works (One-Shot Explanation)

- On app load, blog posts are fetched from an API
- User-created posts are stored in application state (and/or local storage)
- Both API posts and user posts are merged into a single blog feed
- Theme state controls global styling and persists across sessions
- UI updates dynamically without refreshing the page

This approach mirrors how modern blogging platforms handle **external content + user-generated content** together.

---

```bash
