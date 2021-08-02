const app = Vue.createApp({
  data(){
    return {
      title: 'The 48 Laws of Power',
      author: 'Robert Greene',
      age: 53
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    }
  }
})

app.mount('#app')