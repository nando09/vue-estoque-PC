<template>
  <b-nav tabs>
    <b-nav-item to="/funcionarios">
      Produtos
    </b-nav-item>
    <b-nav-item to="/funcionarios/saida">
      Saída
    </b-nav-item>
    <b-nav-item to="/funcionarios/entrada">
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
