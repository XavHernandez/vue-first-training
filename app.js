const app = Vue.createApp({
  data(){
    return {
      title: 'The 48 Laws of Power',
      author: 'Robert Greene',
      age: 53,
      showBooks: true
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  }
})

app.mount('#app')