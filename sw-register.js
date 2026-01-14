// sw-register.js
export function registerSW() {
    if (!('serviceWorker' in navigator)) return;

    window.addEventListener('load', async () => {
        try {
            const reg = await navigator.serviceWorker.register('/sw.js');

            // If a new SW is found, activate it immediately
            reg.addEventListener('updatefound', () => {
                const newWorker = reg.installing;
                if (!newWorker) return;

                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed') {
                        // If there is an existing SW controlling, then new version is ready
                        if (navigator.serviceWorker.controller) {
                            // Tell SW to skip waiting
                            newWorker.postMessage('SKIP_WAITING');
                        }
                    }
                });
            });

            // When the new SW takes control, reload once so user sees latest immediately
            let refreshing = false;
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (refreshing) return;
                refreshing = true;
                window.location.reload();
            });
        } catch (err) {
            console.log('SW registration failed:', err);
        }
    });
}
