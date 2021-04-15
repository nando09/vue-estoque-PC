<template>
  <div class="conteudo">
    <div id="loader" v-if="loader">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    <b-modal hide-footer id="my-perfil">Hello From My Modal!</b-modal>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="10">
          <Menu></Menu>
        </b-col>
        <b-col>
          <b-button class='cadastrar' variant="primary" v-b-modal="'my-perfil'">Novo</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-table striped hover :items="items" :fields="fields">
        <template #cell(id)="data">
          <b-row class="text-center">
            <b-col>
              <b-icon scale="1.5" class="table-acao" @click="getProfile(data.value)" icon="pencil-square" variant="primary"></b-icon>
            </b-col>
            <b-col>
              <b-icon scale="1.5" class="table-acao" @click="deleteProfile(data.value, data.item.name)" icon="x-circle" variant="danger"></b-icon>
            </b-col>
          </b-row>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Configuracao/Menu/Menu.vue';
import axios from "axios";

export default {
  name: "Perfil",
  components: {
    Menu
  },
  props: {
    msg: String
  },
  data() {
    return {
      token: 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")),
      id: '',
      name: '',
      loader: true,
      fields: [
        { label: 'Nome', key: 'name', sortable: true },
        { label: 'Ação', key: 'id'},
      ],
      items: []
    }
  },
  mounted() {
    this.getProfiles();
  },
  methods: {
    getProfiles(){
      let vm = this;
      vm.loader = true;

      let headers = {
        headers: {
          'Authorization': this.token,
          'Content-Type': 'application/json'
        }
      }

      axios.get("http://backend.pitutinhos.com.br/api/profile", headers).then(function(response){
        console.log(response.data);
        vm.loader = false;
        vm.items = response.data;
      }).catch(function (error) {
        vm.loader = false;
        console.log(error);
        vm.toast('Servidor fora, tente novamente mais tarde!', 'info');
      });
    },

    getProfile(id){
      console.log(id);
    },

    onSubmit(event) {
      console.log(event);
    },

    onSubmitEdit(event) {
      console.log(event);
    },

    deleteProfile(id, name){
      console.log(id);
      console.log(name);
    },

    limpaCampos() {
      this.id                     = '';
      this.name                   = '';
    },

    onReset(event) {
      event.preventDefault();
      this.$root.$emit('bv::toggle::modal', 'cadastrar-produto', '#btnShow');

      this.id                     = '';
      this.name                   = '';
    },

    onResetEdit(event) {
      event.preventDefault();
      this.$root.$emit('bv::toggle::modal', 'editar-produto', '#btnShow');

      this.id                     = '';
      this.name                   = '';
    },

    toast(title, icon) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      });

      Toast.fire({
        icon: icon,
        title: title
      });
    }
  }
};
</script>
<style type="text/css">
</style>
