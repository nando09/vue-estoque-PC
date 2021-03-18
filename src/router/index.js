import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import EmptyViewRouter from "@/components/EmptyViewRouter";

// Produtos
import Produtos from "../views/Produtos/Index.vue";
import EntradaProdutos from "../views/Produtos/Entrada.vue";
import SaidaProdutos from "../views/Produtos/Saida.vue";


import Funcionarios from "../views/Funcionarios/Index.vue";


// Produtos
import Configuracao from "../views/Configuracao/Index.vue";
import UsuarioConfiguracao from "../views/Configuracao/Usuario.vue";
import PerfilConfiguracao from "../views/Configuracao/Perfil.vue";

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
          component: EntradaProdutos
        },
        {
          path: "saida",
          component: SaidaProdutos
        }
    ]
  },
  {
    path: "/funcionarios",
    name: "Funcionarios",
    component: EmptyViewRouter,
    children: [
        {
          path: "/",
          component: Funcionarios
        },
        {
          path: "entrada",
          component: Funcionarios
        },
        {
          path: "saida",
          component: Funcionarios
        }
    ]
  },
  {
    path: "/configuracao",
    name: "Configuracao",
    component: EmptyViewRouter,
    children: [
        {
          path: "/",
          component: Configuracao
        },
        {
          path: "usuarios",
          component: UsuarioConfiguracao
        },
        {
          path: "perfil",
          component: PerfilConfiguracao
        }
    ]
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
