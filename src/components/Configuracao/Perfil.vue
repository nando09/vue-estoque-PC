<template>
  <div class="conteudo">
    <div id="loader" v-if="loader">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>

    <b-modal ref="cadastrar-permissao" size="lg" hide-footer id="cadastrar-permissao" :title="'Cadastrar permissão ' + permissaoName">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-row class="form-scroll">
          <b-col>
            <b-row v-for="menu in menus" :key="menu.perfil">
                <b-col>
                </b-col>
                <b-col cols="8">

                  <b-button v-b-toggle="menu.perfil" class="m-1">{{menu.perfil}}</b-button>

                  <!-- Element to collapse -->
                  <b-collapse :id="menu.perfil">
                    <b-card>
                      <b-form-checkbox  v-for="rota in menu.menus" :key="rota.id"  v-model="rota.checked" name="check-button" switch>
                        {{rota.name}}
                      </b-form-checkbox>
                    </b-card>
                  </b-collapse>
                </b-col>
                <b-col>
                </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="buttons-submit">
          <b-col>
          </b-col>
          <b-col>
            <b-button class="button-modal" type="submit" variant="primary">Salvar</b-button>
          </b-col>
          <b-col>
            <b-button class="button-modal" type="reset" variant="danger">Cancelar</b-button>
          </b-col>
          <b-col>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>


    <b-modal ref="cadastrar-perfil" size="lg" hide-footer id="cadastrar-perfil" title="Cadastrar perfil">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-row>
          <b-col>
          </b-col>
          <b-col cols="8">
            <b-form-group
              id="input-group-1"
              label="Nome:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="name"
                type="text"
                placeholder="Nome do perfil"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
          </b-col>
        </b-row>
        <b-row class="buttons-submit">
          <b-col>
          </b-col>
          <b-col>
            <b-button class="button-modal" type="submit" variant="primary">Salvar</b-button>
          </b-col>
          <b-col>
            <b-button class="button-modal" type="reset" variant="danger">Cancelar</b-button>
          </b-col>
          <b-col>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>



    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="10">
          <Menu></Menu>
        </b-col>
        <b-col>
          <b-button class='cadastrar' variant="primary" v-b-modal="'cadastrar-perfil'">Novo</b-button>
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
              <b-icon scale="1.5" class="table-acao" @click="getPermissao(data.value, data.item.name)" icon="key-fill" variant="secondary"></b-icon>
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
      permissaoName: '',
      id: '',
      name: '',
      loader: true,
      fields: [
        { label: 'Nome', key: 'name', sortable: true },
        { label: 'Ação', key: 'id'},
      ],
      items: [],
      menus: [
        {perfil: 'Dashboard', menus: 
          [
            {id: 1, name: 'Produtos', checked: false},
            {id: 2, name: 'Fornecedores', checked: false},
            {id: 3, name: 'Funcionários', checked: false},
            {id: 4, name: 'Planos', checked: false},
            {id: 5, name: 'Configurações', checked: false}
          ]
        },
        {perfil: 'Produtos', menus: 
          [
            {id: 6, name: 'Lista', checked: false},
            {id: 7, name: 'Entrada', checked: false},
            {id: 8, name: 'Saida', checked: false}
          ]
        },
        {perfil: 'Clientes', menus:
          [
            {id: 9, name: 'Lista', checked: false},
            {id: 10, name: 'Andamento', checked: false},
            {id: 11, name: 'Metas', checked: false}
          ]
        },
        {perfil: 'Fornecedores', menus:
          [
            {id: 12, name: 'Lista', checked: false},
            {id: 13, name: 'Talvez', checked: false}
          ]
        },
        {perfil: 'Funcionários', menus:
          [
            {id: 14, name: 'Lista', checked: false},
            {id: 15, name: 'Setor', checked: false}
          ]
        },
        {perfil: 'Planos', menus:
          [
            {id: 16, name: 'Lista', checked: false}
          ]
        },
        {perfil: 'Configurações', menus:
          [
            {id: 17, name: 'Usuarios', checked: false},
            {id: 18, name: 'Perfil', checked: false},
            {id: 19, name: 'Graficos', checked: false}
          ]
        }
      ]
    }
  },
  mounted() {
    this.getProfiles();
  },
  methods: {
    getPermissao(id, name){
      console.log(id);
      console.log(name);
      this.permissaoName = name;
      this.$root.$emit('bv::toggle::modal', 'cadastrar-permissao', '#btnShow');
      // cadastrar-permissao
    },

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
      event.preventDefault();
      let data = {
        name:  this.name,
        menus: this.menus
      };

      console.log(data);
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
.form-scroll{
    overflow: auto;
    height: 300px;
}

.collapse .card{
  border: none;
}

.buttons-submit{
  margin-top: 10px;
}
</style>
