# Changeis  React Challenge
A React application that fetches and displays images from a remote API. It includes role-based authentication, protected routes, and a search feature for filtering images.
# Features
- Image Gallery: Displays a gallery of images fetched from an external API.
- Role-Based Authentication: Manage user authentication and access control based on roles.
- Protected Routes: Restrict access to certain routes based on user roles.
- Search and Sort: Filter and sort images within the gallery.
- Error Handling: Displays error messages and loading states.
  
## Technologies Used

- React
- React Router
- TypeScript
- CSS
- React Context API
- React Hooks

# Prerequisites
- Node.js (>= 16.0.0)
- npm (>= 8.0.0) or yarn (>= 1.22.0)

# Installation
  - # Clone the repository:
    git clone https://github.com/radhaponnusamy/ChangisReactChallenge.git
- # Navigate to the project directory:
    cd faker-images-app
- # Install dependencies:
    npm install

# Configuration
    API Endpoint: Update the API endpoint in src/services/config.ts with your own image API URL. 

# Running the Application

 - # Start the development server:
    npm start

 - # Open your browser and go to:
    http://localhost:3000

# Application Structure

- src/: Main source directory.
- components/: Contains reusable React components.
  - NavBar.tsx: Navigation bar component.
  - Header.tsx: Header component.
  - Footer.tsx: Footer component.
  - ImageGallery.tsx: Displays the image gallery with search and sort features.
  - About.tsx: About page component.
  - ContactUs.tsx: Contact Us page component.
  - NotFound.tsx: 404 Not Found page component.
  - Login.tsx: Login page component.
  - Logout.tsx: Logout functionality component.
  - AppRouter.tsx: Router component managing the application routes and protected routes.
- contexts/: Contains context for managing authentication.
  - AuthContext.tsx: Provides authentication context and hooks.
- services/: Contains service functions for API calls.
  - fetchImages.ts: Fetches images from the API.
  - config.ts: Configuration file for API URLs.
- types/: Contains TypeScript types.
  - ImageData.ts: Defines the shape of image data.
  - Role.ts: Defines user roles.
- App.tsx: Main application component.


# Authentication and Authorization
- Role-Based Authentication: Use the AuthContext to manage authentication and roles.
Protected Routes: Use ProtectedRoute to restrict access based on user roles.
