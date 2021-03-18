<template>
  <div class="conteudo">
    <b-modal hide-footer id="cadastrar-produto" title="Cadastrar Produto">
      <b-button-group>
        <b-button variant="success" @click="salvar()">Gravar</b-button>
        <b-button variant="danger" @click="cancel()">Cancelar</b-button>
      </b-button-group>
    </b-modal>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="10">
          <Menu></Menu>
        </b-col>
        <b-col>
          <b-button class='cadastrar' variant="primary" v-b-modal="'cadastrar-produto'">Novo</b-button>
        </b-col>
      </b-row>


      <b-row class="text-center overflow-auto">
        <b-table
          id="my-table"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
      </b-row>

      <b-row class="text-center overflow-auto">
        <b-col>
          <b-pagination
            v-model="currentPage"
            pills
            :total-rows="rows"
            size="sm"
            :per-page="perPage"
            aria-controls="my-table"
            align="center"
          ></b-pagination>
        </b-col>
      </b-row>


    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Produtos/Menu/Menu.vue';

export default {
  name: "Index",
  components: {
    Menu
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
      ]
    }
  },
  props: {
    msg: String
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods: {
    salvar() {
      this.$root.$emit('bv::show::modal', 'cadastrar-produto', '#btnShow')
    },
    cancel() {
      this.$root.$emit('bv::toggle::modal', 'cadastrar-produto', '#btnToggle')
    }
  }
};
</script>
<style type="text/css">
</style>
