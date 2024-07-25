# Medium Article Scraper and Viewer

This project is a web application that scrapes Medium for articles based on a user-specified topic and displays the top 5 related articles. The application consists of a Node.js backend and a React frontend styled with Chakra UI.

## Features

- Users can input a topic to search for articles on Medium.
- The application scrapes Medium and displays the top 5 related articles.
- Each article shows the title, author, description, publication date, and a link to the full article on Medium.
- Implements client-side search topic with loading indicators and error handling.
- Responsive design for both desktop and mobile devices.

## Tech Stack

- **Backend:** Node.js, Express.js, Puppeteer, Mongoose
- **Frontend:** React.js, Chakra UI, Axios

## Setup Instructions

### Backend

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the backend server:**

   ```bash
   npm run dev
   ```

The backend server will run on `http://localhost:8080`.

### Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the frontend development server:**

   ```bash
   npm run start
   ```

The frontend server will run on `http://localhost:3000`.

## API Endpoints

### Backend

- **POST /scrape:** Accepts a topic and initiates scraping. Returns the top 5 articles.

  - **Request Body:** `{ "topic": "your_topic" }`
  - **Response:**
    ```json
    [
      {
        "title": "Article Title",
        "author": "Author Name",
        "desc": "Description of the article",
        "date": "Publication Date",
        "url": "Article URL"
      }
    ]
    ```

- **GET /articles:** Returns the details of the scraped articles.

  - **Response:** Returs the articles which have been scraped.
    ```json
    {
      "message": "Articles found",
      "articles": [
        {
          "title": "Article Title",
          "author": "Author Name",
          "desc": "Description of the article",
          "date": "Publication Date",
          "url": "Article URL"
        }
      ]
    }
    ```

## Deployment

- [**Backend Deployment**](https://medium-article-scraper-and-viewer-v6p7.onrender.com/)

- [**Frontend Deployment**](https://medium-article-scraper-and-viewer-hq5j.onrender.com/)

## Usage

1. Navigate to the deployed frontend URL.
2. Enter a topic in the search bar and click "Search."
3. View the top 5 related articles displayed on the page.
4. Click on an Read more text to view the full content on Medium.


## Project Demonstration

**Image Preview:**

![home]()

**Video Overview:**

[**View Video**]()
