<template>
   <div class=" ">
      <div class="d-flex justify-content-center">
         <div class=" rounded-3 container">
            <div class=" heading1  ">Account Manager </div>
            <!-- row1  -->
            <div class=" shadow-sm border-round16px pb-20px">
               <div class="d-flex justify-content-between mt-20px pt-12px mx-20px">
                  <p class="fontfamily-gotham-heading-2">Registered Accounts</p>
                  <button class="button-pill bg-lavenderweb color-indigo border-color-lavenderweb d-flex flex-row align-items-center margin-none">
                     <fa class="font-size-20px me-8px" icon="plus" />
                     Add
                  </button>
               </div>
               <!-- table Header Row2  -->
               <!-- table Header Row3  -->
               <div class="col d-flex flex-row px-20px">
                  <!-- px box  -->
                  <div class=" size-box-20">
                  </div>
                  <!-- px box  -->
               </div>
               <!-- table Header Row3  -->
               <!-- table Header Row4  -->
               <div class="  px-20px">
                  <!-- table Header Row4 Col1 -->
                  <div class="d-flex flex-row">
                     <div class="shadow-sm  border-round-4px min-width-inputbox">
                        <i class="isax isax-search-normal-1  table-inputbox-icon-size ps-16px py-14py"></i>
                        <input class="input-field border-color-none btn-hover p-3 outline-none table-inputbox-size inputbox-font border-round-4px" type="text" placeholder="Search" name="usrnm">
                     </div>
                     <!-- table Header Row4 Col2 -->
                     <div class="mx-20px">
                        <button class="button-default-no-margin bg-ghostwhite color-frenchskyblue border-color-ghostwhite d-flex flex-row margin-none shadow-sm">
                           <i class="isax isax-filter-search icon-size-weight me-2"></i>
                           <p>Filter</p>
                        </button>   
                     </div>
                     <!-- table Header Row4 Col2 -->
                  </div>
                  <!-- table Header Row4 Col1 -->
               </div>
               <!-- table Header Row4  -->
               <!-- table Header Row5  -->
               <div class="d-flex flex-row px-20px">
                  <!-- px box  -->
                  <div class=" size-box-20"></div>
                  <!-- px box  -->
               </div>
               <!-- table Body  -->
               <div class="table-responsive rounded-1   table-borderless" >
                  <table class="table  table-striped table-hover font-table-text overflow-scroll table-responsive table-borderless" >
             <thead >
                <tr > 
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Name</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Org ID</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Email Address</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Organization</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Contact</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">TIN</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                </tr>
             </thead>
             <tbody class="border rounded-1">
                <!-- row1  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">ABC Smart Organization </td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                   <td class="text-end px-20px p-3 vertical-alignment-center  ">
                     <div class="dropdown outline-none border-radius-16px">
                           <button class="btn btn-custom padding-none border-color-none btn-hover" type="button" id="dropdownMenuButto" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px border-radius-16px" style="margin-bottom:100px;" aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row2  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">ABC Smart Organization </td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row3  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Mariveles Bataan</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row4  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none ">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row5  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row6  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row7  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row8  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row9  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center ">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row10  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center ">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3 " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
             </tbody>
          </table>
               </div>
               <!-- table Body  -->
               <div class="d-flex flex-row justify-content-end mx-20px mt-20px font-table-pagination d-flex align-items-center ">
                  <!-- pagination  -->
                  <div class="d-flex  align-items-center">
                     <button class="button-pagination bg-none color-dimgray border-color-none btn-hover"><fa class="font-size-20px  mt-1" icon="angle-left" /></button>
                     <button class="button-pagination bg-none color-dimgray border-color-none btn-hover me-20px">Previous</button>
                     <button class="button-pagination bg-none color-indigo border-color-indigo px-20 py-10 ">1</button>
                     <button class="button-pagination bg-none color-dimgray border-color-none btn-hover px-20 py-10 ">2</button>
                     <button class="button-pagination bg-none color-dimgray border-color-none btn-hover px-20 pb-5px pt-15px "><fa class="fs-16px" icon="ellipsis" /></button>
                     <button class="button-pagination bg-none color-indigo border-color-none btn-hover ms-20px">Next</button>
                     <button class="button-pagination bg-none color-indigo border-color-none btn-hover"><fa class="font-size-20px  mt-1" icon="angle-right" /></button>
                  </div>
                  <!-- pagination  -->
               </div>
            </div>
            <!-- row1  -->        
         </div>
      </div>
   </div>
</template>