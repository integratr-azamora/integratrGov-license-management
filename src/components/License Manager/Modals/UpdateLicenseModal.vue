<template>
   <div class="d-flex justify-content-center" >
      <div class="licensekey">
         <div class="d-flex justify-content-between my-20px mx-20px">
            <p class="license-header">Update License</p>
            <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
               <fa class="font-size-20px" icon="close" />
            </button>
         </div>
         <div class="border-bottom-license mt-15px"></div>
         <div class="row mt-20">
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
         <div class="d-flex text-center justify-content-end ms-20px me-20px mb-20px mt-20px">
            <button class="button-default bg-none border-color-none color-indigo me-2">Cancel</button>
            <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
         </div>
      </div>
   </div>
</template>