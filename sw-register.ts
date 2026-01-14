// sw-register.ts
export function registerSW() {
    if (!('serviceWorker' in navigator)) return;

    window.addEventListener('load', async () => {
        try {
            const reg = await navigator.serviceWorker.register('/sw.js', { scope: '/' });

            // ✅ if new SW comes, auto reload once
            reg.addEventListener('updatefound', () => {
                const newWorker = reg.installing;
                if (!newWorker) return;

                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        // new version ready -> refresh once
                        window.location.reload();
                    }
                });
            });

        } catch (err) {
            console.warn('SW registration failed:', err);
        }
    });
}
