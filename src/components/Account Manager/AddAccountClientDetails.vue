<template>
   <div class="row padding-none justify-content-between align-items-center">
      <span class="client-roboto-fonts mt-20px ms-20px">Juan Dela Cruz</span>

      <!-- left side  -->
      <div class="client-container mb-20px col-sm-12 col-md-6 rounded-3 shadow-sm">
         <div class="bor-style-solid m-auto size-container-clientdetails-tables">
            <div class="bor-style-solid ">
               <div class="col d-flex flex-row px-20px">
                  <div class=" size-box-20"></div>
               </div>
            </div>
            <div class="d-flex justify-content-between align-items-center ">
               <p class="ps-20px font-tablename">Client Information</p>
               <button class="button-default bg-none border-color-indigo color-indigo me-20px">Edit</button>
            </div>
           
            <div class="bor-style-solid d-flex flex-row">
               <div class=" size-box-20"></div>
            </div>
            <div class="table-responsive rounded-1 table-borderless scroll-addacount border-color-none size-table-height2">
                  <table class="table table-striped-custom table-hover table-responsive font-table-text table-borderless border-color-none"  >
                  <thead class="table-header">
                     <tr > 
                        <th class="text-start padding-top-none">
                           <div class="d-flex align-items-center">
                              <span class="font-table-column ms-13px me-10px">Label</span>
                              <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                           </div>
                        </th>
                        <th class="text-start px-20px  pb-10px padding-top-none">
                           <div class="d-flex align-items-center">
                              <span class="font-table-column me-10px">Details</span>
                              <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                           </div>
                        </th>
                     </tr>
                  </thead>
                  <tbody class="border rounded-1 " >
                     <!-- row1  -->
                     <tr class="size-table-tabledata column">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px ">First Name</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Juan</td>
                  </tr>
                     <!-- row2  -->
                     <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Last Name</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Dela Cruz</td>
                  </tr>
                     <!-- row3  -->
                     <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Middle Name</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Santos</td>
                  </tr>
                     <!-- row4  -->
                     <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Email</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">juandelacruz@gmail.com</td>
                  </tr>
                     <!-- row5  -->
                     <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Mobile No.</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">+639091234567</td>
                  </tr>
                     <!-- row6  -->
                     <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">TIN</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">00000000000</td>
                  </tr>

                     <!-- row7  -->
                     <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">LGU/Organization</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Pasig City</td>
                  </tr>
                     <!-- row8  -->
                     <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Position</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Mayor</td>
                  </tr>
                     <!-- row9  -->
                     <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Unit/House/Bldg No.</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">1</td>
                  </tr>
                     <!-- row10  -->
                     <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Building Name</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">SM City Light Mall Residence</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Street No.</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">2</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Block No.</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">3</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Phase No.</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">5</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Province/State</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">NCR</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Country</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Philippines</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">City/Municipality</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Mandaluyong</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Barangay</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Highway Hills</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Zip Code</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">1111</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Card Name</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Juan Dela Cruz</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Card Number</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">0000-0000-0000-0000</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Expiration</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">01/2022</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">CVC</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">###</td>
                  </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      <!-- left side  -->
      <!-- right side  -->
      <div class="action-cont4 mb-20px padding-none col-sm-12 col-md-6 bg-ghostwhite  shadow-sm">
         <!-- action container -->
         <div class="align-middle">
               <div class="d-flex flex-wrap flex-row justify-content-between align-middle py-4">
                  <span class="fontfamily-gotham-heading-2 blue ms-20px">Actions</span>
                  <div class=" button-container ms-20px align-middle me-20px">
                     <button class="button-default bg-valencia color-white border-color-valencia d-flex align-items-center"><i class="isax isax-minus icon-size-weight"></i>Reset Password</button>
                     <button class="button-default bg-purpleheart color-white border-color-purpleheart d-flex align-items-center "><i class="isax isax-trash icon-size-weight"></i>Delete</button>
                  </div>
               </div>
               <hr class=" border-bottom-client border-color-frenchskyblue m-0"/>
               <div class="">
                  <span class="font-style-roboto-p2 blue mt-20px ms-20px">Admin Notes</span>
                  <div class="d-flex">
                     <textarea style="resize:none" class="border-color-none bg-white ms-20px me-20px"></textarea>
                  </div>
                  <div class="d-flex justify-content-end mt-20px mb-20px me-20px">
                     <button class="button-default bg-none color-purpleheart border-color-purpleheart">Edit</button>
                  </div>
               </div>
         </div>
         <!-- action container -->
      </div>
      <!-- right side  -->
   </div>
</template>