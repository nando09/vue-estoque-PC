<template>
  <b-nav tabs>
    <b-nav-item to="/produtos">
      Produtos
    </b-nav-item>
    <b-nav-item to="/produtos/saida">
      Saída
    </b-nav-item>
    <b-nav-item to="/produtos/entrada">
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
