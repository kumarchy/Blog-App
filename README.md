# Next.js Blog Application

## Overview
This is a modern, full-stack blog application built with Next.js, React, and MongoDB. It features a responsive design, dynamic content loading, and an admin panel for content management.
## Features
- Dynamic Blog Posts: Fetch and display blog posts from a MongoDB database.
- Category Filtering: Filter blog posts by categories (All, Technology, -Startup, Lifestyle).
- Responsive Design: Optimized for various screen sizes using Tailwind CSS.
- Admin Panel: Manage blog posts and email subscriptions.
- Email Subscription: Allow users to subscribe to the blog.
- SEO Optimized: Utilizes Next.js's built-in SEO capabilities.
- Server-Side Rendering: Improved performance and SEO with SSR.
## Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Backend: Next.js API Routes
- Database: MongoDB
- State Management: React Hooks
- HTTP Client: Axios
- Styling: CSS Modules, Tailwind CSS
- Notifications: React Toastify
- Image Optimization: Next.js Image Component
## Project Structure

## How It Works
This Next.js blog application follows a modern full-stack architecture. Here's an overview of how the different parts of the application work together:
## Frontend
1. Pages and Routing:
- The app uses Next.js's file-based routing system.
- app/page.js serves as the home page, displaying the blog list.
- app/blog/[id]/page.js handles individual blog post views.
- The admin panel pages are located in the app/admin/ directory.
2. Components:
- Reusable React components like Header, Footer, BlogList, and ItemBlog are used to build the UI.
- These components are located in the components/ directory.
3. State Management:
- React hooks (useState, useEffect) are used for local state management and side effects.
4. API Integration:
- Axios is used to make HTTP requests to the backend API routes.
5. Styling:
- Tailwind CSS is used for responsive design and styling.
## Backend
1. API Routes:
- Next.js API routes (located in app/api/) handle server-side logic.
- app/api/blog/route.js manages CRUD operations for blog posts.
- app/api/email/route.js handles email subscription functionality.
2. Database Integration:
- MongoDB is used as the database, with Mongoose as the ODM (Object Document Mapper).
- Database connection is established in lib/config/db.js.
- Mongoose models (BlogModel and EmailModel) define the structure of the data.
3. File Uploads:
- Blog post images are handled using formidable for parsing form data.
- Images are stored in the public/ directory with unique timestamps.
## Data Flow
1. Fetching Blog Posts:
- The BlogList component calls the /api/blog endpoint on mount.
- The API route queries the MongoDB database and returns the blog posts.
- Posts are displayed using the ItemBlog component.
2. Creating a Blog Post:
In the admin panel, form data (including images) is sent to /api/blog.
The API route processes the image, saves it to the server, and creates a new blog post in the database.
3. Email Subscriptions:
- When a user subscribes, their email is sent to /api/email.
- The API route saves the email to the database.
4. Server-Side Rendering:
- For improved SEO and performance, individual blog post pages (/blog/[id]) are server-side rendered.
- The getServerSideProps function fetches the blog post data before the page is rendered.
## Deployment
- The application is designed to be easily deployable to platforms like Vercel or Netlify.
- Environment variables (like the MongoDB connection string) should be set in the deployment platform for security.
  
This architecture allows for a scalable, maintainable, and performant blog application. The separation of concerns between frontend and backend, use of reusable components, and integration with a NoSQL database make it a robust solution for content management and delivery.

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kumarchy/Blog-App.git
2. Install dependencies:
   ```bash
   cd next-js-blog-app
   npm install
3. Set up your MongoDB connection:
- Create a .env.local file in the root directory.
- Add your MongoDB connection string:
  ```bash
  MONGODB_URI=your_mongodb_connection_string
4. Run the development server:
   ```bash
   npm run dev
5. Open http://localhost:3000 in your browser.
## Usage
## Viewing Blogs

- Navigate to the home page to see all blog posts.
- Use the category buttons to filter posts.
- Click on a blog post to view its full content.
## Admin Panel
- Access the admin panel at /admin.
- Add new blog posts at /admin/addblog.
- Manage existing blogs at /admin/allblogs.
- View and manage subscriptions at /admin/subscription.
## Email Subscription
- Users can subscribe to the blog using the form on the home page.
## API Routes
- GET /api/blog: Fetch all blog posts or a specific post by ID.
- POST /api/blog: Create a new blog post.
- DELETE /api/blog: Delete a blog post.
- GET /api/email: Fetch all email subscriptions.
- POST /api/email: Add a new email subscription.
- DELETE /api/email: Delete an email subscription.
## Contributing
- Contributions are welcome! Please feel free to submit a Pull Request.
