<template>
  <div class="home">
    <Topo></Topo>
    <Lateral></Lateral>
    <SaidaProduto></SaidaProduto>
  </div>
</template>

<script>
// @ is an alias to /src
import Lateral from '@/components/Menus/Lateral.vue';
import Topo from '@/components/Menus/Topo.vue';
import SaidaProduto from '@/components/Produtos/Saida.vue';

export default {
  name: "Saida",
  components: {
    Lateral,
    Topo,
    SaidaProduto
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
