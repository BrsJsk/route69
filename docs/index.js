import {addRoutes, setRoute} from '../index';
import {Home} from './components/Home';
import {About} from './components/About';

const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        component: About
    }
]

addRoutes(routes, 'app');

const homeBtn = document.getElementById('goHome');
homeBtn.addEventListener('click', () => {
    setRoute('')
})

const aboutBtn = document.getElementById('goAbout');
aboutBtn.addEventListener('click', () => {
    setRoute('about')
})