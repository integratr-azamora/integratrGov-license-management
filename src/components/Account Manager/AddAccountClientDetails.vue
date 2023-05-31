<template>
   <div class="container" >
      <span class="client-roboto-fonts mt-20px">Juan Dela Cruz</span>
      <div class="row">
         <!-- container-left  -->
         <div class="col client-container me-20px mt-20px padding-none ">
            <div class="d-flex justify-content-between">
               <span class="font-style-inter-semibold px-20px">Client Information</span>
               <button class="button-default bg-none color-purpleheart border-color-purpleheart m-20px">Edit</button>
            </div>
            <div class="scroll-addacount scroll client-details-table-height">
               <table class="table table-striped-custom table-hover font-table-text table-borderless">
                  <thead class="table-header">
                     <tr >
                        <th class="text-start px-20px">
                           <div class="d-flex align-items-center">
                              <span class="font-table-column">Label</span>
                              <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                           </div>
                        </th>
                        <th class="text-start px-20px">
                           <div class="d-flex align-items-center">
                              <span class="font-table-column">Details</span>
                              <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                           </div>
                        </th>
                     </tr>
                  </thead>
                  <tr class="size-table-tabledata column">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px ">First Name</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Juan</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Last Name</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Dela Cruz</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Middle Name</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Santos</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Email</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">juandelacruz@gmail.com</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Mobile No.</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">+639091234567</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">TIN</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">00000000000</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">LGU/Organization</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Pasig City</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Position</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">Mayor</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg px-20px">Unit/House/Bldg No.</td>
                     <td class="text-start vertical-alignment-center table-text-light px-20px">1</td>
                  </tr>
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
               </table>
            </div>
         </div>
         <!-- container-left  -->
         <!-- container-right  -->
         <div class="action-cont4 justify-content-center bg-ghostwhite shadow-sm mt-20px p-0">
         <!-- action container -->
         <div class="align-middle ">
               <div class="d-flex flex-wrap flex-row justify-content-between align-middle py-4">
                  <span class="fontfamily-gotham-heading-2 blue ms-20px mb-3  mb-sm-0">Actions</span>
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
         <!-- container-right  -->
         </div>
      </div>
   </div>
</template>
