<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import FacebookIcon from '../icons/IconFacebook.vue'
import TwitterIcon from '../icons/IconTwitter.vue'
import InstagramIcon from '../icons/IconInstagram.vue'
import YoutubeIcon from '../icons/IconYoutube.vue'
// Create reactive data
const product = ref({});
const viewThumbnail = ref({});
const route = useRoute();

// Method
async function getProduct() {
    try {
        const response = await axios.get(`https://dummyjson.com/products/${route.params.id}`);
        if (response.status == 200) {
            product.value = response.data;
            viewThumbnail.value = response.data.thumbnail;
        }
    } catch (error) {
        alert(error)
    }
}
// Lifecycle hook
onBeforeMount(() => {
    getProduct();
});
</script>

<template>
    <article class="w-full flex flex-col justify-center items-center">
        <!-- Thumbnail  -->
        <div class="image-thumbnail w-[70%] mx-[15%] my-10 flex flex-col justify-center items-center">
            <img :src="viewThumbnail" :alt="product.title" />
            <div class="flex flex-col justify-center items-center mt-[25px] text-lg text-[#666]">
                <p>{{ product.title }}</p>
                <p>Price: {{ product.price }} USD</p>
            </div>
        </div>
        <!-- More Images -->
        <div class="image-list w-[50%] flex flex-row justify-center items-center">
            <button class="p-[5px] mx-[5px] border-[1px] border-orange-400 h-[60px]" v-for="image in product.images"
                :key="image" @click="viewThumbnail = image">
                <img class="max-w-[50px] max-h-[50px]" :src="image" :alt="image" />
            </button>
        </div>

        <!-- Product Description -->
        <div class="product-description flex flex-col w-[50%] justify-center items-center py-[25px]">
            <table class="border-collapse border border-slate-400 w-full p-[3px]">
                <thead>
                    <tr>
                        <th colspan="2" class="border border-slate-300">
                            {{ product.title }} - Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-300">Name</td>
                        <td class="border border-slate-300">{{ product.title }}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300">Price</td>
                        <td class="border border-slate-300">{{ product.price }}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300">Discount</td>
                        <td class="border border-slate-300">
                            {{ product.discountPercentage }}
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300">Rating</td>
                        <td class="border border-slate-300">{{ product.rating }}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300">In Stock</td>
                        <td class="border border-slate-300">{{ product.stock }}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300">Brand</td>
                        <td class="border border-slate-300">{{ product.brand }}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300">Brand Category</td>
                        <td class="border border-slate-300">{{ product.category }}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300">Description</td>
                        <td class="border border-slate-300">{{ product.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="social-icon flex flex-col w-[50%] justify-center items-center py-[25px]">
            <p class="flex flex-row justify-center items-center">
                <span class="text-3xl mr-[25px] text-gray-400">Share on </span>
                <a href="#" class="mr-2">
                    <FacebookIcon />
                </a>
                <a href="#" class="mr-2">
                    <TwitterIcon />
                </a>
                <a href="#" class="mr-2">
                    <InstagramIcon />
                </a>
                <a href="#">
                    <YoutubeIcon />
                </a>
            </p>
        </div>
    </article>
</template>

<style scoped>
th {
    padding: 15px 0;
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

td {
    padding: 15px;
    text-align: left;
}</style>
