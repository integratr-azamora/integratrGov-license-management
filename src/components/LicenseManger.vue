<template>
    
    <div class="shadow-sm rounded-5 ">
        <span class="heading1 mb-26px">License Manager</span>
    <div class="d-flex align-items-end">
        <button class="button-tab bg-none">Unassigned License Keys</button>
        <button class="button-tab bg-none">Assigned License Keys</button>
        <button class="button-tab bg-none">Software License Management</button>
    </div>
       <div class="p-header-20px pt-0">
          <!-- row1  -->
          <div class="d-flex justify-content-between align-items-center">
            <div class="col"><span class="h2">Unassigned Licenses</span></div>
            <div class="col d-flex justify-content-end">
            <button class="button-pill bg-lavenderweb color-indigo border-color-lavenderweb d-flex flex-row">
                <p>Validate License Key</p>
             </button>
             <button class="button-pill bg-lavenderweb color-indigo border-color-lavenderweb d-flex flex-row">
                <p>Generate License Key</p>
             </button>
            </div>
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
                   <th class="text-start px-20px p-3 font-table-column border-rouded-left-5px">Activation Code<i class="isax isax-arrow-down5 size-icon-table-arrow ms-2"></i></th>
                   <th class="text-start px-20px p-3 font-table-column">Module<i class="isax isax-arrow-down5 size-icon-table-arrow ms-2"></i></th>
                   <th class="text-start px-20px p-3 font-table-column">Version<i class="isax isax-arrow-down5 size-icon-table-arrow ms-2"></i></th>
                   <th class="text-start px-20px p-3 font-table-column">Grace Period<i class="isax isax-arrow-down5 size-icon-table-arrow ms-2"></i></th>
                   <th class="text-start px-20px p-3 font-table-column">Validity<i class="isax isax-arrow-down5 size-icon-table-arrow ms-2"></i></th>
                   <th class="text-start px-20px p-3 font-table-column">License Description <i class="isax isax-arrow-down5 size-icon-table-arrow ms-2"></i></th>
                </tr>
             </thead>
             <tbody class="border rounded-1">
                <!-- row1  -->
                <tr class="size-table-tabledata column border-rouded-5px ">
                   <td class="text-start px-20px p-3">FSPDN-00000-00000-00000-00000</td>
                   <td class="text-start px-20px p-3">Business Permit and License</td>
                   <td class="text-start px-20px p-3">1.2</td>
                   <td class="text-start px-20px p-3">n/a</td>
                   <td class="text-start px-20px p-3">40 years</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >Perpetual</p>
                         <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="isax isax-more "></i>
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Destroy License</a></li>
                           </ul>
                        </div>
                      </span>
                   </td>
                </tr>
                <!-- row2  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px p-3">Business Permit and License</td>
                   <td class="text-start px-20px p-3">1.2</td>
                   <td class="text-start px-20px p-3">7 days</td>
                   <td class="text-start px-20px p-3">1 year</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >SaaS - E</p>
                         <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="isax isax-more "></i>
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Destroy License</a></li>
                           </ul>
                        </div>
                      </span>
                   </td>
                </tr>
                <!-- row3  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">FSIDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px p-3">Real Property Tax</td>
                   <td class="text-start px-20px p-3">1.1</td>
                   <td class="text-start px-20px p-3">7 days</td>
                   <td class="text-start px-20px p-3">2 years</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >SaaS - I</p>
                         <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="isax isax-more "></i>
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Destroy License</a></li>
                           </ul>
                        </div>
                      </span>
                   </td>
                </tr>
                <!-- row4  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">FSBDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px p-3">Real Property Tax</td>
                   <td class="text-start px-20px p-3">1.0</td>
                   <td class="text-start px-20px p-3">30 days</td>
                   <td class="text-start px-20px p-3">5 years</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >Saas - B</p>
                         <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="isax isax-more "></i>
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Destroy License</a></li>
                           </ul>
                        </div>
                      </span>
                   </td>
                </tr>
                <!-- row5  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">GOPDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px p-3">Community Tax</td>
                   <td class="text-start px-20px p-3">1.0</td>
                   <td class="text-start px-20px p-3">30 days</td>
                   <td class="text-start px-20px p-3">40 years</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >Perpetual</p>
                         <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="isax isax-more "></i>
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Destroy License</a></li>
                           </ul>
                        </div>
                      </span>
                   </td>
                </tr>
                <!-- row6  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">SIPDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px p-3">Community Tax</td>
                   <td class="text-start px-20px p-3">1.0</td>
                   <td class="text-start px-20px p-3">30 days</td>
                   <td class="text-start px-20px p-3">40 years</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >Perpetual</p>
                         <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="isax isax-more "></i>
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Destroy License</a></li>
                           </ul>
                        </div>
                      </span>
                   </td>
                </tr>
                <!-- row7  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">BBPDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px p-3">Building and Occupancy Permit</td>
                   <td class="text-start px-20px p-3">1.0</td>
                   <td class="text-start px-20px p-3">30 days</td>
                   <td class="text-start px-20px p-3">40 years</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >Perpetual</p>
                         <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="isax isax-more "></i>
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Destroy License</a></li>
                           </ul>
                        </div>
                      </span>
                   </td>
                </tr>
                <!-- row8  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3">GOPTN-00000-00000-00000-00000</td>
                   <td class="text-start px-20px p-3">Building and Occupancy Permit</td>
                   <td class="text-start px-20px p-3">1.0</td>
                   <td class="text-start px-20px p-3">n/a</td>
                   <td class="text-start px-20px p-3">30 days</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >Trial</p>
                         <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="isax isax-more "></i>
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Destroy License</a></li>
                           </ul>
                        </div>
                      </span>
                   </td>
                </tr>
                <!-- row9  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3 ">GOPBN-00000-00000-00000-00000</td>
                   <td class="text-start px-20px p-3">Base Cloud Platform</td>
                   <td class="text-start px-20px p-3">1.0</td>
                   <td class="text-start px-20px p-3">n/a</td>
                   <td class="text-start px-20px p-3">30 days</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >Beta</p>
                         <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="isax isax-more "></i>
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Destroy License</a></li>
                           </ul>
                        </div>
                      </span>
                   </td>
                </tr>
                <!-- row10  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px p-3 ">FSPDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px p-3">Base Cloud Platform</td>
                   <td class="text-start px-20px p-3">1.0</td>
                   <td class="text-start px-20px p-3">7 days</td>
                   <td class="text-start px-20px p-3">1 year</td>
                   <td class="text-end px-20px p-3">
                      <span class="d-flex align-items-center justify-content-between">
                         <p >Annual</p>
                         <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="isax isax-more "></i>
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px " aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">View</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Assign/Issue</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Validate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Activate</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Remove License</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover " href="#">Destroy License</a></li>
                           </ul>
                        </div>
                      </span>
                   </td>
                </tr>
                <!-- row11 -->
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
                   <button class="button-pagination bg-none color-indigo border-color-indigo px-20 py-10 ">1</button>
                   <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 ">2</button>
                   <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 pt-20px"><i class="isax isax-more"></i></button>
                   <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 ">100</button>
                   <button class="button-pagination bg-none color-indigo border-color-none ">Next</button>
                   <button class="button-pagination bg-none color-indigo border-color-none"><i class="isax isax-arrow-right-34 icon-button-round-24px"></i></button>
                </div>
             </div>
          </div>
          <!-- row3 -->
       </div>
    </div>
 </template>