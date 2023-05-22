<template>
    <div class=" ">
       <div class="d-flex justify-content-center">
          <div class=" rounded-3 container">
             <div class=" heading1  ">Domain Manager </div>
             <!-- row1  -->
             <div class=" shadow-sm border-round16px pb-20px">
               <div class="d-flex justify-content-between mt-20px pt-20px mx-20px">
                  <p class="fontfamily-gotham-heading-2">Domains</p>
               </div>
               
                <!-- table Header Row2  -->
                <!-- table Header Row3  -->
                <div class="col d-flex flex-row">
                   <!-- px box  -->
                   <div class=" size-box-20">
                   </div>
                   <!-- px box  -->
                </div>
                <!-- table Header Row3  -->
                <!-- table Header Row4  -->
                <div class=" ">
                   <!-- table Header Row4 Col1 -->
                   <div class="d-flex align-items-center">
                      <div class="input-group shadow-sm border-round-4px align-items-center size-search-table ms-20px">
                         <span class="input-group-text bg-none border-color-none" id="basic-addon1"><i class="isax isax-search-normal-1  table-inputbox-icon-size py-14py"></i></span>
                         <input type="text" class="form-control border-color-none shadow-none" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                      <div class="mx-20px">
                        <button class="button-default bg-indigo color-white border-color-indigo d-flex flex-row">
                            <i class="isax isax-trash icon-size-weight me-1"></i>
                            Delete
                        </button>
                      </div>
                   </div>
                   <!-- table Header Row4 Col1 -->
                </div>
                <!-- table Header Row4  -->
                <!-- table Header Row5  -->
                <div class="d-flex flex-row">
                   <!-- px box  -->
                   <div class=" size-box-20"></div>
                   <!-- px box  -->
                </div>
                <!-- table Body  -->
                <div class="table-responsive rounded-1 scroll-domain-manager  table-borderless size-table-heigth" >
                   <table class="table  table-striped-custom table-hover font-table-text overflow-scroll table-responsive table-borderless" >
              <thead class="table-header">
                 <tr > 
                   <th class="text-start ps-20px pb-10px padding-top-none">
                      <div class="d-flex ">
                         <span class="font-table-column me-10px">
                            <div class="form-check">
                                <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault"></label>
                            </div>
                         </span>
                      </div>
                   </th>
                   <th class="text-start  pb-10px padding-top-none">
                      <div class="d-flex align-items-center">
                         <span class="font-table-column me-10px">Type</span>
                         <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                      </div>
                   </th>
                   <th class="text-start  pb-10px padding-top-none">
                      <div class="d-flex align-items-center">
                         <span class="font-table-column me-10px">Host</span>
                         <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                      </div>
                   </th>
                   <th class="text-start  pb-10px padding-top-none ">
                      <div class="d-flex align-items-center">
                         <span class="font-table-column me-10px">Points to</span>
                         <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                      </div>
                   </th>
                   <th class="text-start  pb-10px padding-top-none pe-20px width-50px">
                      <div class="d-flex align-items-center">
                         <span class="font-table-column me-10px">TTL</span>
                         <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                      </div>
                   </th>
                 </tr>
              </thead>
              <tbody class="border rounded-1">
                 <!-- row1  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px  width-50px">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault" checked >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">www</td>
                    <td class="text-start vertical-alignment-center">www.integratrgov.net</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row2  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">A</td>
                    <td class="text-start vertical-alignment-center">@</td>
                    <td class="text-start vertical-alignment-center">23.236.62.147</td>
                    <td class="text-start vertical-alignment-center pe-20px">600 seconds</td>
                 </tr>
                 <!-- row3  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">email</td>
                    <td class="text-start vertical-alignment-center">email.secureserver.net</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row4  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">ftp</td>
                    <td class="text-start vertical-alignment-center">@</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row5  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">A</td>
                    <td class="text-start vertical-alignment-center">@</td>
                    <td class="text-start vertical-alignment-center">184.168.221.49</td>
                    <td class="text-start vertical-alignment-center pe-20px">600 seconds</td>
                 </tr>
                 <!-- row6  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">_domainconnect</td>
                    <td class="text-start vertical-alignment-center">_domainconnect.gd.domaincontrol.com</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row7  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">www</td>
                    <td class="text-start vertical-alignment-center">@</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row8  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">email</td>
                    <td class="text-start vertical-alignment-center">email.secureserver.net</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row9  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">ftp</td>
                    <td class="text-start vertical-alignment-center">@</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row10  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">_domainconnect</td>
                    <td class="text-start vertical-alignment-center">_domainconnect.gd.domaincontrol.com</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
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