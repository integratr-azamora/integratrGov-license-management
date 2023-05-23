<template>
    <div class=" ">
       <div class="d-flex justify-content-center">
          <div class=" rounded-3 container">
             <div class=" heading1 mb-20px mt-20px">License Manager </div>
             <div class="responsive-columns responsive-center">
               <button class="button-tab padding-x-none responsive-tab-content responsive-center-mb-20px"><a class="dropdown-item " href="/licmanager">Unassigned License Keys</a></button>
                <button class="button-tab-active padding-x-none responsive-table-margin-x-20px responsive-tab-content responsive-center-mb-20px"><a class="dropdown-item " href="/licensekey-assigned">Assigned License Keys</a></button>
                <button class="button-tab padding-x-none responsive-tab-content responsive-center-mb-20px"><a class="dropdown-item" href="/software-license-management">Software License Management</a></button>
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
                            <ul class="dropdown-menu pt-17px pb-22px"  aria-labelledby="dropdownMenuButton1">
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">View</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Update</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Suspend</a></li>
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
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Update</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Suspend</a></li>
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
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Update</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Suspend</a></li>
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
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Update</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Suspend</a></li>
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
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Update</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Suspend</a></li>
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
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Update</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Suspend</a></li>
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
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Update</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Suspend</a></li>
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
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Update</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Suspend</a></li>
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
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Update</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Suspend</a></li>
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
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Update</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-dimgray fontfamily-gotham-heading-3 disabled" href="#">Renew(Soon)</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Activate</a></li>
                               <li><a class="dropdown-item p-10px table-dropdown-hover color-darkgray fontfamily-gotham-heading-3" href="#">Suspend</a></li>
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
                     <div class=" responsive-between responsive-margin-end-5px mx-auto">
                     <button class="button-pagination bg-none color-dimgray border-color-none"><fa class="font-size-20px  mt-1" icon="angle-left" /></button>
                     <button class="button-pagination bg-none color-dimgray border-color-none responsive-table-margin responsive-table-margin-end r-display-none">Previous</button>
                     <button class="button-pagination bg-none color-indigo border-color-indigo px-20 py-10 ">1</button>
                     <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 ">2</button>
                     <button class="button-pagination bg-none color-dimgray border-color-none px-20 pb-5px pt-15px "><fa class="fs-16px" icon="ellipsis" /></button>
                     <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 ">100</button>
                     <button class="button-pagination bg-none color-indigo border-color-none responsive-table-margin responsive-table-margin-start r-display-none">Next</button>
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
 </template>