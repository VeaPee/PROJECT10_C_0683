import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function importView(path){
    return () => import(`./components/${path}.vue`);
}

const router = new VueRouter ({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'LayoutTemplate',
            meta: {title: 'Vuefire 2022'},
            component: importView('LayoutTemplate'),
            children: [
                {
                    path: '/merchandise',
                    name: 'MerchandisePage',
                    meta: {title: 'Vuefire 2022'},
                    component: importView('MerchandisePage'),
                },
                {
                    path: '/album',
                    name: 'AlbumPage',
                    meta: {title: 'Vuefire 2022'},
                    component: importView('AlbumPage'),
                },
                {
                    path: '/product',
                    name: 'ProductPage',
                    meta: {title: 'Vuefire 2022'},
                    component: importView('ProductPage'),
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;