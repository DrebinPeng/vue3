import { defineComponent, ref } from 'vue';

import HelloWorld from './components/HelloWorld.vue';

const img = require('./assets/logo.png');

export default defineComponent({
  setup() {
    const numberRef = ref('1');

    setTimeout(() => {
      numberRef.value += '1';
    }, 1000)



    return () => {
      const number = numberRef.value;
      return (
        <div id="app">
          <img src={img} alt="Vue logo"/>
          <p>{number}</p>
          <HelloWorld msg={'123'} /> 
        </div>
      );
    }
  },
});
