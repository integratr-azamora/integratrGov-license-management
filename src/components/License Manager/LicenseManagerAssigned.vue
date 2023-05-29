<template>
   <div>
      <div class="d-flex justify-content-center">
         <div class=" rounded-3 container">
            <div class=" heading1 mb-20px mt-20px">License Manager </div>
            <div>
              <button class="button-tab padding-x-none  responsive-center-mb-20px"><a class="dropdown-item " href="/licmanager">Unassigned License Keys</a></button>
               <button class="button-tab-active padding-x-none responsive-table-margin-x-20px  responsive-center-mb-20px"><a class="dropdown-item " href="/licensekey-assigned">Assigned License Keys</a></button>
               <button class="button-tab padding-x-none  responsive-center-mb-20px"><a class="dropdown-item" href="/software-license-management">Software License Management</a></button>
           </div>
            <!-- row1  -->
            <div class=" shadow-sm border-round16px pb-20px mt-10px">
               <div class="d-flex justify-content-start  mx-20px flex-container">
                  <p class="fontfamily-gotham-heading-2 mt-20px">Licenses</p>
               </div>
               <div class="  px-20px">
                  <!-- table Header Row4 Col1 -->
                  <div class="d-flex align-items-center mt-20px">
                     <div class="input-group shadow-sm border-round-4px align-items-center size-search-table">
                        <span class="input-group-text bg-none border-color-none" id="basic-addon1"><i class="isax isax-search-normal-1  table-inputbox-icon-size py-14py"></i></span>
                        <input type="text" class="form-control border-color-none shadow-none" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                     </div>
                     <div class="mx-20px">
                        <button class="button-default-no-margin bg-ghostwhite color-frenchskyblue border-color-ghostwhite d-flex flex-row margin-none shadow-sm">
                           <i class="isax isax-filter-search icon-size-weight me-2"></i>
                           <p>Filter</p>
                        </button>   
                     </div>
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
               <div class="table-responsive rounded-1 table-borderless scroll size-table-heigth">
                  <table class="table table-striped-custom table-hover table-responsive font-table-text table-borderless "  >
             <thead class="table-header">
                <tr > 
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Client</span>
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
                        <span class="font-table-column me-10px">Product No.</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Platform</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Program/Part No.</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">License Key</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Release Date</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">Status</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th class="text-start px-20px  pb-10px padding-top-none">
                     <div class="d-flex align-items-center">
                        <span class="font-table-column me-10px">License Description</span>
                        <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                     </div>
                  </th>
                  <th></th>
                </tr>
             </thead>
             <tbody class="border rounded-1 " >
                <!-- row1  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">GOV112223300</td>
                   <td class="text-start px-20px vertical-alignment-center">Business Permit and License</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">A01</td>
                   <td class="text-start px-20px vertical-alignment-center">SaaS</td>
                   <td class="text-start px-20px vertical-alignment-center">A1AA1AA</td>
                   <td class="text-start px-20px vertical-alignment-center">FSPDN-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">01/01/2021</td>
                   <td class="text-start px-20px vertical-alignment-center">
                       <div class="badge-default-license bg-valencia color-white border-color-valencia margin-none ">Expired </div>
                   </td>
                   <td class="text-start px-20px vertical-alignment-center">Perpetual</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px scroll-none"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><button @click="openModalupdate = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Update</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><button @click="openModalSuspend = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Suspend</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row2  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">GOV112223300</td>
                   <td class="text-start px-20px vertical-alignment-center">Business Permit and License</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">A01</td>
                   <td class="text-start px-20px vertical-alignment-center">On-prem</td>
                   <td class="text-start px-20px vertical-alignment-center">A1AA1AA</td>
                   <td class="text-start px-20px vertical-alignment-center">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">01/01/2022</td>
                   <td class="text-start px-20px vertical-alignment-center">
                       <div class="badge-default-license bg-indigo color-white border-color-indigo margin-none ">Inactive </div>
                   </td>
                   <td class="text-start px-20px vertical-alignment-center">SaaS - E</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><button @click="openModalupdate = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Update</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><button @click="openModalSuspend = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Suspend</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row3  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">GOV112223300</td>
                   <td class="text-start px-20px vertical-alignment-center">Real Property Tax</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">A01</td>
                   <td class="text-start px-20px vertical-alignment-center">Public Cloud</td>
                   <td class="text-start px-20px vertical-alignment-center">A1AA1AA</td>
                   <td class="text-start px-20px vertical-alignment-center">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">01/01/2022</td>
                   <td class="text-start px-20px vertical-alignment-center">
                       <div class="badge-default-license bg-dimgray color-white border-color-dimgray margin-none ">Suspended </div>
                   </td>
                   <td class="text-start px-20px vertical-alignment-center">SaaS - I</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><button @click="openModalupdate = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Update</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><button @click="openModalSuspend = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Suspend</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row4  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">GOV112223300</td>
                   <td class="text-start px-20px vertical-alignment-center">Real Property Tax</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">A01</td>
                   <td class="text-start px-20px vertical-alignment-center">Private Cloud</td>
                   <td class="text-start px-20px vertical-alignment-center">A1AA1AA</td>
                   <td class="text-start px-20px vertical-alignment-center">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">01/01/2022</td>
                   <td class="text-start px-20px vertical-alignment-center">
                       <div class="badge-default-license bg-eucalyptus color-white border-color-eucalyptus margin-none ">Active </div>
                   </td>
                   <td class="text-start px-20px vertical-alignment-center">Saas - B</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><button @click="openModalupdate = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Update</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><button @click="openModalSuspend = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Suspend</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row5  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">GOV112223300</td>
                   <td class="text-start px-20px vertical-alignment-center">Community Tax</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">A01</td>
                   <td class="text-start px-20px vertical-alignment-center">SaaS</td>
                   <td class="text-start px-20px vertical-alignment-center">A1AA1AA</td>
                   <td class="text-start px-20px vertical-alignment-center">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">01/01/2022</td>
                   <td class="text-start px-20px vertical-alignment-center">
                       <div class="badge-default-license bg-eucalyptus color-white border-color-eucalyptus margin-none ">Active </div>
                   </td>
                   <td class="text-start px-20px vertical-alignment-center">Perpetual</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><button @click="openModalupdate = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Update</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><button @click="openModalSuspend = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Suspend</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row6  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">GOV112223300</td>
                   <td class="text-start px-20px vertical-alignment-center">Community Tax</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">A01</td>
                   <td class="text-start px-20px vertical-alignment-center">On-prem</td>
                   <td class="text-start px-20px vertical-alignment-center">A1AA1AA</td>
                   <td class="text-start px-20px vertical-alignment-center">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">01/01/2022</td>
                   <td class="text-start px-20px vertical-alignment-center">
                       <div class="badge-default-license bg-eucalyptus color-white border-color-eucalyptus margin-none ">Active </div>
                   </td>
                   <td class="text-start px-20px vertical-alignment-center">Perpetual</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><button @click="openModalupdate = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Update</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><button @click="openModalSuspend = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Suspend</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row7  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">GOV112223300</td>
                   <td class="text-start px-20px vertical-alignment-center">Building and Occupancy Permit</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">A01</td>
                   <td class="text-start px-20px vertical-alignment-center">SaaS</td>
                   <td class="text-start px-20px vertical-alignment-center">A1AA1AA</td>
                   <td class="text-start px-20px vertical-alignment-center">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">01/01/2022</td>
                   <td class="text-start px-20px vertical-alignment-center">
                       <div class="badge-default-license bg-eucalyptus color-white border-color-eucalyptus margin-none ">Active </div>
                   </td>
                   <td class="text-start px-20px vertical-alignment-center">Perpetual</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><button @click="openModalupdate = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Update</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><button @click="openModalSuspend = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Suspend</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row8  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">GOV112223300</td>
                   <td class="text-start px-20px vertical-alignment-center">Building and Occupancy Permit</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">A01</td>
                   <td class="text-start px-20px vertical-alignment-center">On-prem</td>
                   <td class="text-start px-20px vertical-alignment-center">A1AA1AA</td>
                   <td class="text-start px-20px vertical-alignment-center">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">01/01/2022</td>
                   <td class="text-start px-20px vertical-alignment-center">
                       <div class="badge-default-license bg-eucalyptus color-white border-color-eucalyptus margin-none ">Active </div>
                   </td>
                   <td class="text-start px-20px vertical-alignment-center">Trial</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><button @click="openModalupdate = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Update</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><button @click="openModalSuspend = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Suspend</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row9  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">GOV112223300</td>
                   <td class="text-start px-20px vertical-alignment-center">Base Cloud Platform</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">A01</td>
                   <td class="text-start px-20px vertical-alignment-center">SaaS</td>
                   <td class="text-start px-20px vertical-alignment-center">A1AA1AA</td>
                   <td class="text-start px-20px vertical-alignment-center">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">01/01/2022</td>
                   <td class="text-start px-20px vertical-alignment-center">
                       <div class="badge-default-license bg-eucalyptus color-white border-color-eucalyptus margin-none ">Active </div>
                   </td>
                   <td class="text-start px-20px vertical-alignment-center">Beta</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><button @click="openModalupdate = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Update</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><button @click="openModalSuspend = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Suspend</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
                           </ul>
                        </div>
                   </td>
                </tr>
                <!-- row10  -->
                <tr class="size-table-tabledata column border-rouded-5px">
                   <td class="text-start px-20px vertical-alignment-center">Juan Dela Cruz</td>
                   <td class="text-start px-20px vertical-alignment-center">GOV112223300</td>
                   <td class="text-start px-20px vertical-alignment-center">Base Cloud Platform</td>
                   <td class="text-start px-20px vertical-alignment-center">1.0</td>
                   <td class="text-start px-20px vertical-alignment-center">A01</td>
                   <td class="text-start px-20px vertical-alignment-center">On-prem</td>
                   <td class="text-start px-20px vertical-alignment-center">A1AA1AA</td>
                   <td class="text-start px-20px vertical-alignment-center">FSEDE-00000-00000-00000-00000</td>
                   <td class="text-start px-20px vertical-alignment-center">01/01/2022</td>
                   <td class="text-start px-20px vertical-alignment-center">
                       <div class="badge-default-license bg-eucalyptus color-white border-color-eucalyptus margin-none ">Active </div>
                   </td>
                   <td class="text-start px-20px vertical-alignment-center">Annual</td>
                    <td class="text-end px-20px p-3 vertical-alignment-center fontfamily-gotham-heading-3 ">
                     <div class="dropdown outline-none">
                           <button class="btn padding-none border-color-none btn-hover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <fa class="font-size-24px" icon="ellipsis" />
                           </button>
                           <ul class="dropdown-menu pt-17px pb-22px"  aria-labelledby="dropdownMenuButton1">
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                              <li><button @click="openModalupdate = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Update</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                              <li><button @click="openModalSuspend = true" class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3">Suspend</button></li>
                              <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Remove License</a></li>
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
                  <div class=" col padding-none">
                    <div class="d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-between responsive-margin-end-5px mx-auto">
                       <button class="button-pagination bg-none color-dimgray border-color-none"><fa class="font-size-20px  mt-1" icon="angle-left" /></button>
                       <button class="button-pagination bg-none color-dimgray border-color-none responsive-table-margin responsive-table-margin-end">Previous</button>
                       <button class="button-pagination bg-none color-indigo border-color-indigo px-20 py-10 ">1</button>
                       <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 ">2</button>
                       <button class="button-pagination bg-none color-indigo border-color-none responsive-table-margin responsive-table-margin-start">Next</button>
                       <button class="button-pagination bg-none color-indigo border-color-none"><fa class="font-size-20px  mt-1" icon="angle-right" /></button>
                    </div>
                 </div>
                  <!-- pagination  -->
               </div>
            </div>
            <!-- row1  -->        
         </div>
      </div>
   </div>
   <!-- assign license  -->
  <UpdateLicenseModal :show="openModalupdate" @close="openModalupdate = false">
     <template #body>

        <div class="d-flex justify-content-between">
           <p class="license-header ms-20px mt-24px">Update License</p>
           <button @click="openModalupdate = false" class="mx-20px mt-24px button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
              <fa class="font-size-20px" icon="close" />
           </button>
        </div>
        <div class="border-bottom-license mt-14px"></div>
        <div class="row">
           <div class="col ms-20px me-20px">
              <div class="row mt-20px">
                 <div class="row d-flex align-items-center">
                    <span class=" d-flex justify-content-start">
                    <span class="view-record-font-heading3 mt-1">Activation Code:</span> 
                    <span class="font-style-roboto-p1 ms-2 mt-1">FSPDE-00000-00000-00000-00000</span>
                    </span>
                 </div>
              </div>
           </div>
        </div>
        <!-- 1st -->
        <div class="form-floating mx-20px">
           <select class="form-select Roboto-input-box-font" id="floatingSelect" aria-label="Floating label select">
              <option selected>Business Permit and License</option>
           </select>
           <label for="floatingSelect" class="Roboto-label-font">Module</label>
        </div>
        <!-- 2nd -->
        <div class="form-floating mx-20px">
           <select class="form-select Roboto-input-box-font" id="floatingSelect" aria-label="Floating label select">
              <option selected>1.0</option>
           </select>
           <label for="floatingSelect" class="Roboto-label-font">Version</label>
        </div>
        <!-- 3rd -->
        <div class="form-floating mx-20px">
           <select class="form-select Roboto-input-box-font" id="floatingSelect" aria-label="Floating label select">
              <option selected>7 days</option>
           </select>
           <label for="floatingSelect" class="Roboto-label-font">Grace Period</label>
        </div>
        <!-- 4th -->
        <form class="form-floating m-20px">
           <input type="text" class="form-control license-form Roboto-input-box-font border-color-none" id="information" value="01/01/2021" >
           <label for="information" class="Roboto-label-font">License Validity</label>
        </form>
        <div class="form-floating border-light">
           <i class="isax isax-calendar-1 gray calendar-update-modals"></i>
        </div>
        <!-- 5th -->
        <div class="form-floating ms-10px me-10px mt-20px">
           <div class="d-flex justify-content-start mt-20px mx-10px flex-container">
              <div class="form-floating width-max ">
                 <textarea class="form-control size-textarea-update-license-modal border-color-none" placeholder="Leave a comment here" id="floatingTextarea2">
