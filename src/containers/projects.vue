<!-- projects -->
<template lang="html">
  <div id="projects">
    <vue-progress-bar></vue-progress-bar>
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          Github repositories
        </div>
        <div class="">
          <table class="table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>URL</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in projects">
                <td>{{item.name}}</td>
                <td><a :href="item.html_url">See more</a></td>
                <td>{{item.description}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    loadProjects() {
      this.$Progress.start();
      this.axios.get('https://api.github.com/users/zickfz/repos').then((response) => {
        this.$Progress.finish();
        this.projects = response.data;
      });
    },
  },
  mounted() {
    this.loadProjects();
  },
};
</script>
