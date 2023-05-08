<template>
    <span class="heading1">Account Manager</span>
    <div class="shadow-sm rounded-5 margin-auto">
       <div class="p-header-20px ">
          <!-- row1  -->
          <div class="d-flex justify-content-between align-items-center">
             <span class="h2">Registered Account</span>
             <button class="button-pill bg-lavenderweb color-indigo border-color-lavenderweb d-flex flex-row">
                <i class="isax isax-add icon-size-weight"></i>
                <p>Add</p>
             </button>
          </div>
          <!-- row1  -->
          <!-- row2 -->
          <div class=" d-flex justify-content-start align-items-center d-inline-flex mb-20px">
             <div class="shadow-sm  ">
                <i class="isax isax-search-normal-1 ps-2 table-inputbox-icon-size"></i>
                <input class="input-field border-color-none p-3 outline-none table-inputbox-size" type="text" placeholder="Search">
             </div>
             <button class="button-default bg-ghostwhite color-frenchskyblue border-color-ghostwhite d-flex flex-row ">
                <i class="isax isax-filter-search icon-size-weight me-2"></i>
                <p>Filter</p>
             </button>
          </div>
       </div>
       <!-- table Header Row6 -->
       <!-- table Header Row7 -->
       <!-- table Header Row7 -->
       <!-- table Header  -->
       <!-- table Body  -->
       <div class="table-responsive shadow-sm " >
          <table class="table  table-striped table-hover font-table-text" >
             <thead >
                <tr > 
                   <th class="text-start px-20px p-3 font-table-column border-rouded-left-5px">Name<i class="isax isax-arrow-down-1 size-icon-table-arrow ms-2"></i></th>
                   <th class="text-start px-20px p-3 font-table-column">Org Id<i class="isax isax-arrow-down-1 size-icon-table-arrow ms-2"></i></th>
                   <th class="text-start px-20px p-3 font-table-column">Email Address<i class="isax isax-arrow-down-1 size-icon-table-arrow ms-2"></i></th>
                   <th class="text-start px-20px p-3 font-table-column">Organization<i class="isax isax-arrow-down-1 size-icon-table-arrow ms-2"></i></th>
                   <th class="text-start px-20px p-3 font-table-column">Contact<i class="isax isax-arrow-down-1 size-icon-table-arrow ms-2"></i></th>
                   <th class="text-start px-20px p-3 font-table-column">Tin<i class="isax isax-arrow-down-1 size-icon-table-arrow ms-2"></i></th>
                </tr>
             </thead>
             <tbody class="border rounded-1">
                <!-- row1  -->
                <tr class="size-table-tabledata column border-rouded-5px ">
                   <td class="text-start px-20px p-3">Juan dela Cruz</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">Pasig City</td>
                   <td class="text-start px-20px p-3">+63 9012345678</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >00000000000</p>
                         <div class="dropdown d-flex ms-20px">
                            <span>
                            <i class="isax isax-more"></i>
                            </span>
                            <div class="dropdown-content dropdown-content-position ">
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">View</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Edit</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Send Invite</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Reset Password</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Delete</p>
                            </div>
                         </div>
                      </span>
                   </td>
                </tr>
                <!-- row2  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">Juan dela Cruz</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">ABC Smart Organization </td>
                   <td class="text-start px-20px p-3">+63 9012345678</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >00000000000</p>
                         <div class="dropdown d-flex ms-20px">
                            <span>
                            <i class="isax isax-more"></i>
                            </span>
                            <div class="dropdown-content dropdown-content-position ">
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">View</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Edit</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Send Invite</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Reset Password</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Delete</p>
                            </div>
                         </div>
                      </span>
                   </td>
                </tr>
                <!-- row3  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">Juan dela Cruz</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">Mariveles Bataan</td>
                   <td class="text-start px-20px p-3">+63 9012345678</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >00000000000</p>
                         <div class="dropdown d-flex ms-20px">
                            <span>
                            <i class="isax isax-more"></i>
                            </span>
                            <div class="dropdown-content dropdown-content-position ">
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">View</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Edit</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Send Invite</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Reset Password</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Delete</p>
                            </div>
                         </div>
                      </span>
                   </td>
                </tr>
                <!-- row4  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">Juan dela Cruz</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">Aztec Gov Agency</td>
                   <td class="text-start px-20px p-3">+63 9012345678</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >00000000000</p>
                         <div class="dropdown d-flex ms-20px">
                            <span>
                            <i class="isax isax-more"></i>
                            </span>
                            <div class="dropdown-content dropdown-content-position ">
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">View</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Edit</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Send Invite</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Reset Password</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Delete</p>
                            </div>
                         </div>
                      </span>
                   </td>
                </tr>
                <!-- row5  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">Juan dela Cruz</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">Aztec Gov Agency</td>
                   <td class="text-start px-20px p-3">+63 9012345678</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >00000000000</p>
                         <div class="dropdown d-flex ms-20px">
                            <span>
                            <i class="isax isax-more"></i>
                            </span>
                            <div class="dropdown-content dropdown-content-position ">
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">View</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Edit</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Send Invite</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Reset Password</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Delete</p>
                            </div>
                         </div>
                      </span>
                   </td>
                </tr>
                <!-- row6  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">Juan dela Cruz</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">Aztec Gov Agency</td>
                   <td class="text-start px-20px p-3">+63 9012345678</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >00000000000</p>
                         <div class="dropdown d-flex ms-20px">
                            <span>
                            <i class="isax isax-more"></i>
                            </span>
                            <div class="dropdown-content dropdown-content-position ">
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">View</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Edit</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Send Invite</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Reset Password</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Delete</p>
                            </div>
                         </div>
                      </span>
                   </td>
                </tr>
                <!-- row7  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">Juan dela Cruz</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">Aztec Gov Agency</td>
                   <td class="text-start px-20px p-3">+63 9012345678</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >00000000000</p>
                         <div class="dropdown d-flex ms-20px">
                            <span>
                            <i class="isax isax-more"></i>
                            </span>
                            <div class="dropdown-content dropdown-content-position ">
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">View</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Edit</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Send Invite</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Reset Password</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Delete</p>
                            </div>
                         </div>
                      </span>
                   </td>
                </tr>
                <!-- row8  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">Juan dela Cruz</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">Aztec Gov Agency</td>
                   <td class="text-start px-20px p-3">+63 9012345678</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >00000000000</p>
                         <div class="dropdown d-flex ms-20px">
                            <span>
                            <i class="isax isax-more"></i>
                            </span>
                            <div class="dropdown-content dropdown-content-position ">
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">View</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Edit</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Send Invite</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Reset Password</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Delete</p>
                            </div>
                         </div>
                      </span>
                   </td>
                </tr>
                <!-- row9  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3 ">Juan dela Cruz</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px p-3">Aztec Gov Agency</td>
                   <td class="text-start px-20px p-3">+63 9012345678</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >00000000000</p>
                         <div class="dropdown d-flex ms-20px">
                            <span>
                            <i class="isax isax-more"></i>
                            </span>
                            <div class="dropdown-content dropdown-content-position ">
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">View</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Edit</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Send Invite</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Reset Password</p>
                               <p class="d-flex justify-content-start dropdown-content-size dropdown-content-font dropdown-content-hover">Delete</p>
                            </div>
                         </div>
                      </span>
                   </td>
                </tr>
                <!-- row10  -->
             </tbody>
          </table>
          <div class="mt-4 mb-4 ">
             <span class=""></span>
             <!-- table Footer Row9 Column -->
             <div class="d-flex flex-row justify-content-end me-20px font-table-pagination d-flex align-items-center">
                <!-- pagination  -->
                <div class="d-flex flex-row">
                   <button class="button-pagination bg-none color-dimgray border-color-none"><i class="isax isax-arrow-left-24 icon-button-round-24px"></i></button>
                   <button class="button-pagination bg-none color-dimgray border-color-none ">Previous</button>
                   <button class="button-pagination bg-none color-indigo border-color-indigo px-20 py-10 mx-10">1</button>
                   <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 mx-10">2</button>
                   <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 mx-10"><i class="isax isax-more"></i></button>
                   <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 mx-10">100</button>
                   <button class="button-pagination bg-none color-indigo border-color-none ">Next</button>
                   <button class="button-pagination bg-none color-indigo border-color-none"><i class="isax isax-arrow-right-34 icon-button-round-24px"></i></button>
                </div>
             </div>
          </div>
          <!-- row3 -->
       </div>
    </div>
 </template>