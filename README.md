# 🚚 FASTER - Lightning Fast Logistics & Delivery Partner

<p align="center">
  <strong>A modern, responsive landing page for shipping, logistics, and supply chain management services.</strong>
</p>


---

## 📖 Table of Contents
1. [About the Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [Technologies Used](#-technologies-used)
4. [Project Structure](#-project-structure)
5. [How to Run](#%EF%B8%8F-how-to-run)
6. [Animations & Interactivity](#-animations--interactivity)

---

## 🌟 About the Project

**FASTER** is a professional, high-performance landing page designed for modern logistics, cargo, and supply chain companies. The website provides a premium, responsive user interface tailored to showcase shipping solutions, warehousing, local distribution, and client statistics. It integrates clean design aesthetics with smooth, scroll-based interactions to deliver an engaging user experience across all device sizes.

---

## 🚀 Key Features

- 📱 **Fully Responsive:** Seamlessly adapts to mobile, tablet, and desktop screens using Bootstrap 5.
- 🎨 **Modular Styling:** CSS files are organized in a component-based directory structure (one file per section) for easy maintainability.
- ✨ **Scroll Reveal Animations:** Interactive slide-ins and fades triggered dynamically as the user scrolls, built using the `IntersectionObserver` API.
- 📍 **Scrollspy Navigation:** Header links update automatically in real-time to highlight the active section as the user scrolls.
- 🚚 **Comprehensive Layout:** Includes all necessary sections for a business landing page:
  - **Hero Section:** High-impact heading, client statistics, and a location/zip search bar.
  - **Quick Services Overview:** Mini-cards highlighting express delivery, warehousing, and local distribution.
  - **About Section:** Rich company history, key values, and support services.
  - **Detailed Services Grid:** Rich, hover-responsive cards detailing various logistical workflows.
  - **Call to Action (CTA):** Encouraging lead capture and customer acquisition.
  - **Features Showcase:** Deep dive into eco-friendly transportation, customs clearing, climate-controlled cargo, and API integrations.
  - **Interactive Pricing:** A multi-tier subscription grid with elegant design patterns.
  - **Contact Form:** Interactive feedback form with integrated location, email, and phone contact cards.
  - **Footer:** Social media links, copyright notice, legal page links, and directory short-links.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic architecture to ensure structure and search engine optimization (SEO) compliance.
* **CSS3 (Vanilla):** Custom layout designs, layout alignments, gradients, and custom animations.
* **Bootstrap 5:** Utility classes and grids to support responsive design and fluid card structures.
* **Vanilla JavaScript:** High-performance DOM manipulation, Intersection Observers, and interactive scroll spy tracking.
* **Font Awesome 6:** Modern vector icon assets.
* **Google Fonts (Open Sans):** Premium typography.

---

## 📂 Project Structure

```bash
project2/
├── assets/                 # Image, background, and icon assets (SVG, PNG, JPG)
├── style/                  # Modular stylesheets
│   ├── about.css
│   ├── animations.css      # Core scroll animation keyframes and classes
│   ├── contact.css
│   ├── footer.css
│   ├── header.css
│   ├── info.css
│   ├── main.css
│   ├── pricing.css
│   ├── quote.css
│   ├── ser.css
│   ├── serv.css
├── index.html              # Main HTML markup entry point
├── app.js                  # Global JavaScript logical actions
└── README.md               # Project documentation (this file)
```

---

## ⚙️ How to Run

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project root folder.
3. Open `index.html` directly in any web browser, or launch it with a local development server like VS Code's **Live Server** plugin.

---

## 💫 Animations & Interactivity

The site uses a native JavaScript implementation of the **IntersectionObserver API** in [app.js](file:///d:/Front-End\NTI\project2\app.js) to trigger styles:
1. Target elements with classes `.reveal`, `.reveal-left`, or `.reveal-right` are observed.
2. Once they cross the viewport threshold (15% visibility), the `.active` class is added, triggering CSS transition styles defined in [animations.css](file:///d:/Front-End\NTI\project2\style/animations.css).
3. The `<header>` element receives a `.scrolled` class when scrolling past `50px` to apply a premium, semi-transparent frosted background (glassmorphism).

---
