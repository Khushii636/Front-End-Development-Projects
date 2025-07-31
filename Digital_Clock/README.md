# 🕰️ Digital Clock with AM/PM-Based Theme Toggle

This is a sleek and responsive **digital clock** that changes its theme based on the current time:
- 🌅 **Morning (AM)**: Light theme
- 🌃 **Evening (PM)**: Dark theme

The design uses **glassmorphism** to give it a modern, aesthetic feel across both themes.

---

## ✨ Features

- 🕒 Real-time digital clock (updates every second)
- 🌞 Light mode automatically applied during AM hours
- 🌙 Dark mode automatically applied during PM hours
- 🧊 Glassmorphism UI design
- 💻 Fully responsive on desktop & mobile
- 💅 Clean, readable code with comments

---

## 🌈 UI Design

### Background
- **AM Gradient**: `linear-gradient(to right, #FFEFBA, #FFFFFF)`
- **PM Gradient**: `linear-gradient(to right, #141E30, #243B55)`

### Clock Container
```css
background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,0.18);
border-radius: 16px;
```

🧠 How It Works
JavaScript gets the current time using new Date().

It checks if it’s AM or PM.

Based on the time:

Adds or removes light-theme or dark-theme class from <body>.

Updates the clock text every second using setInterval.

🚀 Getting Started
1. Clone the Repository

git clone https://github.com/your-username/Digital_Clock_AM_PM_Theme.git
cd Digital_Clock_AM_PM_Theme
2. Open index.html in your browser
Just double-click or use Live Server (VS Code).

🔗 Live Demo

🌐 View Online
https://Khushii636.github.io/Front-End-Development-Projects/Digital_Clock

📁 File Structure

Digital_Clock/
│
├── index.html       # Main HTML file
├── style.css        # All CSS styles including themes and glassmorphism
└── script.js        # JS logic to update time and toggle themes


🛠️ Tech Stack
HTML

CSS (with gradients & glassmorphism)

JavaScript (vanilla)


🤍 Made with patience, gradients, and caffeine.
