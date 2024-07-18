import React from 'react';
import ReactDOM from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

createInertiaApp({
    resolve: name => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        ReactDOM.render(<App {...props} />, el);
    },
});

InertiaProgress.init();
