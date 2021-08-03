const app = Vue.createApp({
  data(){
    return {
      title: 'The 48 Laws of Power',
      author: 'Robert Greene',
      age: 53,
      showBooks: true,
      x: 0,
      y: 0
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(event, data) {
      console.log(event, event.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')