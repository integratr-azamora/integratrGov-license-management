<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
      <div>
            <fa class="font-size-24px" icon="plus" />
            <fa class="font-size-24px" icon="close" />
            <fa class="font-size-24px" icon="angle-left" />
            <fa class="font-size-24px" icon="angle-right" />
            <fa class="font-size-24px" icon="angle-up" />
            <fa class="font-size-24px" icon="angle-down" />
            <fa class="font-size-24px" icon="ellipsis" />
      </div>
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
            <div class="dropdown outline-none button-tab mb-5 mx-20px">
                  <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Sprint 2
                  </button>
                  <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/accmanager">Account Manager</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/licmanager">License Manager</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/licensekeyissue">License Key Issue</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/addaccount">Add Account</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/addaccount-clientdetails">Add Account - Client-details</a></li>

               </ul>
            </div>
            <div class="dropdown outline-none button-tab mb-5">
                  <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Sprint 3
                  </button>
                  <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/licensekey-assigned">MF - E-Gov>>License Manager>>Assigned License Keys - Develop Static Screen</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/software-license-management">MF - E-Gov>>License Manager>>Software License Management - Develop Static Screen</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/domain-manager">MF - E-Gov>>Domain Manager - Develop Static Screen</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/add-license-develop-static-screen">MF - E-Gov>>License Manager>>Software License Management >> Add License- Develop Static Screen</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/domain-manager-viewRecord">VC - E-Gov>>Domain Manager>>View Record - Develop Static Screen</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/update-license-modal">VC - E-Gov>>License Manager>>Update License Modal - Develop Static Screen</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/transfer-license-modal">VC - E-Gov>>License Manager>>Transfer License Modal - Develop Static Screen</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="/Suspend-License">VC - E-Gov>>License Manager>>Suspend License Manager - Develop Static Screen</a></li>
                  <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">VC - E-Gov>>License Manager>>View License - Develop Static Screen</a></li>
                  
               </ul>
            </div>
      </div>
      </div>
      <div class="shadow-none border-color-none m-20px my-20px">
      
            <RouterView />
      </div>
</template>

