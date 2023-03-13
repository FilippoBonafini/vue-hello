const { createApp } = Vue

createApp({
  data() {
    return {
        title: 'Modifica Profilo',
        name: 'Filippo',
        lastName: 'Bonafini',
        age: '23',
        sex: 'maschio',
        avatar: 'default',
    }
  }
}).mount('#app');
