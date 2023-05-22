<template>
<div class="d-flex justify-content-center" >
   <div class="suspende-cont-modal" >
      <div class="modal-header">
         <div class="text-center">
         <div class="">
            <p class="modal-font-style-roboto">Are you sure you want to suspend this license?</p>
         </div>
      </div>
      </div>
      <div id="info" class="text-center mt-20px">
         <img src="/src/assets/icon/info.svg" class="center info2" alt="info">
      </div>
      
      <div class="row mt-20">
            <div class="col">
               <div class="row mt-20px">
                  <div class="row d-flex align-items-center">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">Activation Code:</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">FSPDE-00000-00000-00000-00000</span>
                     </span>
                  </div>
                  <div class="row d-flex align-items-center mt-10px">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">Status:</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">Active</span>
                     </span>
                  </div>
                  <div class="row d-flex align-items-center mt-10px">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">Module</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">Business Permit and License</span>
                     </span>
                  </div>
                  <div class="row d-flex align-items-center mt-10px">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">Version:</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">1.2</span>
                     </span>
                  </div>
                  <div class="row d-flex align-items-center mt-10px">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">Expiry Date:</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">n/a</span>
                     </span>
                  </div>
                  <div class=" mt-10px">
                     <div class="d-flex justify-content-start mt-20px mx-10px flex-container">
                    <div class="form-floating width-max ">
                        <textarea class="form-control size-textarea-licensemanager bg-whitesmoke box-shadow-none" placeholder="Leave a comment here" id="floatingTextarea2">
License Key/Activation Code Format 
1st Letter = represents the module 
2nd Letter - represents the validty
....
                        </textarea>
                        <label for="floatingTextarea2">Description</label>
                        
                    </div>
                </div>
                        <!-- <form class="form-floating">
                           <input type="email" class="form-control shadow-sm border-color-none " id="floatingInputValue" placeholder="name@example.com" value="Lorem ipsum dolor sit amet">
                           <label for="floatingInputValue " class="Roboto-label-font">Reason for suspension</label>
                        </form> -->
                     </div>
               </div>
            </div>
         </div>
      <div class="text-center mt-30px">
         <button class="button-default bg-white border-color-indigo color-indigo me-5px mt-0 mb-0 ">Cancel</button>      
         <button class="button-default bg-indigo border-color-indigo color-white ms-5px mt-0 mb-0">Submit</button>      
      </div>
   </div>
   </div>
</template>