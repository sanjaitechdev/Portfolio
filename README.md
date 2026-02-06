# Portfolio Website

A professional full-stack developer portfolio website with separate frontend and backend.

## Project Structure

```
Portfolio/
├── frontend/          # Client-side code (HTML, CSS, JavaScript)
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── custom.css
│   ├── theme.css
│   ├── responsive.css
│   └── assets/
├── backend/           # Server-side code (Node.js/Express)
│   ├── index.js
│   ├── package.json
│   └── .env
└── README.md
```

## Technologies Used

### Frontend
- HTML5
- CSS3 (with custom themes and responsive design)
- Vanilla JavaScript
- Modern UI/UX with glassmorphism effects

### Backend
- Node.js
- Express.js
- Nodemailer (for contact form emails)
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file in the `backend` directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5001
   ```

   Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:5001`

3. **Set up the Frontend**
   ```bash
   cd frontend
   ```
   
   Open `index.html` in your browser or use a live server:
   - **VS Code**: Right-click on `index.html` → "Open with Live Server"
   - **Python**: `python -m http.server 3000`
   - **Node**: `npx serve -p 3000`

## Features

- ✨ Modern, responsive design with dark/light theme toggle
- 📱 Mobile-friendly navigation
- 🎨 Glassmorphism UI effects
- 📧 Working contact form with email integration
- 🚀 Smooth animations and transitions
- ♿ Accessibility-focused (ARIA labels, semantic HTML)

## Contact Form

The contact form sends emails via the backend API. Make sure:
1. Backend server is running
2. `.env` file is properly configured with Gmail credentials
3. Gmail account has "App Passwords" enabled for less secure apps

## License

All rights reserved © 2026 Sanjai

## Author

**Sanjai K**
- Full Stack Developer | AI Developer
- Email: [EMAIL_ADDRESS]
- LinkedIn: [sanjaiit](https://www.linkedin.com/in/sanjaiit/)
- GitHub: [sanjaitechdev](https://github.com/sanjaitechdev)
