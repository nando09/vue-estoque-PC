<template>
  <b-nav tabs>
    <b-nav-item to="/configuracao">
      Configuração
    </b-nav-item>
    <b-nav-item to="/configuracao/usuarios">
      Usuários
    </b-nav-item>
    <b-nav-item to="/configuracao/perfil">
      Perfil
    </b-nav-item>
    <!-- <b-nav-item disabled>Disabled</b-nav-item> -->
  </b-nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Menu",
  props: {
    msg: String
  }
};
</script>
<style type="text/css">
</style>
