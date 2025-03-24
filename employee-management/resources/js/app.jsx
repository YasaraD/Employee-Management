import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,  // Dynamically resolve the page component based on the page name
            import.meta.glob('./Pages/**/*.jsx'),  // Automatically load all .jsx files in Pages
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);  // Render the app with the props
    },
    progress: {
        color: '#4B5563',  // Customize the progress bar color
    },
});
