# Backend - Portfolio API

Node.js/Express backend server for handling contact form submissions and sending emails.

## Technologies

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **Nodemailer**: Email sending
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## File Structure

```
backend/
├── index.js            # Main server file
├── package.json        # Dependencies and scripts
├── .env               # Environment variables (not in git)
└── error.log          # Error logging file
```

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5001
   ```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Gmail address for sending emails | `example@gmail.com` |
| `EMAIL_PASS` | Gmail app password | `abcd efgh ijkl mnop` |
| `PORT` | Server port (default: 5001) | `5001` |

### Setting Up Gmail App Password

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Scroll to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password to your `.env` file

## Running the Server

### Development Mode
```bash
npm start
```
or
```bash
node index.js
```

The server will start on `http://localhost:5001` (or the port specified in `.env`)

### Production Mode
For production deployment, consider using:
- **PM2**: Process manager
  ```bash
  npm install -g pm2
  pm2 start index.js --name portfolio-api
  ```
- **Docker**: Containerization
- **Cloud platforms**: Heroku, Railway, Render, etc.

## API Endpoints

### POST `/api/submit-enquiry`

Handles contact form submissions and sends emails.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like to discuss a project..."
}
```

**Success Response (200):**
```json
{
  "message": "Enquiry submitted successfully!"
}
```

**Error Response (400):**
```json
{
  "error": "Please provide name, email, and message."
}
```

**Features:**
- Immediate response to client (fast UX)
- Background email processing
- Error logging to `error.log`
- HTML-formatted email template

## CORS Configuration

The server allows requests from:
- `http://localhost:3000`
- `http://127.0.0.1:3000`
- `http://localhost:5500`
- `http://127.0.0.1:5500`

To add more origins, update the CORS configuration in `index.js`:
```javascript
app.use(cors({
    origin: ['http://your-domain.com'],
    credentials: true
}));
```

## Error Handling

Errors are logged to `error.log` with timestamps:
```
[2026-02-06T11:07:18.000Z] Background Error: Connection timeout
Error stack trace...
```

## Security Considerations

- ✅ Environment variables for sensitive data
- ✅ CORS enabled with specific origins
- ✅ Input validation on form fields
- ⚠️ Consider adding rate limiting for production
- ⚠️ Consider adding request body size limits
- ⚠️ Consider adding helmet.js for security headers

## Dependencies

```json
{
  "express": "^4.x.x",
  "nodemailer": "^6.x.x",
  "cors": "^2.x.x",
  "dotenv": "^16.x.x"
}
```

## Troubleshooting

### Email not sending
1. Check `.env` file has correct credentials
2. Verify Gmail app password is enabled
3. Check `error.log` for detailed error messages
4. Ensure 2-Step Verification is enabled on Gmail

### CORS errors
1. Verify frontend is running on an allowed origin
2. Check CORS configuration in `index.js`
3. Add your frontend URL to the allowed origins array

### Port already in use
```bash
# Find process using port 5001
netstat -ano | findstr :5001

# Kill the process (Windows)
taskkill /PID <process-id> /F
```

## Future Enhancements

- [ ] Add rate limiting
- [ ] Implement request validation middleware
- [ ] Add database for storing inquiries
- [ ] Add email templates
- [ ] Add automated testing
- [ ] Add API documentation (Swagger/OpenAPI)
