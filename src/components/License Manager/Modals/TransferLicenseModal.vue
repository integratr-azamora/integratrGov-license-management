<template>
   <div class="d-flex justify-content-center " >
      <div class="transfer-modal-cont">
         <div class="d-flex justify-content-between my-25px mx-20px">
            <p class="license-header">Transfer License</p>
            <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
               <fa class="font-size-20px" icon="close" />
            </button>
         </div>
         <div class="border-bottom-license mt-15px"></div>
         <div class="row mt-20">
            <div class="col ms-20px mx-20px">
               <div class="row mt-20px">
                  <div class="row d-flex align-items-center">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">Module:</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">Business Permit and License</span>                     
                     </span>
                  </div>
                  <div class="row d-flex align-items-center mt-10px">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">Activation Code:</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">FSPDE-00000-00000-00000-00000</span>
                     </span>
                  </div>
                  <div class="row d-flex align-items-center mt-10px">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">Expiry Date:</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">01/01/2021</span>
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <!-- 1st -->
         <form class="form-floating mx-20px my-20px">
            <input type="text" class="form-control license-form Roboto-input-box-font border-color-none" id="information" value="sebastiancruz@gmail.com" >
            <label for="information" class="Roboto-label-font">Transfer License to this Account (Email)</label>
         </form>
         <div class="d-flex text-center justify-content-end mx-20px my-20px">
            <button class="button-default bg-none border-color-none color-indigo me-2">Cancel</button>
            <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
         </div>
      </div>
   </div>
</template>