<template>
  <div class="home">
    <Topo></Topo>
    <Lateral></Lateral>
    <Index></Index>
  </div>
</template>

<script>
// @ is an alias to /src
import Lateral from '@/components/Menus/Lateral.vue';
import Topo from '@/components/Menus/Topo.vue';
import Index from '@/components/Produtos/Index.vue';

export default {
  name: "Saida",
  components: {
    Lateral,
    Topo,
    Index
  },
  created() {
    let usuarioAux = sessionStorage.getItem('usuario')
    if (usuarioAux) {
      this.usuario = JSON.parse(usuarioAux)
    } else {
      this.$router.push('/login');
    }

    console.log(this.usuario);
  },
};
</script>
