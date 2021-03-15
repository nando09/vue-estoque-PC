<template>
  <div class="conteudo">
    <Menu></Menu>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Funcionarios/Menu/Menu.vue';

export default {
  name: "Index",
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
