# Frontend - Portfolio Website

The client-side code for the portfolio website featuring a modern, responsive design with theme switching capabilities.

## Technologies

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, flexbox, grid, animations
- **JavaScript (ES6+)**: Vanilla JS for interactions and API calls

## File Structure

```
frontend/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── style.css           # Main styles
├── custom.css          # Custom component styles
├── theme.css           # Theme variables (dark/light)
├── responsive.css      # Media queries for responsiveness
└── assets/             # Images and static files
    ├── portfolio.jpg
    ├── images/
    └── Sanjai-K-Resume.pdf
```

## Features

### 🎨 Design
- Modern glassmorphism effects
- Smooth animations and transitions
- Dark/light theme toggle with localStorage persistence
- Fully responsive design (mobile, tablet, desktop)

### 📱 Navigation
- Sticky header with scroll effects
- Mobile hamburger menu with smooth animations
- Active section highlighting
- Smooth scroll to sections

### 📧 Contact Form
- Client-side validation
- Real-time error feedback
- API integration with backend
- Success/error message display

### ♿ Accessibility
- ARIA labels and roles
- Semantic HTML structure
- Keyboard navigation support
- Reduced motion support for animations

## Running the Frontend

### Option 1: Live Server (Recommended)
If using VS Code with Live Server extension:
1. Right-click on `index.html`
2. Select "Open with Live Server"
3. The site will open at `http://localhost:5500` (or similar)

### Option 2: Python HTTP Server
```bash
cd frontend
python -m http.server 3000
```
Visit `http://localhost:3000`

### Option 3: Node.js Serve
```bash
cd frontend
npx serve -p 3000
```
Visit `http://localhost:3000`

## Configuration

### API Endpoint
The contact form connects to the backend API. The endpoint is configured in `script.js`:

```javascript
const response = await fetch('http://localhost:5001/api/submit-enquiry', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
});
```

**Note**: Make sure the backend server is running on port 5001 before testing the contact form.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Changing Theme Colors
Edit `theme.css` to modify color schemes:
```css
[data-theme="dark"] {
    --color-primary: #your-color;
    --color-background: #your-color;
    /* ... */
}
```

### Adding New Sections
1. Add HTML section in `index.html`
2. Add navigation link in the navbar
3. Style in `style.css` or `custom.css`
4. Add animations if needed in `script.js`

## Performance

- Lazy loading for images
- Deferred script loading
- CSS animations with GPU acceleration
- Optimized asset sizes
