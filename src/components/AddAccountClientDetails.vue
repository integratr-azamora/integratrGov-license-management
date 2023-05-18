<template>
   <div class="container bor-style-solid-perma client-cont1" >
      <span class="client-roboto-fonts mt-10px p-3">Juan Dela Cruz</span>
      <div class="row">
         <!-- container-left  -->
         <div class="col client-container mt-20px">
            <div class="d-flex justify-content-between">
               <span class="font-style-inter-semibold p-3">Client Information</span>
               <button class="button-default bg-none color-purpleheart border-color-purpleheart">Edit</button>
            </div>
            <div class="scroll client-details-table-height" >
               <table class="table table-striped-custom table-hover font-table-text table-borderless">
                  <thead >
                     <tr >
                        <th class="text-start p-20px">
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
                     <td class="text-start px-20px vertical-alignment-center table-text-roboto-reg">First Name</td>
                     <td class="text-start px-20px vertical-alignment-center table-text-light">Juan</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center table-text-roboto-reg">Last Name</td>
                     <td class="text-start px-20px vertical-alignment-center table-text-light">Dela Cruz</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center table-text-roboto-reg">Middle Name</td>
                     <td class="text-start px-20px vertical-alignment-center table-text-light">Santos</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center table-text-roboto-reg">Email</td>
                     <td class="text-start px-20px vertical-alignment-center table-text-light">juandelacruz@gmail.com</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center table-text-roboto-reg">Mobile No.</td>
                     <td class="text-start px-20px vertical-alignment-center table-text-light">+639091234567</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center table-text-roboto-reg">TIN</td>
                     <td class="text-start px-20px vertical-alignment-center table-text-light">00000000000</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center table-text-roboto-reg">LGU/Organization</td>
                     <td class="text-start px-20px vertical-alignment-center table-text-light">Pasig City</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center table-text-roboto-reg">Position</td>
                     <td class="text-start px-20px vertical-alignment-center table-text-light">Mayor</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center table-text-roboto-reg">Unit/House/Bldg No.</td>
                     <td class="text-start px-20px vertical-alignment-center table-text-light">1</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center table-text-roboto-reg">Building Name</td>
                     <td class="text-start px-20px vertical-alignment-center table-text-light">SM City Light Mall Residence</td>
                  </tr>
               </table>
            </div>
         </div>
         <!-- container-left  -->
         <!-- container-right  -->
         <div class="action-cont4 mt-20px">
            <div class=" border-color-frenchskyblue">
               <div class="d-flex flex-row align-items-center">
                  <div class="col-auto">
                     <span class="fontfamily-gotham-heading-2 blue">Actions</span>
                  </div>
                  <div class="col d-flex justify-content-end">
                     <button class="button-default bg-valencia color-white border-color-valencia d-flex align-items-center"><i class="isax isax-minus icon-size-weight me-1"></i>Reset Password</button>
                     <button class="button-default bg-purpleheart color-white border-color-purpleheart d-flex align-items-center"><i class="isax isax-trash icon-size-weight me-1"></i>Delete</button>
                  </div>
               </div>
            </div>
            <span class="font-style-roboto-p2 blue mt-20px">Admin Notes</span>
            <div class="d-flex">
               <textarea style="resize:none" class="border-color-none"></textarea>
            </div>
            <div class="d-flex justify-content-end">
               <button class="button-default bg-none color-purpleheart border-color-purpleheart mt-30px">Edit</button>
            </div>
         </div>
         <!-- container-right  -->
      </div>
   </div>
</template>