# Firebase Security Rules for JayPrint

## Firestore Security Rules

Copy and paste these rules into your Firebase Console:
**Firebase Console → Firestore Database → Rules**

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Orders collection - allow public write (for customer orders), read only for authenticated admin
    match /orders/{orderId} {
      // Allow anyone to create orders (customer submissions)
      allow create: if request.auth == null 
                    && request.resource.data.orderId is string
                    && request.resource.data.firstName is string
                    && request.resource.data.lastName is string
                    && request.resource.data.whatsapp is string
                    && request.resource.data.product is string;
      
      // Only authenticated users (admin) can read, update, or delete orders
      allow read, update, delete: if request.auth != null;
    }
    
    // Deny all other collections by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Firebase Storage Rules (if you plan to use Storage for images)

Copy and paste these rules into your Firebase Console:
**Firebase Console → Storage → Rules**

```javascript
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    
    // Order images folder - allow public upload, admin read/delete
    match /orders/{orderId}/{imageType} {
      // Allow anyone to upload images (max 5MB)
      allow create: if request.resource.size < 5 * 1024 * 1024
                    && imageType in ['photo.jpg', 'signature.jpg'];
      
      // Only authenticated users (admin) can read or delete
      allow read, delete: if request.auth != null;
    }
    
    // Deny all other paths
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

## Setup Instructions

### Step 1: Create a New Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Name it "JayPrint" (or your preferred name)
4. Disable Google Analytics (optional, not needed for this project)
5. Click "Create project"

### Step 2: Enable Firestore Database

1. In your Firebase project, go to **Build → Firestore Database**
2. Click "Create database"
3. Choose **Production mode** (we'll add custom rules)
4. Select a location closest to your users (e.g., `us-central1`)
5. Click "Enable"
6. Go to the **Rules** tab
7. Copy and paste the Firestore rules above
8. Click "Publish"

### Step 3: Enable Authentication (for Admin Access)

1. Go to **Build → Authentication**
2. Click "Get started"
3. Go to **Sign-in method** tab
4. Enable **Email/Password**
5. Go to **Users** tab
6. Click "Add user"
7. Enter your admin email and password
8. Click "Add user"

### Step 4: Get Your Firebase Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll down to "Your apps"
3. Click the **Web** icon `</>`
4. Register your app with a nickname like "JayPrint Web"
5. Copy the `firebaseConfig` object

### Step 5: Update Your `.env.local` File

Replace the contents of your `.env.local` file with your new Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Admin password for dashboard access
NEXT_PUBLIC_ADMIN_PASSWORD=YourSecureAdminPassword123!
```

### Step 6: Update Firebase Config File

Your current file at `lib/firebase.ts` should work automatically with the new `.env.local` values.

## Security Features Explained

### Firestore Rules:

1. **Orders Collection**
   - ✅ Anyone can CREATE orders (customers placing orders)
   - ✅ Validates required fields (orderId, name, whatsapp, product)
   - ✅ Only authenticated users can READ orders (admin only)
   - ✅ Only authenticated users can UPDATE orders (admin changing status)
   - ✅ Only authenticated users can DELETE orders

2. **Default Deny**
   - ❌ All other collections are blocked by default
   - Prevents unauthorized access to any other data

### Why This Is Secure:

- **Customer Privacy**: Orders are write-only for customers, they cannot read other customers' data
- **Admin Access**: Only authenticated admin users can view and manage orders
- **Data Validation**: Required fields are enforced at the database level
- **Principle of Least Privilege**: Only the minimum necessary permissions are granted

## Testing Your Setup

1. **Test Customer Order Flow:**
   - Go to your orders page
   - Fill out the form
   - Submit an order
   - Check Firebase Console → Firestore Database to see the new order

2. **Test Admin Dashboard:**
   - Go to `/admin`
   - Log in with your password
   - Verify you can see and manage orders
   - Test status updates
   - Test order deletion
   - Test image downloads

## Monitoring & Security

### Enable App Check (Recommended for Production)

1. Go to **Build → App Check**
2. Click "Get started"
3. Register your app
4. Enable reCAPTCHA v3 for web
5. This prevents abuse and unauthorized API access

### Monitor Usage

1. Go to **Usage and billing → Usage**
2. Monitor reads, writes, and deletes
3. Set up budget alerts if needed

### Backup Strategy

1. Go to **Firestore Database → Backups**
2. Enable automatic backups (paid feature but recommended)
3. Or manually export data regularly

## Important Notes

⚠️ **Never commit `.env.local` to Git** - It contains sensitive credentials

⚠️ **Keep your admin password secure** - Change it from the default

⚠️ **Monitor your Firebase usage** - Set up billing alerts to avoid unexpected charges

⚠️ **Test thoroughly** - Make sure customers can place orders but not view other orders

✅ **All data stays in Firebase** - No external email services needed

✅ **WhatsApp/Telegram flow preserved** - Orders still open in messaging apps
