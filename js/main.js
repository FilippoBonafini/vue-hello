const { createApp } = Vue

createApp({
  data() {
    return {
        title: 'Modifica Profilo',
        name: ' ',
        lastName: ' ',
        age: ' ',
        sex: ' ',
        avatar: 'default',
    }
  }
}).mount('#app');
