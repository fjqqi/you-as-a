
Task: Build a fully responsive, single-page "Moodboard Grid" web application. The user will click on grid cells to upload images, creating a personalized 3x3 photo collage that they can download.

Tech Stack:

Framework: Next.js (App Router), React

Styling: Tailwind CSS

Icons: Lucide React (minimalist line-art style)

Animations: Framer Motion (for smooth micro-interactions)

Export: html-to-image or html2canvas (to capture the DOM as a PNG)

UI/UX & Aesthetic Requirements:

Theme: Default to a modern, elegant Dark Mode layout. Use deep blacks/grays (e.g., bg-neutral-950) for the background and subtle borders (border-neutral-800).

Typography: Clean, sans-serif fonts (like Inter or standard system fonts). Keep text lowercase and minimalist.

Grid Layout: A perfect 3x3 square grid (aspect-square). On mobile, it should take up almost the full width of the screen. On desktop, constrain the max-width to around max-w-3xl so it remains visually appealing.

UI Elements: Use soft rounded corners (rounded-2xl or rounded-xl) for the grid container and buttons.

Component Logic & Interaction Design:

1. The Grid Cells (Empty State):

Each cell must have a fixed aspect ratio (aspect-square) and a subtle hover effect (e.g., slight background color change or border glow using Framer Motion).

The 9 specific categories are: "animal", "place", "plant", "character", "season", "hobby", "color", "outfit", "food".

Inside an empty cell, perfectly center the category text. Below the text, include a minimalist button with a Lucide upload icon and the text "Click to upload".

2. File Upload Handling:

Create a hidden <input type="file" accept="image/*" /> for each cell or a global one that tracks the currently selected index.

Use React state to manage the array of 9 images. Ensure the uploaded file is read via URL.createObjectURL or a FileReader to render it locally without needing a backend.

3. The Grid Cells (Filled State):

When an image is uploaded, it must cover the entire cell without distortion (object-cover, w-full, h-full).

Add a smooth fade-in animation when the image renders.

The category name should transform into a small, elegant semi-transparent pill/badge at the bottom center or bottom corner of the cell (e.g., bg-black/50 backdrop-blur-md text-white).

Clicking a filled cell should reopen the file selector to replace the image.

4. Export Functionality:

Below the grid, place a primary "Download Image" button. Make it look premium (e.g., white text on a subtle gradient or a solid high-contrast color with a download icon).

When clicked, only the 3x3 grid container should be captured and downloaded as a high-quality PNG. Exclude the download button itself from the capture.

Code Structure Instructions:

Provide clean, highly modular code.

Separate the logic into at least a main page.tsx and a reusable GridCell component if possible.

Include all necessary imports and clear instructions on which npm packages to install (e.g., npm install framer-motion html-to-image lucide-react).