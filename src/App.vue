<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
      <div class=" d-flex justify-content-center">
            <div class="dropdown outline-none button-tab mb-5">
                  <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Style Guides
                  </button>
                  <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/typography">Typography</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/components">Style Components</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/iconography">Colors and Iconograpy</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/inputbox">Input Boxes</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/modal">Modal</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/table">Tables</a></li>
               </ul>
            </div>
            <div>
            <div class="dropdown outline-none button-tab mb-5">
                  <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Sprint 2
                  </button>
                  <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/accmanager">Account Manager</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/licmanager">License Manager</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/licensekeyissue">License Key Issue</a></li>
               </ul>
            </div>
      </div>
      </div>
      
      <div class="container shadow-none border-color-none">
            <RouterView />
      </div>
      
</template>

