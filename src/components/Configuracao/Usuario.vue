<template>
  <div class="conteudo">
    <b-modal hide-footer id="my-modal">Hello From My Modal!</b-modal>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="10">
          <Menu></Menu>
        </b-col>
        <b-col>
          <b-button class='cadastrar' variant="primary" v-b-modal="'my-modal'">Novo</b-button>
        </b-col>
      </b-row>
    </b-container>
    Usuario
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Configuracao/Menu/Menu.vue';

export default {
  name: "Usuario",
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
