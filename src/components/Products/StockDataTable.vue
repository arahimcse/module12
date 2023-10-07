<script setup>
/**
 * Source URL
 * https://github.com/HC200ok/vue3-easy-data-table
 */
import { ref, onBeforeMount } from "vue";
import axios from 'axios';
const searchField = ["title", "price", "stock"];
const searchValue = ref();
const loading = ref(true)
async function getProducts() {

  try {
    const response = await axios.get('https://dummyjson.com/products?limit=100')
    if (response.status == 200) {
      Item.value = response.data.products
      loading.value = false
    } else {
      Item.value = 'nothing'
    }
  } catch (error) {
    alert(error)
  }
}
onBeforeMount(() => {
  getProducts()
})
const Header = [
  { text: "#", value: "id" },
  { text: "Title", value: "title" },
  { text: "Unit Price", value: "price", sortable: true },
  { text: "Numbers/Stock", value: "stock" },
  { text: "View Details", value: "detail" },
];

const Item = ref([
  {
    id: 0,
    title: '',
    price: "",
    stock: ''
  },
])

</script>

<template>
  <div class="container mx-auto px-4">
    <input placeholder="Search..." class="form-input my-1 px-4 py-[5px] rounded-[10px] border-solid border-gray-400" type="search" v-model="searchValue">
    <EasyDataTable buttons-pagination alternating :headers="Header" :items="Item" :rows-per-page="10"
      :search-field="searchField" :search-value="searchValue" :loading="loading">
      <template #item-detail="{ id }">
        <router-link class=" bg-[#42b883] text-white py-2 px-3 font-bold rounded"
          :to="{ name: 'product', params: { id: id } }">View Details</router-link>
      </template>
    </EasyDataTable>
  </div>
</template>