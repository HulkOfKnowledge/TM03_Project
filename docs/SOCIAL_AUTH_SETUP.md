# Supabase Social Authentication Setup

This guide explains how to configure Google and Facebook OAuth authentication in Supabase for the Creduman platform.

## Prerequisites

- Active Supabase project
- Access to Supabase Dashboard
- Google Cloud Console account (for Google OAuth)
- Facebook Developer account (for Facebook OAuth)

## 1. Google OAuth Setup

### Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing project
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure OAuth consent screen if not already done:
   - App name: **Creduman**
   - User support email: Your email
   - Developer contact: Your email
   - Authorized domains: Add your domain
6. Create OAuth 2.0 Client ID:
   - Application type: **Web application**
   - Name: **Creduman Web App**
   - Authorized redirect URIs:
     ```
     https://<your-supabase-project-ref>.supabase.co/auth/v1/callback
     ```
     Example: `https://abcdefghijklmn.supabase.co/auth/v1/callback`

7. Copy the **Client ID** and **Client Secret**

### Step 2: Configure in Supabase

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Select your Creduman project
3. Navigate to **Authentication** → **Providers**
4. Find **Google** and click to configure
5. Enable the provider
6. Paste your **Client ID** and **Client Secret**
7. Click **Save**

## 2. Facebook OAuth Setup

### Step 1: Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **My Apps** → **Create App**
3. Select **Consumer** as app type
4. App Display Name: **Creduman**
5. App Contact Email: Your email
6. Click **Create App**

### Step 2: Configure Facebook Login

1. In your Facebook App dashboard, click **Add Product**
2. Find **Facebook Login** and click **Set Up**
3. Select **Web** platform
4. Enter your site URL (for development: `http://localhost:3000`)
5. Go to **Facebook Login** → **Settings** in left sidebar
6. Add the following to **Valid OAuth Redirect URIs**:
   ```
   https://<your-supabase-project-ref>.supabase.co/auth/v1/callback
   ```
   Example: `https://abcdefghijklmn.supabase.co/auth/v1/callback`

7. Click **Save Changes**

### Step 3: Get App Credentials

1. Go to **Settings** → **Basic** in left sidebar
2. Copy **App ID** and **App Secret**
3. Add your domain to **App Domains**
4. Scroll down and make app **Live** (toggle at top)

### Step 4: Configure in Supabase

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Select your Creduman project
3. Navigate to **Authentication** → **Providers**
4. Find **Facebook** and click to configure
5. Enable the provider
6. Paste your **App ID** as Client ID
7. Paste your **App Secret** as Client Secret
8. Click **Save**

## 3. Email Uniqueness Enforcement

Supabase automatically enforces email uniqueness across all authentication methods. When a user signs in with Google or Facebook:

- If the email already exists in the database, they will be signed into the existing account
- The authentication method (OAuth provider) is linked to the existing account
- No duplicate accounts are created

### Additional Security in Code

The signup page includes additional validation:

```typescript
// Check if email already exists
const { data: existingUser } = await supabase
  .from('user_profiles')
  .select('user_id')
  .eq('email', validatedData.email)
  .single();

if (existingUser) {
  setErrors({ email: 'An account with this email already exists' });
  return;
}
```

## 4. Testing OAuth Flow

### Development URLs

For local development, you may need to add `http://localhost:3000` to:
- Google Cloud Console: Authorized redirect URIs
- Facebook App: Valid OAuth Redirect URIs

### Testing Steps

1. Start your development server: `npm run dev`
2. Navigate to `/login` or `/signup`
3. Click "Continue with Google" or "Continue with Facebook"
4. You should be redirected to the provider's consent screen
5. After granting permission, you'll be redirected back to Creduman
6. The callback route at `/api/auth/callback` handles the OAuth response
7. User is created/signed in and redirected to appropriate dashboard

## 5. Production Configuration

Before deploying to production:

1. **Update OAuth Redirect URIs** in both Google and Facebook to use your production domain:
   ```
   https://creduman.com/api/auth/callback
   ```

2. **Update Supabase Site URL**:
   - Go to **Authentication** → **URL Configuration**
   - Set **Site URL** to your production domain: `https://creduman.com`
   - Add production domain to **Redirect URLs**

3. **Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon/public key

4. **Remove Development URLs** from OAuth providers

## 6. Troubleshooting

### Common Issues

**"Redirect URI mismatch" error**
- Ensure the redirect URI in Google/Facebook exactly matches Supabase callback URL
- Check for trailing slashes or typos

**"Invalid OAuth state" error**
- Clear browser cookies and try again
- Ensure Supabase project URL is correct in environment variables

**User not created in database**
- Check if database trigger is enabled: `supabase/migrations/20260129000000_initial_schema.sql`
- Verify Row Level Security (RLS) policies allow inserts

**Email uniqueness not working**
- Supabase handles this automatically via auth.users table
- Check that both OAuth and email/password auth are using the same user pool

## 7. Security Best Practices

1. **Never commit secrets**: Keep OAuth secrets in environment variables
2. **Use HTTPS in production**: OAuth requires secure connections
3. **Validate user data**: Always validate user metadata from OAuth providers
4. **Monitor failed attempts**: Set up Supabase auth event webhooks
5. **Rate limiting**: Configure rate limits in Supabase dashboard

## Support

For more information:
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Facebook Login Documentation](https://developers.facebook.com/docs/facebook-login)
