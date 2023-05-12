<template>
   <div class=" ">
      <div class=" font-table-heading p-2 ">Table </div>
      <div class="d-flex justify-content-center ">
         <div class=" rounded-3 shadow-sm">
            <!-- row1  -->
            <div class="bor-style-solid m-auto ">
               <!-- table Header  -->
               <!-- table Header Row1  -->
               <div class="bor-style-solid ">
                  <!-- table Header Row1 Column --> 
                  <div class="col d-flex flex-row px-20px">
                     <!-- px box  -->
                     <div class=" size-box-20"></div>
                     <!-- px box  -->
                  </div>
                  <!-- table Header Row1 Column -->
               </div>
               <!-- table Header Row1  -->
               <!-- table Header Row2  -->
               <div class="bor-style-solid d-inline-flex">
                  <p class="ps-20px font-tablename">Table Name</p>
               </div>
               <!-- table Header Row2  -->
               <!-- table Header Row3  -->
               <div class="bor-style-solid col d-flex flex-row px-20px">
                  <!-- px box  -->
                  <div class=" size-box-20">
                  </div>
                  <!-- px box  -->
               </div>
               <!-- table Header Row3  -->
               <!-- table Header Row4  -->
               <div class="bor-style-solid d-inline-flex  px-20px">
                  <!-- table Header Row4 Col1 -->
                  <div class="d-flex flex-row">
                     <div class="shadow-sm  border-round-4px">
                        <i class="isax isax-search-normal-1  table-inputbox-icon-size ps-16px py-14py"></i>
                        <input class="input-field border-color-none p-3 outline-none table-inputbox-size inputbox-font border-round-4px" type="text" placeholder="Search" name="usrnm">
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
               <div class="bor-style-solid d-flex flex-row px-20px">
                  <!-- px box  -->
                  <div class=" size-box-20"></div>
                  <!-- px box  -->
               </div>
               <!-- table Body  -->
               <div class="table-responsive rounded-1 shadow-sm  table-borderless" >
                  <table class="table  table-striped table-hover font-table-text overflow-scroll table-responsive" >
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
                        <span class="font-table-column me-10px">Org Id</span>
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
                        <span class="font-table-column me-10px">Tin</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                </tr>
             </thead>
             <tbody class="border rounded-1">
                <!-- row1  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">ABC Smart Organization </td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                   <td class="text-end px-20px p-3 vertical-alignment-center  ">
                     <div class="dropdown outline-none ">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButto" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px fontfamily-gotham-heading-3  " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray" href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray" href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray" href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray" href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row2  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">ABC Smart Organization </td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row3  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Mariveles Bataan</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row4  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none ">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row5  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row6  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row7  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row8  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row9  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center ">Juan dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">juandelacruz@gmail.com</td>
                   <td class="text-start px-20px vertical-alignment-center">Aztec Gov Agency</td>
                   <td class="text-start px-20px vertical-alignment-center">+63 9012345678</td>
                   <td class="text-start px-20px vertical-alignment-center">00000000000</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Edit</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Send Invite</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Reset Password</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray " href="#">Delete</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row10  -->
             </tbody>
          </table>
                  <div class="mt-20px mb-20px">
                     <span class=""></span>
                     
               <!-- table Footer Row9 Column -->
               <div class="d-flex flex-row justify-content-end me-20px ms-20px font-table-pagination d-flex align-items-center ">
                  <!-- pagination  -->
                  <div class="d-flex  align-items-center">
                     <button class="button-pagination bg-none color-dimgray border-color-none"><fa class="font-size-20px  mt-1" icon="angle-left" /></button>
                     <button class="button-pagination bg-none color-dimgray border-color-none me-20px">Previous</button>
                     <button class="button-pagination bg-none color-indigo border-color-indigo px-20 py-10 ">1</button>
                     <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 ">2</button>
                     <button class="button-pagination bg-none color-dimgray border-color-none px-20 pb-5px pt-15px "><fa class="fs-16px" icon="ellipsis" /></button>
                     <button class="button-pagination bg-none color-indigo border-color-none ms-20px">Next</button>
                     <button class="button-pagination bg-none color-indigo border-color-none"><fa class="font-size-20px  mt-1" icon="angle-right" /></button>
                  </div>
                  <!-- pagination  -->
               </div>
            </div>
               </div>
               <!-- table Body  -->
            </div>
            <!-- row1  -->        
         </div>
      </div>
   </div>
</template>