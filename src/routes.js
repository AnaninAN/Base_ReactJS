import { ChatPageRedux } from 'containers/ChatPageContainer';
import { AboutPage } from 'pages/AboutPage';

export const routes = [
  {
    path: '/',
    exact: true,
    component: ChatPageRedux,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: ChatPageRedux,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
];