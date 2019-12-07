import { Messenger } from 'components/Messenger';
import { AboutPage } from 'pages/AboutPage';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Messenger,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: Messenger,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
];