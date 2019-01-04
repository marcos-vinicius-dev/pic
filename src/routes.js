import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import DadosCad from './components/dados-cadastro/DadosCad.vue';


export const routes = [
    { path: '', component: Home, titulo : 'Home', icon: 'contacts' }, //em b#/ranco equivale a localhost:8080/#/
    { path: '/cadastro', component: Cadastro, titulo : 'Cadastro', icon: 'contacts' },
    { path: '/dados-cadastro', component: DadosCad, titulo : 'Dados de Cadastro', icon: 'contacts' }
];