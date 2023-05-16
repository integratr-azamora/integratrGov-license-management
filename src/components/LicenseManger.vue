<template>
   <div class=" ">
      <div class="d-flex justify-content-center">
         <div class=" rounded-3 container">
            <div class=" heading1  ">License Manager </div>
            <div>
               <button class="button-tab m-3">Unassigned License Keys</button>
               <button class="button-tab m-3">Assigned License Keys</button>
               <button class="button-tab m-3">Software License Management</button>
            </div>
            <!-- row1  -->
            <div class=" shadow-sm border-round16px pb-20px">
               <div class="d-flex justify-content-between mt-20px pt-12px mx-20px">
                  <p class="fontfamily-gotham-heading-2">Unassigned Licenses</p>
                  <div class="d-flex justify-content-end">
                  <button class="button-pill bg-lavenderweb color-indigo border-color-lavenderweb d-flex flex-row align-items-center margin-none ">
                     Validate License Key
                  </button>
                  <span class="p-5px"></span>
                  <button class="button-pill bg-lavenderweb color-indigo border-color-lavenderweb d-flex flex-row align-items-center margin-none">
                     Generate License Key
                  </button>

                  </div>
                  
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
                        <span class="font-table-column me-10px">Activation Code</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Modules</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Version</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Grace Period</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Validity</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">License Description</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                </tr>
             </thead>
             <tbody class="border rounded-1">
                <!-- row1  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">FSPDN-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">Business Permit and License</td>
                   <td class="text-start px-20px vertical-alignment-center">1.2</td>
                   <td class="text-start px-20px vertical-alignment-center">n/a </td>
                   <td class="text-start px-20px vertical-alignment-center">40 years</td>
                   <td class="text-start px-20px vertical-alignment-center">Perpetual</td>
                   <td class="text-end px-20px p-3 vertical-alignment-center  ">
                     <div class="dropdown outline-none border-radius-16px">
                           <button class="btn btn-custom padding-none border-color-none btn-hover" type="button" id="dropdownMenuButto" data-bs-toggle="dropdown" aria-expanded="false" data-reference="parent">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px border-radius-16px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Destroy License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row2  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">Business Permit and License</td>
                   <td class="text-start px-20px vertical-alignment-center">1.2</td>
                   <td class="text-start px-20px vertical-alignment-center">7 days</td>
                   <td class="text-start px-20px vertical-alignment-center">1 year</td>
                   <td class="text-start px-20px vertical-alignment-center">SaaS - E</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px  border-radius-16px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Destroy License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row3  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">FSIDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">Real Property Tax</td>
                   <td class="text-start px-20px vertical-alignment-center">1.1</td>
                   <td class="text-start px-20px vertical-alignment-center">7 days</td>
                   <td class="text-start px-20px vertical-alignment-center">2 years</td>
                   <td class="text-start px-20px vertical-alignment-center">SaaS - I</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px  border-radius-16px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Destroy License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row4  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">FSBDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">Real Property Tax</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">30 days</td>
                   <td class="text-start px-20px vertical-alignment-center">5 years</td>
                   <td class="text-start px-20px vertical-alignment-center">Saas - B</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none ">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px  border-radius-16px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Destroy License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row5  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">GOPDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">Community Tax</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">30 days</td>
                   <td class="text-start px-20px vertical-alignment-center">40 years</td>
                   <td class="text-start px-20px vertical-alignment-center">Perpetual</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px  border-radius-16px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Destroy License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row6  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">SIPDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">Community Tax</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">30 days</td>
                   <td class="text-start px-20px vertical-alignment-center">40 years</td>
                   <td class="text-start px-20px vertical-alignment-center">Perpetual</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px  border-radius-16px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Destroy License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row7  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">BBPDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">Building and Occupancy Permit</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">30 days</td>
                   <td class="text-start px-20px vertical-alignment-center">40 years</td>
                   <td class="text-start px-20px vertical-alignment-center">Perpetual</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px  border-radius-16px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Destroy License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row8  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">GOPTN-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">Building and Occupancy Permit</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">n/a</td>
                   <td class="text-start px-20px vertical-alignment-center">30 days</td>
                   <td class="text-start px-20px vertical-alignment-center">Trial</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px  border-radius-16px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Destroy License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row9  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center ">GOPBN-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">Base Cloud Platform</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">n/a</td>
                   <td class="text-start px-20px vertical-alignment-center">30 days</td>
                   <td class="text-start px-20px vertical-alignment-center">Beta</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px  border-radius-16px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Destroy License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row10  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center ">FSPDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">Base Cloud Platform</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">7 days</td>
                   <td class="text-start px-20px vertical-alignment-center">1 year</td>
                   <td class="text-start px-20px vertical-alignment-center">Annual</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px  border-radius-16px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Destroy License</a></li>
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