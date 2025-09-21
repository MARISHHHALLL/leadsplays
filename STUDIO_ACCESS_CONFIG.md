# Sanity Studio Access Configuration

This Sanity Studio has been configured to restrict access to only specific email addresses.

## Setup

1. Create a `.env.local` file in your project root with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-09-16

# Studio Access Control - Add up to 2 allowed email addresses
SANITY_ALLOWED_EMAIL_1=admin@yourdomain.com
SANITY_ALLOWED_EMAIL_2=editor@yourdomain.com
```

2. Replace the email addresses with the actual emails that should have access to the studio.

3. Restart your development server after adding the environment variables.

## How it works

- Only the email addresses specified in `SANITY_ALLOWED_EMAIL_1` and `SANITY_ALLOWED_EMAIL_2` will be able to access the studio
- Users will see a custom login screen when accessing `/studio`
- Authentication attempts are logged to the console for debugging
- If no allowed emails are configured, access will be denied with a warning

## Accessing the Studio

1. Navigate to `http://localhost:3000/studio` (or your deployed URL + `/studio`)
2. Enter one of the authorized email addresses
3. Click "Access Studio" to authenticate

## Security Notes

- The authentication is client-side only and should be used for basic access control
- For production use, consider implementing server-side authentication
- The allowed emails are visible in the browser console, so this is not suitable for highly sensitive content
