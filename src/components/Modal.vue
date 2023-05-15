<template>
   <!-- con1 -->
   <br>
   <div class="container modal-container-width">
      <div class="modal-container-submit-padding shadow-sm">
         <div class="row">
            <div id="info" class="text-center">
               <img src="../assets/icon/info.svg" class="center info2" alt="info">
            </div>
            <div class="d-flex flex-column ">
               <span class="font-style-roboto-modal text-center">Do you want to submit?</span>
               <span class="fontfamily-gotham-modal-text text-center mt-2">You can always go back and update if there are any changes.</span>
            </div>
            <div class="text-center mt-3">
               <button class="button-default bg-white border-color-indigo color-indigo me-0">Cancel</button>      
               <button class="button-default bg-indigo border-color-indigo color-white me-0">Submit</button>      
            </div>
         </div>
         <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center position-absolute top-0 end-0">
            <fa class="font-size-24px" icon="close" />
         </button>
      </div>
   </div>
   <!-- modal 2 -->
   <div class=" container modal-container-width">
      <div class="modal-container-taguser shadow-sm">
         <div class="modal-header">
            <p class="modal-header-font"><b>Tag User</b></p>
            <div class="position-relative">
               <div class="d-flex flex-row">
                  <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
                     <fa class="font-size-24px" icon="close" />
                  </button>
               </div>
            </div>
         </div>
         <div class="row d-flex align-items-center">
            <div class="modal-body2">
               <span class="fontfamily-gotham-modal-text">
                  <p>Give this user the authority to process transactions</p>
               </span>
               <span class="fontfamily-gotham-modal-text">
                  <p>for this business on your behalf.</p>
               </span>
            </div>
         </div>
         <input type="email" class="form-control border-0 shadow-sm mt-3" id="Inputform1" placeholder="Email Address">
         <div class="">
            <select class="form-select border-0 shadow-sm mt-3" id="admin">
               <option selected>[Owner; Admin]</option>
         </select>
         <fa class="arrow-icon margin-top-left gray" icon="angle-down" style="position:absolute;left:378px; bottom: 7px;"/>
      </div>
         <div class="modal-footer">
            <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-3">Send Request</button>      
         </div>
      </div>
   </div>
   <!-- modal 3 -->
   <div class=" container modal-container-width">
      <div class="modal-container-taguser shadow-sm">
         <div class="modal-header ">
            <p class="modal-header-font"><b>Transfer Ownership</b></p>
            <div class="position-relative">
               <div class="d-flex flex-row">
                  <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center position-absolute top-0 end-0">
            <fa class="font-size-24px" icon="close" />
         </button>
                  <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
                     <fa class="font-size-24px" icon="close" />
                  </button>
               </div>
            </div>
         </div>
         <div class="row d-flex align-items-center">
            <div class="modal-body2">
               <span class="fontfamily-gotham-modal-text">
                  <p>Provide the email address of the recipient to</p>
               </span>
               <span class="fontfamily-gotham-modal-text">
                  <p>who you want to transfer the ownership right of</p>
               </span>
               <span class="fontfamily-gotham-modal-text">
                  <p>the business.</p>
               </span>
            </div>
         </div>
         <input type="email" class="form-control border-0 shadow-sm  mt-3" id="Inputform1" placeholder="Email Address">
         <div class="modal-footer">
            <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-3">Send Request</button>      
         </div>
      </div>
   </div>
   <!-- con4 -->
   <div class=" container modal-container-width">
      <div class="modal-container-taguser shadow-sm">
         <div class="modal-header">
            <p class="modal-header-font"><b>Existing Business</b></p>
            <div class="position-relative">
               <div class="d-flex flex-row">
                  <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
                     <fa class="font-size-24px" icon="close" />
                  </button>
               </div>
            </div>
         </div>
         <span class="fontfamily-gotham-modal-text">
            <p>Search using the following numbers to find existing business.</p>
         </span>
         <p class="font-style-roboto-modal4">Business does not exist on our system.</p>
      <input type="email" class="form-control mt-2 shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="Transaction No.">   
      <input type="email" class="form-control mt-2 shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="License No.">   
      <input type="email" class="form-control mt-2 shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="TIN No.">   
      <input type="email" class="form-control mt-2 shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="Date Established">    
      <i class="icon-calendar gray isax isax-calendar-1" style="position:absolute;left:415px; bottom: 95px;"></i>
      <div class="modal-footer">
            <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-3">Search</button>      
         </div>
      </div>
   </div>
   
</template>