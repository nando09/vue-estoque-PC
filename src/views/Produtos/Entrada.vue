<template>
  <div class="home">
    <Topo></Topo>
    <Lateral></Lateral>
    <EntradaProduto></EntradaProduto>
  </div>
</template>

<script>
// @ is an alias to /src
import Lateral from '@/components/Menus/Lateral.vue';
import Topo from '@/components/Menus/Topo.vue';
import EntradaProduto from '@/components/Produtos/Entrada.vue';

export default {
  name: "Entrada",
  components: {
    Lateral,
    Topo,
    EntradaProduto
  },
  created() {
    let usuarioAux = sessionStorage.getItem('usuario')
    if (usuarioAux) {
      this.usuario = JSON.parse(usuarioAux)
    } else {
      this.$router.push('/login');
    }
  },
};
</script>
