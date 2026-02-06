# Deployment Guide - Portfolio Website

Complete guide for deploying your portfolio frontend and backend separately.

## ✅ Current Status

Your project is **ready for deployment**:

- ✅ Frontend and backend are properly separated
- ✅ CORS is configured correctly
- ✅ API endpoint is set up (`http://localhost:5001/api/submit-enquiry`)
- ✅ Environment variables are configured
- ✅ All files are organized

---

## 🚀 Deployment Options

### Frontend Deployment (Static Hosting)

#### Option 1: **Netlify** (Recommended - Free)

1. **Prepare for deployment:**
   - Your frontend is already ready in the `frontend/` folder

2. **Deploy via Netlify:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Navigate to frontend
   cd frontend
   
   # Deploy
   netlify deploy
   ```
   
   Or use **Netlify Drop** (Drag & Drop):
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `frontend` folder
   - Done! ✅

3. **Update API URL:**
   After backend deployment, update `script.js` line 203:
   ```javascript
   const response = await fetch('YOUR_BACKEND_URL/api/submit-enquiry', {
   ```

#### Option 2: **Vercel** (Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend
cd frontend

# Deploy
vercel
```

#### Option 3: **GitHub Pages** (Free)

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set source to `main` branch and `/frontend` folder
4. Your site will be live at `https://username.github.io/repository-name`

---

### Backend Deployment (Node.js Hosting)

#### Option 1: **Render** (Recommended - Free)

1. **Create account:** [render.com](https://render.com)

2. **Create Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Root Directory:** `backend`
     - **Build Command:** `npm install`
     - **Start Command:** `node index.js`
     - **Environment:** Node

3. **Add Environment Variables:**
   ```
   EMAIL_USER=sanjaibtechit.official@gmail.com
   EMAIL_PASS=uxum khhs tlug tlum
   PORT=5001
   ```

4. **Deploy!** Your backend will be live at `https://your-app.onrender.com`

#### Option 2: **Railway** (Free)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Navigate to backend
cd backend

# Login and deploy
railway login
railway init
railway up
```

Add environment variables in Railway dashboard.

#### Option 3: **Heroku** (Paid)

```bash
# Install Heroku CLI
# Then:
cd backend
heroku create your-portfolio-api
git push heroku main
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
```

---

## 🔧 Post-Deployment Configuration

### 1. Update Frontend API URL

After backend is deployed, update `frontend/script.js`:

```javascript
// Change from:
const response = await fetch('http://localhost:5001/api/submit-enquiry', {

// To:
const response = await fetch('https://your-backend-url.com/api/submit-enquiry', {
```

### 2. Update Backend CORS

Update `backend/index.js` to allow your frontend domain:

```javascript
app.use(cors({
    origin: [
        'http://localhost:3000', 
        'http://127.0.0.1:3000', 
        'http://localhost:5500', 
        'http://127.0.0.1:5500',
        'https://your-frontend-domain.netlify.app'  // Add this
    ],
    credentials: true
}));
```

### 3. Redeploy Both

- Redeploy backend with updated CORS
- Redeploy frontend with updated API URL

---

## 📝 Quick Deployment Checklist

### Backend First:
- [ ] Choose hosting platform (Render/Railway/Heroku)
- [ ] Deploy backend
- [ ] Add environment variables
- [ ] Test API endpoint (use Postman or curl)
- [ ] Copy backend URL

### Frontend Second:
- [ ] Update API URL in `script.js` with backend URL
- [ ] Update CORS in backend with frontend domain
- [ ] Choose hosting platform (Netlify/Vercel/GitHub Pages)
- [ ] Deploy frontend
- [ ] Test contact form

---

## 🧪 Testing Deployment

### Test Backend:
```bash
curl -X POST https://your-backend-url.com/api/submit-enquiry \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Testing deployment"}'
```

Expected response:
```json
{"message":"Enquiry submitted successfully!"}
```

### Test Frontend:
1. Visit your deployed frontend URL
2. Navigate to Contact section
3. Fill and submit the form
4. Check for success message
5. Verify email received

---

## 🎯 Recommended Deployment Strategy

**Best Practice:**

1. **Backend:** Deploy to **Render** (Free, reliable, easy)
2. **Frontend:** Deploy to **Netlify** (Free, fast CDN, auto-deploy)

**Steps:**
```bash
# 1. Deploy Backend to Render
# - Go to render.com
# - Create Web Service from GitHub repo
# - Set root directory to 'backend'
# - Add environment variables
# - Deploy

# 2. Update Frontend
cd frontend
# Edit script.js line 203 with Render backend URL

# 3. Deploy Frontend to Netlify
netlify deploy --prod
```

---

## 🔐 Security Notes

- ✅ Never commit `.env` file to Git
- ✅ Use environment variables for sensitive data
- ✅ Keep CORS origins specific (don't use `*`)
- ✅ Consider adding rate limiting in production
- ✅ Use HTTPS for both frontend and backend

---

## 💡 Pro Tips

1. **Custom Domain:**
   - Buy domain from Namecheap/GoDaddy
   - Point to Netlify/Vercel for frontend
   - Use subdomain (api.yourdomain.com) for backend

2. **Environment-based API URL:**
   Create `config.js` in frontend:
   ```javascript
   const API_URL = window.location.hostname === 'localhost' 
       ? 'http://localhost:5001'
       : 'https://your-backend-url.com';
   ```

3. **Monitoring:**
   - Use Render/Railway built-in logs
   - Set up email alerts for errors
   - Monitor API usage

---

## 📞 Support

If you face issues:
1. Check browser console for errors
2. Check backend logs on hosting platform
3. Verify CORS settings
4. Test API endpoint separately
5. Ensure environment variables are set

---

## ✨ Your URLs After Deployment

```
Frontend: https://your-portfolio.netlify.app
Backend:  https://your-portfolio-api.onrender.com
API:      https://your-portfolio-api.onrender.com/api/submit-enquiry
```

**You're all set! 🚀**
