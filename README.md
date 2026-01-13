# Justin Ragland - Portfolio

A minimalist, high-performance portfolio site built with React, TypeScript, and Tailwind CSS.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## Deployment on Cloudflare Pages

This project is configured to use [Vite](https://vitejs.dev/) for bundling, which makes deployment on Cloudflare Pages straightforward.

1.  **Push to GitHub/GitLab:** Ensure this repository is pushed to your git provider.
2.  **Create a Project in Cloudflare Pages:**
    *   Log in to the Cloudflare Dashboard and go to **Workers & Pages**.
    *   Click **Create application** > **Pages** > **Connect to Git**.
    *   Select this repository.
3.  **Configure Build Settings:**
    *   **Framework preset:** `Vite`
    *   **Build command:** `npm run build`
    *   **Build output directory:** `dist`
4.  **Save and Deploy:** Click **Save and Deploy**. Cloudflare will build the site and provide a live URL.

## Tech Stack

*   **React 18**
*   **TypeScript**
*   **Vite**
*   **Tailwind CSS** (via CDN for portability, configured in `index.html`)
*   **Framer Motion** for animations
