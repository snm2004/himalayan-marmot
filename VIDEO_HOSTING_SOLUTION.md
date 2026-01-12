# Video Hosting Solution for Rider Testimonials

## Current Issue
The rider testimonial videos (C5406.MP4, C5407.MP4, C5408.MP4, C5409.MP4) are large files (128-192 MB each) that may exceed Vercel's deployment limits.

## Current Status
- Videos are now enabled in `.vercelignore` for deployment attempt
- Component is configured in `components/TestimonialsSection.tsx` (lines 75-80)
- Error handling has been added to help diagnose playback issues

## If Deployment Fails Due to File Size

### Option 1: YouTube Hosting (Recommended - Free)
1. Upload videos to YouTube as **unlisted** videos
2. Get the embed URLs
3. Update `components/TestimonialsSection.tsx`:

```typescript
const RIDER_VIDEOS = [
  { id: 1, src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1", title: "Conquering High Passes", delay: 0 },
  { id: 2, src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2", title: "The Road to Adventure", delay: 100 },
  { id: 3, src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3", title: "Brotherhood on Bikes", delay: 200 },
  { id: 4, src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4", title: "Land of Endless Views", delay: 300 },
];
```

And update the video element to use iframe:
```typescript
<iframe
  src={videoStr}
  className="w-full h-full"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Option 2: Cloudinary (Free tier available)
1. Sign up at cloudinary.com
2. Upload videos
3. Get the video URLs
4. Update the `src` values in RIDER_VIDEOS array

### Option 3: Bunny CDN (Paid but affordable)
1. Sign up at bunny.net
2. Create a storage zone
3. Upload videos
4. Get CDN URLs
5. Update the `src` values in RIDER_VIDEOS array

### Option 4: Compress Videos
Use FFmpeg to compress the videos while maintaining quality:

```bash
ffmpeg -i C5406.MP4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k C5406_compressed.MP4
```

Repeat for all four videos, then replace the originals.

## Testing After Deployment
1. Deploy to Vercel
2. Check browser console (F12) for any errors
3. Verify videos load and play correctly
4. Test on mobile devices

## Current Video Configuration
- C5406.MP4 → "Conquering High Passes"
- C5407.MP4 → "The Road to Adventure"
- C5408.MP4 → "Brotherhood on Bikes"
- C5409.MP4 → "Land of Endless Views"