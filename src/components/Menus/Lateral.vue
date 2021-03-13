<template>
  <div class="lateral">
    <ul>
      <li>
        <router-link class="grey-text text-lighten-3" to="/"><b-icon font-scale="1.4" icon="house-door"></b-icon></router-link>
      </li>
      <li>
        <router-link class="grey-text text-lighten-3" to="/produtos"><b-icon font-scale="1.4" icon="person-lines-fill"></b-icon></router-link>
      </li>
      <li>
        <router-link class="grey-text text-lighten-3" to="/funcionarios"><b-icon font-scale="1.4" icon="journal-plus"></b-icon></router-link>
      </li>
      <li>
        <router-link class="grey-text text-lighten-3" to="/configuracao"><b-icon font-scale="1.4" icon="pencil-square"></b-icon></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Lateral",
  props: {
    msg: String
  }
};
</script>
<style type="text/css">
  .lateral{
    /*background: #c17d01;*/
    position: fixed;
    float: left;
    z-index: 9998;
    width: 4%;
    max-width: 4%;
    height: 93vh;
    box-shadow: 0px 15px 10px #c17d01;
    webkit-box-shadow: 0px 15px 10px #c17d01;
/*    webkit-box-shadow: 0 2px 2px 0 rgba(4,104,119,0.14), 0 1px 5px 0 rgba(4,104,119,0.12), 0 3px 1px -2px rgba(4,104,119,0.2);
    box-shadow: 0 2px 2px 0 rgba(4,104,119,0.14), 0 1px 5px 0 rgba(4,104,119,0.12), 0 3px 1px -2px rgba(4,104,119,0.2);*/
  }

  ul{
    margin: 0;
    padding: 0;
  }

  li a{
    display: block;
    padding: 20px 10px;
    color: #c17d01;
  }

  li > a:hover > i, li > a:hover{
    background: #c17d0185;
    color: white;
  }

</style>
