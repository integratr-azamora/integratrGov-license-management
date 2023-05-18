<template>
   <div class="container bor-style-solid-perma add-cont2" >
      <span class="roboto-headings fw-bold pt-5">Juan Dela Cruz</span>
      <!-- container  -->
      <div class="row">
         <!-- container-left  -->
         <div class="col padding-x-none rounded-4 shadow-sm">
            <div class="d-flex justify-content-between px-20px">
               <span class="font-style-inter-semibold">Client Information</span>
               <button class="button-default bg-none color-indigo border-color-indigo">Edit</button>
            </div>
            <div class="shadow-sm">
               <div class="scroll client-details-table-height" >
                  <table class="table table-striped table-hover font-table-text" >
                     <thead >
                        <tr >
                           <th class="text-start font-table-column border-rouded-left-5px">Label<i class="isax isax-arrow-down-1 size-icon-table-arrow ms-2"></i></th>
                           <th class="text-start font-table-column">Details<i class="isax isax-arrow-down-1 size-icon-table-arrow ms-2"></i></th>
                        </tr>
                     </thead>
                     <tr class="size-table-tabledata column border-rouded-5px">
                        <td class="text-start table-text-roboto-reg">First Name</td>
                        <td class="text-start table-text-light">Juan</td>
                     </tr>
                     <tr class="size-table-tabledata column border-rouded-5px">
                        <td class="text-start table-text-roboto-reg">Last Name</td>
                        <td class="text-start table-text-light">Dela Cruz</td>
                     </tr>
                     <tr class="size-table-tabledata column border-rouded-5px">
                        <td class="text-start table-text-roboto-reg">Middle Name</td>
                        <td class="text-start table-text-light">Santos</td>
                     </tr>
                     <tr class="size-table-tabledata column border-rouded-5px">
                        <td class="text-start table-text-roboto-reg">Email</td>
                        <td class="text-start table-text-light">juandelacruz@gmail.com</td>
                     </tr>
                     <tr class="size-table-tabledata column border-rouded-5px">
                        <td class="text-start table-text-roboto-reg">Mobile No.</td>
                        <td class="text-start table-text-light">+639091234567</td>
                     </tr>
                     <tr class="size-table-tabledata column border-rouded-5px">
                        <td class="text-start table-text-roboto-reg">TIN</td>
                        <td class="text-start table-text-light">00000000000</td>
                     </tr>
                     <tr class="size-table-tabledata column border-rouded-5px">
                        <td class="text-start table-text-roboto-reg">LGU/Organization</td>
                        <td class="text-start table-text-light">Pasig City</td>
                     </tr>
                     <tr class="size-table-tabledata column border-rouded-5px">
                        <td class="text-start table-text-roboto-reg">Position</td>
                        <td class="text-start table-text-light">Mayor</td>
                     </tr>
                     <tr class="size-table-tabledata column border-rouded-5px">
                        <td class="text-start table-text-roboto-reg">Unit/House/Bldg No.</td>
                        <td class="text-start table-text-light">1</td>
                     </tr>
                     <tr class="size-table-tabledata column border-rouded-5px">
                        <td class="text-start table-text-roboto-reg">Building Name</td>
                        <td class="text-start table-text-light">SM City Light Mall Residence</td>
                     </tr>
                  </table>
               </div>
            </div>
         </div>
         <!-- container-left  -->
         <!-- container-right  -->
         <div class="add-cont4">
            <div class=" border-color-frenchskyblue " style="border-top: none; border-left: none; border-right: none; border-width: 1px;">
               <div class="d-flex flex-row pt-2 align-items-center">
                  <div class="col-auto">
                     <span class="fontfamily-gotham-heading-2 p-4 blue">Actions</span>
                  </div>
                  <div class="col d-flex justify-content-end">
                     <button class="button-default bg-valencia color-white border-color-valencia d-flex align-items-center"><i class="isax isax-minus icon-size-weight me-1"></i>Reset Password</button>
                     <button class="button-default bg-purpleheart color-white border-color-purpleheart d-flex align-items-center"><i class="isax isax-trash icon-size-weight me-1"></i>Delete</button>
                  </div>
               </div>
            </div>
            <span class="font-style-roboto-p2 pt-2 blue">Admin Notes</span>
            <div class="d-flex">
               <textarea style="resize:none" class="border-color-none"></textarea>
            </div>
            <div class="d-flex justify-content-end px-20px">
               <button class="button-default bg-none color-indigo border-color-indigo">Edit</button>
            </div>
         </div>
         <!-- container-right  -->
      </div>
      <!-- container  -->
   </div>
</template>