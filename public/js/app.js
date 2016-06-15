(function (Vue, Vuex) {
  'use strict';

  const store = new Vuex.Store({
    state: {
      count: 0,
      text: 'Vue 2.0'
    },

    mutations: {
      INCREMENT(state) {
        state.count++;
      }
    }
  })

  const vm = new Vue({
    el: '#app',

    store,

    vuex: {
      getters: {
        text: state => state.text,
        count: state => state.count
      }
    },

    methods: {
      handleClick() {
        store.dispatch('INCREMENT');
      }
    },

    render() {
      const el = this.$createElement;

      return el('div', {}, [
        el('h2', {}, [
          `Hello ${this.text}!`
        ]),
        el('div', {}, [
          el('h3', {}, [this.count]),
          el('button', {
            attrs: {id: 'A'},
            on: {click: this.handleClick}
          }, 'Increment')
        ])
      ]);
    }
  });

  window.App = vm;
})(this.Vue, this.Vuex);
