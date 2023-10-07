<script setup>
import BarIcon from './icons/IconBar.vue';
import ProductIcon from './icons/IconProduct.vue';

function openClose()
{
  let sideBar = document.getElementById("sideBar")
  let mainArea = document.getElementById("mainArea")
  if(sideBar.classList.contains('w-[15%]') && mainArea.classList.contains('w-[85%]'))
  {
    sideBar.classList.replace('w-[15%]','w-0')
    mainArea.classList.replace('w-[85%]', 'w-full')
  } else 
  {
    sideBar.classList.replace('w-0', 'w-[15%]')
    mainArea.classList.replace('w-full', 'w-[85%]')
  }
}
</script>

<template>
  <div class="container flex flex-row h-screen">
      <aside id="sideBar" class="w-[15%] bg-[#252526] text-white flex flex-row">
        <ul class="p-[50px]">
          <li><router-link to="/"><span><ProductIcon/></span>Product List</router-link></li>
        </ul>
      </aside>
      <main id="mainArea" class="w-[85%] overflow-y-scroll" >
        <header class=" w-full bg-gray-500 p-3 sticky top-0 z-10">
          <button @click="openClose()">
              <BarIcon/>
          </button>
        </header>
        <slot></slot>
      </main>
  </div>
</template>

<style scoped></style>
