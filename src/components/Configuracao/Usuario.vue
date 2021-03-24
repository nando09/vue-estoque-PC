<template>
  <div class="conteudo">
    <b-modal size="xl" hide-footer id="my-modal" title="Cadastrar usuario">
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
                <b-form-select-option value=1>Option C</b-form-select-option>
                <b-form-select-option value=2>Option D</b-form-select-option>
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
            <b-button class="button-modal" type="submit" variant="primary">Submit</b-button>
          </b-col>
          <b-col>
            <b-button class="button-modal" type="reset" variant="danger">Reset</b-button>
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
      name: '',
      username: '',
      email: '',
      profile_id: null,
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let vm = this;

      let data = {
        'name':                   this.name,
        'username':               this.username,
        'email':                  this.email,
        'profile_id':             this.profile_id,
        'password':               this.password,
        'password_confirmation':  this.password_confirmation
      };

      let headers = {
        headers: {
          'Authorization': this.token,
          'Content-Type': 'application/json'
        }
      }

      axios.post("http://backend.pitutinhos.com.br/api/user",data, headers).then(function(response){
        if (response.data.id) {
          this.$root.$emit('bv::toggle::modal', 'cadastrar-produto', '#btnToggle');
          vm.toast('Servidor fora, tente novamente mais tarde!', 'success');
        }else{
          console.log(response.data);
          if (response.data.name) {
            vm.toast(response.data.name[0], "warning");
          }
        }
      }).catch(function (error) {
        console.log(error);
        vm.toast('Servidor fora, tente novamente mais tarde!', 'info');
      });
    },
    onReset(event) {
      event.preventDefault();

      this.name                   = '';
      this.username               = '';
      this.email                  = '';
      this.profile_id             = null;
      this.password               = '';
      this.password_confirmation  = '';
      this.$root.$emit('bv::toggle::modal', 'cadastrar-produto', '#btnToggle');
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
    },

  }
};
</script>
<style type="text/css">
</style>
