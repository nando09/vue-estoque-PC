<template>
  <div class="conteudo">
    <div id="loader" v-if="loader">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    <b-modal ref="cadastrar-usuario" size="lg" hide-footer id="cadastrar-usuario" title="Cadastrar usuario">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Nome:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="name"
                type="text"
                placeholder="Nome do usuário"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-2" label="Usuário:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="username"
                placeholder="Qual será o usuário para login?"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Perfil:"
              label-for="input-1"
            >
              <b-form-select v-model="profile_id" class="mb-3">
                <template #first>
                  <b-form-select-option :value="null" disabled>-- Selecione um perfil --</b-form-select-option>
                </template>
                <b-form-select-option  v-for="perfil in perfis" :key="perfil.id" :value="perfil.id">{{ perfil.name }}</b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="email"
                type="email"
                placeholder="Email do usuário"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Senha:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="password"
                type="password"
                placeholder="Senha"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Confirmar senha:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="password_confirmation"
                type="password"
                placeholder="Confirmar Senha"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
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
    <b-modal ref="editar-usuario" size="lg" hide-footer id="editar-usuario" title="Editar usuario">
      <b-form @submit="onSubmitEdit" @reset="onResetEdit">
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Nome:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="name"
                type="text"
                placeholder="Nome do usuário"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-2" label="Usuário:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="username"
                placeholder="Qual será o usuário para login?"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Perfil:"
              label-for="input-1"
            >
              <b-form-select v-model="profile_id" class="mb-3">
                <template #first>
                  <b-form-select-option :value="null" disabled>-- Selecione um perfil --</b-form-select-option>
                </template>
                <b-form-select-option  v-for="perfil in perfis" :key="perfil.id" :value="perfil.id">{{ perfil.name }}</b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="email"
                type="email"
                placeholder="Email do usuário"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
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
          <b-button class='cadastrar' variant="primary" v-b-modal="'cadastrar-usuario'" ref="btnShow">Novo</b-button>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-table striped hover :items="items" :fields="fields">
        <template #cell(id)="data">
          <b-row class="text-center">
            <b-col>
              <b-icon scale="1.5" class="table-acao" @click="getUsuario(data.value)" icon="pencil-square" variant="primary"></b-icon>
            </b-col>
            <b-col>
              <b-icon scale="1.5" class="table-acao" @click="deletaUsuario(data.value, data.item.name)" icon="x-circle" variant="danger"></b-icon>
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
  name: "Usuario",
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
      username: '',
      email: '',
      profile_id: null,
      password: '',
      password_confirmation: '',
      loader: true,
      fields: [
        { label: 'Nome', key: 'name', sortable: true },
        { label: 'Usuario', key: 'username', sortable: true },
        { label: 'Perfil', key: 'profile_id', sortable: true },
        { label: 'E-mail', key: 'email', sortable: true },
        { label: 'Ação', key: 'id'},
      ],
      items: [],
      perfis: []
    }
  },
  mounted() {
    this.getPerfis();
    this.getUsuarios();
  },
  methods: {
    getUsuarios(){
      let vm = this;
      vm.loader = true;

      let headers = {
        headers: {
          'Authorization': this.token,
          'Content-Type': 'application/json'
        }
      }

      axios.get("http://backend.pitutinhos.com.br/api/user", headers).then(function(response){
        // console.log(response);
        vm.loader = false;
        vm.items = response.data;
      }).catch(function (error) {
        vm.loader = false;
        console.log(error);
        vm.toast('Servidor fora, tente novamente mais tarde!', 'info');
      });
    },

    getUsuario(id){
      let vm = this;
      vm.loader = true;

      let headers = {
        headers: {
          'Authorization': this.token,
          'Content-Type': 'application/json'
        }
      }

      axios.get("http://backend.pitutinhos.com.br/api/user/" + id, headers).then(function(response){
        vm.id         = response.data.id;
        vm.name       = response.data.name;
        vm.username   = response.data.username;
        vm.email      = response.data.email;
        vm.profile_id = response.data.profile_id;

        vm.$root.$emit('bv::toggle::modal', 'editar-usuario', '#btnShow');
        vm.loader = false;
      }).catch(function (error) {
        vm.loader = false;
        console.log(error);
        vm.toast('Servidor fora, tente novamente mais tarde!', 'info');
      });
    },

    getPerfis(){
      let vm = this;
      vm.loader = true;

      let headers = {
        headers: {
          'Authorization': this.token,
          'Content-Type': 'application/json'
        }
      }

      axios.get("http://backend.pitutinhos.com.br/api/profile", headers).then(function(response){
        vm.loader = false;
        vm.perfis = response.data;
      }).catch(function (error) {
        vm.loader = false;
        console.log(error);
        vm.toast('Servidor fora, tente novamente mais tarde!', 'info');
      });
    },

    onSubmit(event) {
      event.preventDefault();
      let vm = this;
      vm.loader = true;

      let data = {
        'name':                   vm.name,
        'username':               vm.username,
        'email':                  vm.email,
        'profile_id':             vm.profile_id,
        'password':               vm.password,
        'password_confirmation':  vm.password_confirmation
      };

      let headers = {
        headers: {
          'Authorization': vm.token,
          'Content-Type': 'application/json'
        }
      }

      axios.post("http://backend.pitutinhos.com.br/api/user",data, headers).then(function(response){
        if (response.data.id) {
          vm.$root.$emit('bv::toggle::modal', 'cadastrar-usuario', '#btnShow');
          vm.toast('Cadastrado com sucesso ('+ response.data.name +')!', 'success');
          vm.limpaCampos();
          vm.getUsuarios();
        }else{
          if (response.data.name) {
            vm.toast(response.data.name[0], "warning");
          }else if(response.data.username){
            vm.toast(response.data.username[0], "warning");
          }else if(response.data.profile_id){
            vm.toast(response.data.profile_id[0], "warning");
          }else if(response.data.email){
            vm.toast(response.data.email[0], "warning");
          }else if(response.data.password){
            vm.toast(response.data.password[0], "warning");
          }
          vm.loader = false;
        }
      }).catch(function (error) {
        console.log(error);
        vm.loader = false;
        vm.toast('Servidor fora, tente novamente mais tarde!', 'info');
      });
    },

    onSubmitEdit(event) {
      event.preventDefault();
      let vm = this;
      vm.loader = true;

      let data = {
        'name':                   vm.name,
        'username':               vm.username,
        'email':                  vm.email,
        'profile_id':             vm.profile_id
      };

      let headers = {
        headers: {
          'Authorization': vm.token,
          'Content-Type': 'application/json'
        }
      }

      axios.put("http://backend.pitutinhos.com.br/api/user/" + vm.id,data, headers).then(function(response){
        if (response.data.id) {
          vm.$root.$emit('bv::toggle::modal', 'editar-usuario', '#btnShow');
          vm.toast('Editado com sucesso ('+ response.data.name +')!', 'success');
          vm.limpaCampos();
          vm.getUsuarios();
        }else{
          if (response.data.name) {
            vm.toast(response.data.name[0], "warning");
          }else if(response.data.username){
            vm.toast(response.data.username[0], "warning");
          }else if(response.data.profile_id){
            vm.toast(response.data.profile_id[0], "warning");
          }else if(response.data.email){
            vm.toast(response.data.email[0], "warning");
          }else if(response.data.password){
            vm.toast(response.data.password[0], "warning");
          }
        }
        vm.loader = false;
      }).catch(function (error) {
        vm.loader = false;
        console.log(error);
        vm.toast('Servidor fora, tente novamente mais tarde!', 'info');
      });
    },

    deletaUsuario(id, name){
      let vm = this;

      const swalWithBootstrapButtons = vm.$swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Realmente vai deletar, ' + name + '?',
        text: 'Atenção quando for deletar!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, pode deletar!',
        cancelButtonText: 'Não, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          vm.loader = true;
          let headers = {
            headers: {
              'Authorization': this.token,
              'Content-Type': 'application/json'
            }
          }

          axios.delete("http://backend.pitutinhos.com.br/api/user/" + id, headers).then(function(response){
            swalWithBootstrapButtons.fire(
              response.data.name + ' deletado!',
              'Com sucesso.',
              'success'
            )

            vm.getUsuarios();
          }).catch(function (error) {
            vm.loader = false;
            console.log(error);
            vm.toast('Servidor fora, tente novamente mais tarde!', 'info');
          });
        }
      });
    },

    limpaCampos() {
      this.id                     = '';
      this.name                   = '';
      this.username               = '';
      this.email                  = '';
      this.profile_id             = null;
      this.password               = '';
      this.password_confirmation  = '';
    },

    onReset(event) {
      event.preventDefault();
      this.$root.$emit('bv::toggle::modal', 'cadastrar-usuario', '#btnShow');

      this.id                     = '';
      this.name                   = '';
      this.username               = '';
      this.email                  = '';
      this.profile_id             = null;
      this.password               = '';
      this.password_confirmation  = '';
    },

    onResetEdit(event) {
      event.preventDefault();
      this.$root.$emit('bv::toggle::modal', 'editar-usuario', '#btnShow');

      this.id                     = '';
      this.name                   = '';
      this.username               = '';
      this.email                  = '';
      this.profile_id             = null;
      this.password               = '';
      this.password_confirmation  = '';
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
