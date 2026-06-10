# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Portfolio Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save and copy your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key**

## Step 5: Configure Your Project
1. Copy `.env.example` to `.env`
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Restart your development server

## Step 6: Test the Form
1. Fill out the contact form on your site
2. Check your email (shankar72ind@gmail.com) for the message
3. If you don't receive it, check:
   - EmailJS dashboard logs
   - Browser console for errors
   - Spam folder

## Email Template Variables
The form sends these variables:
- `from_name` - Sender's name
- `from_email` - Sender's email
- `message` - Message content

Make sure your EmailJS template uses these exact variable names!

## Troubleshooting
- **"Public Key not found"**: Check you copied the key correctly
- **403 Forbidden**: Your EmailJS account might need verification
- **Form not sending**: Check browser console for errors
- **No email received**: Check EmailJS logs in dashboard

## Free Tier Limits
- 200 emails/month
- Perfect for portfolio contact forms!
