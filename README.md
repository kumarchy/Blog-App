# Next.js Blog Application

## Overview
This is a modern, full-stack blog application built with Next.js, React, and MongoDB. It features a responsive design, dynamic content loading, and an admin panel for content management.
# Features
- Dynamic Blog Posts: Fetch and display blog posts from a MongoDB database.
- Category Filtering: Filter blog posts by categories (All, Technology, -Startup, Lifestyle).
- Responsive Design: Optimized for various screen sizes using Tailwind CSS.
- Admin Panel: Manage blog posts and email subscriptions.
- Email Subscription: Allow users to subscribe to the blog.
- SEO Optimized: Utilizes Next.js's built-in SEO capabilities.
- Server-Side Rendering: Improved performance and SEO with SSR.
# Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Backend: Next.js API Routes
- Database: MongoDB
- State Management: React Hooks
- HTTP Client: Axios
- Styling: CSS Modules, Tailwind CSS
- Notifications: React Toastify
- Image Optimization: Next.js Image Component
# Project Structure
```bash
   ├── app/
   │   ├── admin/
   │   │   ├── addblog/
   │   │   ├── allblogs/
   │   │   └── subscription/
   │   ├── blog/
   │   │   └── [id]/
   │   ├── api/
   │   │   ├── blog/
   │   │   └── email/
   │   └── layout.js
   ├── components/
   │   ├── AdminComponents/
   │   ├── BlogList.js
   │   ├── Footer.js
   │   ├── Header.js
   │   └── ItemBlog.js
   ├── lib/
   │   ├── config/
   │   │   └── db.js
   │   └── models/
   │       ├── BlogModel.js
   │       └── EmailModel.js
   ├── public/
   └── package.json

