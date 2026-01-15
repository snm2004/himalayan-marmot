
import 'dotenv/config';
import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

// Load .env.local explicitly if dotenv doesn't pick it up automatically
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
try {
    const envLocalPath = path.resolve(__dirname, '.env.local');
    if (fs.existsSync(envLocalPath)) {
        const envConfig = fs.readFileSync(envLocalPath, 'utf8');
        envConfig.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim().replace(/^["']|["']$/g, '');
            }
        });
    }
} catch (e) {
    console.log("Could not load .env.local manually, relying on default dotenv behavior");
}

const filePath = 'public/hero-video-new.mov';

if (!fs.existsSync(filePath)) {
    console.error(`Error: File not found at ${filePath}`);
    process.exit(1);
}

const file = fs.createReadStream(filePath);

console.log(`Starting upload for ${filePath}...`);
try {
    const blob = await put('hero/hero-video-new.mov', file, { access: 'public' });
    console.log('✅ Uploaded to:', blob.url);
} catch (error) {
    console.error('Upload failed details:', error.message);
    console.error('Full error:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
}