Lorem ipsum dolor sit amet 
                 </textarea>
                 <label for="information">Remarks</label>
              </div>
           </div>
        </div>
        <div class="d-flex text-center justify-content-end ms-20px me-20px mb-35px mt-20px">
           <button @click="openModalupdate = false" class="button-default bg-none border-color-none color-indigo me-2">Cancel</button>
           <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
        </div>
     </template>
  </UpdateLicenseModal>
<SuspendLicenseModal :show="openModalSuspend" @close="openModalSuspend = false">
  <template #body>
  <div class="d-flex justify-content-center" >
     <div class="suspend-cont-modal" >
        <div class="modal-header">
           <div class="text-center">
              <div class="">
                 <p class="modal-font-style-roboto">Are you sure you want to suspend this license?</p>
              </div>
           </div>
        </div>
        <div id="info" class="text-center mt-20px">
           <img src="/src/assets/icon/info.svg" class="center info2" alt="info">
        </div>
        <div class="row mt-20">
           <div class="col">
              <div class="row mt-20px">
                 <div class="row d-flex align-items-center">
                    <span class=" d-flex justify-content-start">
                    <span class="view-record-font-heading3 mt-1">Activation Code:</span> 
                    <span class="font-style-roboto-p1 ms-1 mt-1">FSPDE-00000-00000-00000-00000</span>
                    </span>
                 </div>
                 <div class="row d-flex align-items-center mt-10px">
                    <span class=" d-flex justify-content-start">
                    <span class="view-record-font-heading3 mt-1">Status:</span> 
                    <span class="font-style-roboto-p1 ms-1 mt-1">Active</span>
                    </span>
                 </div>
                 <div class="row d-flex align-items-center mt-10px">
                    <span class=" d-flex justify-content-start">
                    <span class="view-record-font-heading3 mt-1">Module</span> 
                    <span class="font-style-roboto-p1 ms-1 mt-1">Business Permit and License</span>
                    </span>
                 </div>
                 <div class="row d-flex align-items-center mt-10px">
                    <span class=" d-flex justify-content-start">
                    <span class="view-record-font-heading3 mt-1">Version:</span> 
                    <span class="font-style-roboto-p1 ms-1 mt-1">1.2</span>
                    </span>
                 </div>
                 <div class="row d-flex align-items-center mt-10px">
                    <span class=" d-flex justify-content-start">
                    <span class="view-record-font-heading3 mt-1">Expiry Date:</span> 
                    <span class="font-style-roboto-p1 ms-1 mt-1">n/a</span>
                    </span>
                 </div>
                 <div class=" mt-10px">
                       <div class="form-floating">
                          <input-box class="form-control size-textarea-suspend-license shadow-sm border-color-none " placeholder="Leave a comment here" id="floatingTextarea2">
Lorem ipsum dolor sit amet  
                          </input-box>
                          <label for="floatingTextarea2">Reason for suspension</label>
                       </div>
                 </div>
              </div>
           </div>
        </div>
        <div class="text-center mt-20px">
           <button @click="openModalSuspend = false" class="button-default bg-white border-color-indigo color-indigo me-5px mt-0 mb-0 ">Cancel</button>      
           <button class="button-default bg-indigo border-color-indigo color-white ms-5px mt-0 mb-0">Submit</button>      
        </div>
     </div>
  </div>
</template>
</SuspendLicenseModal>
  <!-- update license  -->
  
</template>

<script>
import SuspendLicenseModal from '../../components/SuspendLicenseModal.vue'
import UpdateLicenseModal from '../../components/UpdateLicenseModal.vue'

export default {
  components: {
     SuspendLicenseModal,
     UpdateLicenseModal

  },
  data(){
     return {
      openModal: false, 
      openModalupdate: false ,
      openModalSuspend:false
     }
  }
}
</script>