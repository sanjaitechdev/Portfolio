# API Configuration Guide

## Problem: "Failed to Fetch" Error

This error occurs when the frontend cannot connect to the backend. Here's how to fix it:

---

## ✅ Solution

### 1. **Check Backend is Running**

Your backend must be running on `http://localhost:5001`

```bash
# Navigate to backend folder
cd backend

# Start the server
npm start
```

You should see:
```
Server is running on port 5001
```

### 2. **Verify API Endpoint Match**

**Backend** (`backend/index.js` line 17):
```javascript
app.post('/api/submit-enquiry', async (req, res) => {
```

**Frontend** (`frontend/script.js` line 203):
```javascript
const response = await fetch('http://localhost:5001/api/submit-enquiry', {
```

✅ Both should match: `/api/submit-enquiry`

---

## 🔧 Current Configuration

### Local Development (Testing)
```javascript
// frontend/script.js
const response = await fetch('http://localhost:5001/api/submit-enquiry', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
});
```

### Production Deployment
When you deploy, update to your deployed backend URL:
```javascript
// frontend/script.js
const response = await fetch('https://your-backend.onrender.com/api/submit-enquiry', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
});
```

---

## 🧪 Testing Steps

### 1. Start Backend
```bash
cd backend
npm start
```

### 2. Open Frontend
- Open `frontend/index.html` in browser
- Or use Live Server in VS Code
- Or run: `cd frontend && python -m http.server 3000`

### 3. Test Contact Form
1. Scroll to Contact section
2. Fill in:
   - Name: Test User
   - Email: test@example.com
   - Message: Testing the form
3. Click "Submit Request"
4. You should see: "Message sent! I'll get back to you soon."

### 4. Check Backend Logs
In the terminal where backend is running, you should see the request being processed.

---

## 🐛 Troubleshooting

### Error: "Failed to fetch"
**Cause:** Backend is not running or wrong URL

**Fix:**
1. Check backend is running: `cd backend && npm start`
2. Verify URL in `script.js` is `http://localhost:5001/api/submit-enquiry`
3. Check browser console for exact error

### Error: "CORS policy"
**Cause:** Frontend origin not allowed

**Fix:** Update `backend/index.js` CORS settings:
```javascript
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:5500',
        'http://127.0.0.1:5500'
    ],
    credentials: true
}));
```

### Error: "Network request failed"
**Cause:** Backend port is different

**Fix:** Check backend console for actual port, update frontend URL accordingly

### Error: 400 Bad Request
**Cause:** Missing form fields

**Fix:** Ensure all fields (name, email, message) are filled

---

## 📝 Quick Reference

| Environment | Backend URL | Frontend Action |
|-------------|-------------|-----------------|
| **Local** | `http://localhost:5001` | Use this URL in `script.js` |
| **Production** | `https://your-app.onrender.com` | Update URL before deploying |

---

## 🚀 For Deployment

### Step 1: Deploy Backend First
1. Deploy to Render/Railway/Heroku
2. Copy the deployed URL (e.g., `https://portfolio-api.onrender.com`)

### Step 2: Update Frontend
```javascript
// Change in frontend/script.js line 203
const response = await fetch('https://portfolio-api.onrender.com/api/submit-enquiry', {
```

### Step 3: Update Backend CORS
```javascript
// Add to backend/index.js CORS origins
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://your-frontend.netlify.app'  // Add your deployed frontend URL
    ],
    credentials: true
}));
```

### Step 4: Deploy Frontend
Deploy to Netlify/Vercel with updated API URL

---

## ✨ Current Status

- ✅ API endpoint fixed: `/api/submit-enquiry`
- ✅ Frontend URL updated: `http://localhost:5001/api/submit-enquiry`
- ✅ Backend CORS configured
- ⏳ Backend server needs to be running

**Next:** Start backend server with `npm start` in the `backend` folder!
