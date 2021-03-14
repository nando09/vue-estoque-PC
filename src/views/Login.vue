<template>
  <b-container class="bv-example-row body-login" fluid>
    <b-row class="justify-content-md-center">
      <b-col cols="12" class="position-absolute">
        <h1 class="title-login"><span>S</span>tockys</h1>
        <b-form-text id="password-help-block">
          Aqui é seu sistema de estoque!
        </b-form-text>
      </b-col>
      <b-col cols="12" md="auto" class="form-login">
        <b-form @submit="onSubmit">
          <label for="text-password">Usuário</label>
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" v-model="usuario" placeholder="Usuário"></b-form-input>
          </b-input-group>
          <label for="text-password">Senha</label>
          <b-form-input type="password" id="text-password" aria-describedby="password-help-block" v-model="senha"></b-form-input>
          <b-row class="buttons">
            <b-col>
              <b-button type="submit" variant="success" block>Entrar</b-button>
            </b-col>
            <b-col>
              <b-button  variant="info" block>Recuperar</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
</b-container></template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      usuario: "fernando@doe.com",
      senha: "12345"
    };
  },
  methods: {
    onSubmit(evt) {
      let vm = this;
      evt.preventDefault();

      let data = {
        email: this.usuario,
        password: this.senha
      };

      axios.post("http://backend.pitutinhos.com.br/api/login",data).then(function(response){
          if (response.data.token) {
            sessionStorage.setItem('usuario', JSON.stringify(response.data.token))
            vm.$router.push('/home');
            vm.toast('Logado com sucesso!', 'success');
          }else{
            vm.toast('Tente novamente!', 'error');
          }
      }).catch(function (error) {
        console.log(error);
        vm.toast('Servidor fora, tente novamente mais tarde!', 'info');
      });
    },

    toast(title, icon) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        // position: 'bottom-end',
        showConfirmButton: false,
        timer: 6000,
        // background: '#c17d01',
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      });

      // Toast.fire({
      //   icon: 'success',
      //   title: 'Sucesso Sucesso Sucesso Sucesso Sucesso !'
      // });

      Toast.fire({
        icon: icon,
        title: title
      });

      // Toast.fire({
      //   icon: 'warning',
      //   title: 'Atenção Atenção Atenção Atenção Atenção Atenção !'
      // });

      // Toast.fire({
      //   icon: 'info',
      //   title: 'Informação!'
      // });

      // Toast.fire({
      //   icon: 'question',
      //   title: 'Questão!'
      // });
    },
  }
};
</script>
<style type="text/css">
  .buttons{
    margin-top: 20px;
  }

  .form-login{
    top: 25vh;
    background: white;
    box-shadow: 0 0 #f1f1f1;
    border: 5px solid #c17d01;
    border-radius: 5px;
    padding: 30px;  
  }

  .body-login{
    height: 100vh;
    background: rgba(255, 193, 7, 0.3);
  }

  .title-login{
    font-weight: bolder;
    color: orange;
    margin-top: 6%;
  }

  .title-login span{
    color: #c17d01;
  }

  .input-group-text{
    background: #ffecb4 !important;
    color: #c17d01;
  }
</style>