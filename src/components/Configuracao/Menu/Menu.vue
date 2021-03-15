<template>
  <b-nav tabs align="center">
    <b-nav-item to="/configuracao">
      Produtos
    </b-nav-item>
    <b-nav-item to="/configuracao/saida">
      Saída
    </b-nav-item>
    <b-nav-item to="/configuracao/entrada">
      Entrada
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
