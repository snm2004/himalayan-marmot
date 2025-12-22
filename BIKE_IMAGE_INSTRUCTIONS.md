# Royal Enfield Himalayan Bike Image Update Instructions

## What was updated:
I've updated the following files to use the new Royal Enfield Himalayan bike image:

### 1. `constants.tsx` (Line 209)
- Changed from: `"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop"`
- Changed to: `"/himalayan-bike-new.jpg"`

### 2. `components/InstagramFeed.tsx` (Multiple locations)
- Updated bike-related images in posts and highlights
- Changed profile picture to use logo instead of bike image

## What you need to do:

### Step 1: Save the bike image
1. Save the Royal Enfield Himalayan bike image you provided as `himalayan-bike-new.jpg`
2. Place it in the `public/` directory of your project
3. The final path should be: `public/himalayan-bike-new.jpg`

### Step 2: Verify the changes
After saving the image, the new bike image will appear in:
- Fleet section (main bike showcase)
- Instagram feed posts
- Instagram highlights

### Alternative approach:
If you prefer to use an online URL instead of a local file:
1. Upload the image to a hosting service (like Imgur, Cloudinary, or your own server)
2. Replace `/himalayan-bike-new.jpg` with the full URL in the files mentioned above

## Files modified:
- ✅ `constants.tsx` - Updated FLEET image
- ✅ `components/InstagramFeed.tsx` - Updated bike-related images

The new Royal Enfield Himalayan image will now be used throughout the website once you save it to the public directory.