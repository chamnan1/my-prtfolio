<!-- home page -->
<template lang="html">
  <div id="home">
    <div class="avatar"></div>
      <section class="hero">
          <h1 class="title is-1"><vue-typer text="Hello,"></vue-typer></h1>
           <p class="subtitle is-2">My name is Pom. I'm a Developer living in Bangkok.</p>
      </section>
        <section class="section" >
          <div class="block">
              <a href="https://www.linkedin.com/in/tanisorn/" target="_blank"><i class="fa fa-linkedin-square icon is-large"></i></a>
              <a href="https://github.com/zickfz" target="_blank"><i class="fa fa-github-square icon is-large"></i></a>
              <a href="https://www.facebook.com/tanisorn" target="_blank"><i class="fa fa fa-facebook-square icon is-large"></i></a>
          </div>
        </section>
  </div>
</template>
<script>
export default {
  name: 'home',
};
</script>

<style>

.avatar {
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url('../assets/avatar.jpg');
  border: 1px solid #e5e5e5;
  margin-bottom: 2em;
}


</style>
