<template>
   <div class="client-cont1" >
      <span class="client-roboto-fonts mt-20px">Juan Dela Cruz</span>
      <div class="row">
         <!-- container-left  -->
         <div class="col client-container mt-20px mx-10">
            <div class="d-flex justify-content-between">
               <span class="font-style-inter-semibold">Client Information</span>
               <button class="button-default bg-none color-purpleheart border-color-purpleheart m-20px">Edit</button>
            </div>
            <div class="scroll client-details-table-height" >
               <table class="table table-striped-custom table-hover font-table-text table-borderless">
                  <thead class="table-header">
                     <tr >
                        <th class="text-start">
                           <div class="d-flex align-items-center">
                              <span class="font-table-column">Label</span>
                              <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                           </div>
                        </th>
                        <th class="text-start">
                           <div class="d-flex align-items-center">
                              <span class="font-table-column">Details</span>
                              <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                           </div>
                        </th>
                     </tr>
                  </thead>
                  <tr class="size-table-tabledata column">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg">First Name</td>
                     <td class="text-start vertical-alignment-center table-text-light">Juan</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg">Last Name</td>
                     <td class="text-start vertical-alignment-center table-text-light">Dela Cruz</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg">Middle Name</td>
                     <td class="text-start vertical-alignment-center table-text-light">Santos</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg">Email</td>
                     <td class="text-start vertical-alignment-center table-text-light">juandelacruz@gmail.com</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg">Mobile No.</td>
                     <td class="text-start vertical-alignment-center table-text-light">+639091234567</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg">TIN</td>
                     <td class="text-start vertical-alignment-center table-text-light">00000000000</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg">LGU/Organization</td>
                     <td class="text-start vertical-alignment-center table-text-light">Pasig City</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg">Position</td>
                     <td class="text-start vertical-alignment-center table-text-light">Mayor</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg">Unit/House/Bldg No.</td>
                     <td class="text-start vertical-alignment-center table-text-light">1</td>
                  </tr>
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start vertical-alignment-center table-text-roboto-reg">Building Name</td>
                     <td class="text-start vertical-alignment-center table-text-light">SM City Light Mall Residence</td>
                  </tr>
               </table>
            </div>
         </div>
         <!-- container-left  -->
         <!-- container-right  -->
         <div class="action-cont4 mt-20px mx-20px">
            <div class="border-bottom-license mt-20px">
               <div class="d-flex flex-row align-items-center">
                  <div class="col-auto">
                     <span class="fontfamily-gotham-heading-2 blue">Actions</span>
                  </div>
                  <div class="col button-container d-flex justify-content-end me-10px">
                     <button class="button-default bg-valencia color-white border-color-valencia d-flex align-items-center"><i class="isax isax-minus icon-size-weight"></i>Reset Password</button>
                     <button class="button-default bg-purpleheart color-white border-color-purpleheart d-flex align-items-center"><i class="isax isax-trash icon-size-weight"></i>Delete</button>
                  </div>
               </div>
            </div>
            <span class="font-style-roboto-p2 blue mt-20px">Admin Notes</span>
            <div class="d-flex">
               <textarea style="resize:none" class="border-color-none"></textarea>
            </div>
            <div class="d-flex justify-content-end">
               <button class="button-default bg-none color-purpleheart border-color-purpleheart mt-20px me-10px">Edit</button>
            </div>
         </div>
         <!-- container-right  -->
      </div>
   </div>
</template>