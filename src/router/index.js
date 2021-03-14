import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import EmptyViewRouter from "@/components/EmptyViewRouter";

import Produtos from "../views/Produtos/Index.vue";
import Funcionarios from "../views/Funcionarios/Index.vue";
import Configuracao from "../views/Configuracao/Index.vue";
// ProdutoEntrada
// ProdutoSaida

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/produtos",
    name: "Produtos",
    component: EmptyViewRouter,
    children: [
        {
          path: "/",
          component: Produtos
        },
        {
          path: "entrada",
          component: Produtos
        },
        {
          path: "saida",
          component: Produtos
        }
    ]
  },
  {
    path: "/funcionarios",
    name: "Funcionarios",
    component: Funcionarios
  },
  {
    path: "/configuracao",
    name: "Configuracao",
    component: Configuracao
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
