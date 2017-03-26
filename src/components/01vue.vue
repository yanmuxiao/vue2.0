<template>
	<div class="hello">

		<h2 v-bind:title="message">{{ message }}</h2>


		<div v-if="seen">Now you see me!</div>

		<ol>
		    <li v-for="todo1 in todos">
		      {{ todo1.text }}
		    </li>
		</ol>


		<p>{{ rMessage }}</p>
	  	<button v-on:click="reverseMessage">Reverse rMessage</button>


	  	<p>{{ vModel }}</p>
	  	<p>{{ computedvModel1 }}</p>
	  	<input v-model="vModel">

	  	<ol>
	  		<li v-for="item in items">
	  			{{ item.name }} ==> {{ item.price }}
	  		</li>
	  	</ol>

	</div>

</template>


<script>


export default {
  name: 'hello',
  props: ['items'],
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      seen: false,
      todos: [
	      { text: 'Learn JavaScript' },
	      { text: 'Learn Vue' },
	      { text: 'Build something awesome' }
	  ],
	  groceryList: [
	      { text: 'Vegetables' },
	      { text: 'Cheese' },
	      { text: 'Whatever else humans are supposed to eat' }
	  ],
	  rMessage: 'abcdefg',
	  vModel: 'vModel',
	  computedvModel: ''
    }
  },
  computed: {
  	computedvModel1 () {
  		return this.vModel.split('').reverse().join('')
  	}
  },
  methods: {
  	reverseMessage () {
  		this.rMessage = this.rMessage.split('').reverse().join('')
  	}
  },
  watch: {
  	vModel () {
  		console.log(this.vModel)
  	}
  }
}



</script>

<style>


</style>