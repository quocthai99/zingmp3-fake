// Pages
import Home from '../pages/Home';
import ZingChart from '../pages/ZingChart';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/zing-chart', component: ZingChart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };