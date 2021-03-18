<template>
  <div class="home">
    <Topo></Topo>
    <Lateral></Lateral>
    <ConfiguracaoPerfil></ConfiguracaoPerfil>
  </div>
</template>

<script>
// @ is an alias to /src
import Lateral from '@/components/Menus/Lateral.vue';
import Topo from '@/components/Menus/Topo.vue';
import ConfiguracaoPerfil from '@/components/Configuracao/Perfil.vue';

export default {
  name: "Perfil",
  components: {
    Lateral,
    Topo,
    ConfiguracaoPerfil
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
