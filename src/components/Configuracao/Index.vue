<template>
  <div class="conteudo">
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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Index",
  props: {
    msg: String
  }
};
</script>
<style type="text/css">
</style>
