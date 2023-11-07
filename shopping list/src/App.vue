<script setup>
import { ref, computed } from 'vue';

const header = ref('Shopping List App');
const editing = ref(false);
const items = ref([
	{ id: 1, label: '10 eggs', purchased: false, highPriority: true },
	{ id: 2, label: '5 breads', purchased: true, highPriority: false },
	{ id: 3, label: '2 butters', purchased: false, highPriority: false },
]);

const linkURL = ref(
	'https://vueschool.io/lessons/getting-started-with-vue-js-and-the-composition-api'
);

const newItem = ref('');
const newItemHighPriority = ref(false);
const reversedItems = computed(() => {
	return [...items.value].reverse();
});

const addToList = () => {
	items.value.push({
		id: items.value.length + 1,
		label: newItem.value,
		highPriority: newItemHighPriority.value,
	});

	newItem.value = '';
	newItemHighPriority.value = '';
};

const doEdit = (e) => {
	editing.value = e;
	newItem.value = '';
};

const togglePurchased = (item) => {
	item.purchased = !item.purchased;
};

const deleteItem = (itemId) => {
	items.value = items.value.filter((item) => {
		return item.id !== itemId;
	});
};
</script>

<template>
	<div class="header">
		<h1>{{ header }}</h1>
		<a v-bind:href="linkURL" target="_blank" class="link">Vue School Course</a>
		<button v-if="editing" v-on:click="doEdit(false)" class="btn">Cancel</button>
		<button v-else v-on:click="doEdit(true)" class="btn btn-primary">Add item</button>
	</div>

	<div></div>

	<form v-on:submit.prevent="addToList" v-if="editing" class="add-item-form">
		<input v-model.trim="newItem" type="text" placeholder="Add an item" />
		<label>
			<input v-model="newItemHighPriority" type="checkbox" />
			High Priority
		</label>

		<button class="btn btn-primary">Add</button>
	</form>

	<ul>
		<!-- v-for="{ id, label, purchased, highPriority } in items"  -->

		<li
			v-for="item in reversedItems"
			@click="togglePurchased(item)"
			:key="id"
			:class="{ strikeout: item.purchased, priority: item.highPriority }"
		>
			{{ item.label }}

			<button class="btn-del" @click="deleteItem(item.id)">Del</button>
		</li>

		<!-- <br />
		<hr />
		<br />

		<li
			v-for="{ id, label, purchased, highPriority } in items"
			@click="togglePurchased(id)"
			:key="id"
			:class="[purchased ? 'strikeout' : null, highPriority ? 'priority' : 'normal']"
		>
			{{ label }}
			<button class="btn-del" @click="deleteItem(id)">Del</button>
		</li> -->
	</ul>

	<p v-if="!items.length">Nothing to see here</p>
</template>
