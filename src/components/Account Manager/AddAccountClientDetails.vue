<template>
   <div class="c-grid ">
      <!-- left side  -->
      <div class="border-color-valencia rounded-3 shadow-sm">
            <div class="bor-style-solid m-auto size-container-clientdetails-tables">
               <div class="bor-style-solid ">
                  <div class="col d-flex flex-row px-20px">
                     <div class=" size-box-20"></div>
                  </div>
               </div>
               <div class="d-flex justify-content-between align-items-center">
                  <p class="ps-20px font-tablename">Client Information</p>
                  <button class="button-default bg-none border-color-indigo color-indigo me-20px">Edit</button>
               </div>
               <div class="bor-style-solid col d-flex flex-row px-20px">
                  <div class=" size-box-20">
                  </div>
               </div>
               <div class="bor-style-solid d-flex flex-row px-20px">
                  <div class=" size-box-20"></div>
               </div>
               <div class="table-responsive rounded-1 table-borderless scroll size-table-heigth">
                   <table class="table table-striped-custom table-hover table-responsive font-table-text table-borderless "  >
              <thead class="table-header">
                 <tr > 
                   <th class="text-start px-20px  pb-10px padding-top-none">
                      <div class="d-flex align-items-center">
                         <span class="font-table-column me-10px">Column</span>
                         <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                      </div>
                   </th>
                   <th class="text-start px-20px  pb-10px padding-top-none">
                      <div class="d-flex align-items-center">
                         <span class="font-table-column me-10px">Column</span>
                         <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                      </div>
                   </th>
                 </tr>
              </thead>
              <tbody class="border rounded-1 " >
                 <!-- row1  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start px-20px vertical-alignment-center">Text</td>
                    <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
                 <!-- row2  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
                 <!-- row3  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
                 <!-- row4  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
                 <!-- row5  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
                 <!-- row6  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
                 <!-- row7  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
                 <!-- row8  -->
                  <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
                 <!-- row9  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
                 <!-- row10  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
                 <tr class="size-table-tabledata column border-rouded-5px">
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                     <td class="text-start px-20px vertical-alignment-center">Text</td>
                 </tr>
              </tbody>
           </table>
                </div>
            </div>
      </div>
      <!-- left side  -->
      <!-- right side  -->
      <div class="border-color-indigo d-flex justify-content-center justify-content-lg-start">
         <!-- action container -->
         <div class=" border-color-eucalyptus">
            <div class="size-container-action padding-x py-20px rounded-3 border-color-ghostwhite bg-ghostwhite">
            <div>
               <div class="border-bottom-client pb-20px border-color-frenchskyblue">
                  <div class=" ">
                     <span class="fontfamily-gotham-heading-2 blue ps-10px ms-10px">Actions</span>
                  </div>
                  <div class="col button-container me-10px">
                     <button class="button-default bg-valencia color-white border-color-valencia"><i class="isax isax-minus align-middle icon-size-weight"></i>Reset Password</button>
                     <button class="button-default bg-purpleheart color-white border-color-purpleheart"><i class="isax isax-trash align-middle icon-size-weight me-5px"></i> Delete</button>
                  </div>
               </div>
            </div>
            <div class="mx-20px">
               <span class="font-style-roboto-p2 blue mt-20px">Admin Notes</span>
            <div class="d-flex">
               <textarea style="resize:none" class="border-color-none bg-white"></textarea>
            </div>
            <div class="d-flex justify-content-end mt-20px">
               <button class="button-default bg-none color-purpleheart border-color-purpleheart">Edit</button>
            </div>
            </div>
         </div>
         </div>
         <!-- action container -->
      </div>
      <!-- right side  -->
   </div>
</template>