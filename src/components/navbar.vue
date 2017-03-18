<template lang="html">
  <nav class="nav has-shadow" >
    <div class="nav-left">
      <router-link class="nav-item is-brand" to="/">
            <i class="fa fa-home icon is-medium"></i>Home
      </router-link>
      <router-link class="nav-item is-tab" to="/dashboard">
        <i class="fa fa-dashboard icon is-medium"></i> Dashboard
      </router-link>
      <router-link class="nav-item is-tab" to="/projects">
        <i class="fa fa-list-alt icon is-medium"></i> Project List
      </router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navbar',
};
</script>
