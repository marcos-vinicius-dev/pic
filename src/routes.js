import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import Login from './components/login/Login.vue';

export const routes = [
    { path: '/', name : 'login', component: Login, titulo : 'Login', meta: { public: true }, menu : false },
    { path: '/login', name : 'login', component: Login, titulo : 'Login', meta: { public: true }, menu : false },
    { path: '/home', name : 'home', component: Home, titulo : 'Home', icon: 'home', menu : true },
    { path: '/cadastro', name : 'cadastro', component: Cadastro, titulo : 'Cadastro', icon: 'add_box', menu : true },
    { path: '/cadastro/:id', name : 'alterar', component: Cadastro, titulo : 'Alterar', icon: 'create', menu : false },
    { path: '*', component: Login, meta: { public: true }, menu : false }
];