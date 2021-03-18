<template>
  <div class="home">
    <Topo></Topo>
    <Lateral></Lateral>
    <ConfiguracaoUsuario></ConfiguracaoUsuario>
  </div>
</template>

<script>
// @ is an alias to /src
import Lateral from '@/components/Menus/Lateral.vue';
import Topo from '@/components/Menus/Topo.vue';
import ConfiguracaoUsuario from '@/components/Configuracao/Usuario.vue';

export default {
  name: "Usuario",
  components: {
    Lateral,
    Topo,
    ConfiguracaoUsuario
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
