<template>
  <div class="conteudo">
    <Menu></Menu>
    <h1>Saida</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Produtos/Menu/Menu.vue';

export default {
  name: "Saida",
  components: {
    Menu
  },
  props: {
    msg: String
  }
};
</script>
<style type="text/css">
</style>
