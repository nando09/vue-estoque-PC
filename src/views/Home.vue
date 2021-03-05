<template>
  <div class="home">
    <Topo></Topo>
    <Lateral></Lateral>
  </div>
</template>

<script>
// @ is an alias to /src
import Lateral from '@/components/Menus/Lateral.vue';
import Topo from '@/components/Menus/Topo.vue';

export default {
  name: "Home",
  components: {
    Lateral,
    Topo
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
