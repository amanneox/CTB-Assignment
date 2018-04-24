var app=new Vue({
  el: '#app',
  data: () => ({
    title: "card",
  }),
  created: function() {
    let vm = this
    fetch('instagram.json').then((response) => {
      return response.json().then((json) => {
        console.log("JSON", json)
        vm.data = json
      })
    })
  }
})
