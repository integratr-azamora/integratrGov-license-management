<template>
   <!-- con1 -->
   <br>
   <div class="container container-modal" >
      <div class="modal-header">
         <hr>
         <div class="position-absolute top-0 end-0">
            <div class="position-relative">
            <div class="d-flex flex-row">
               <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
                  <fa class="font-size-24px" icon="close" />
               </button>
            </div>
         </div>
         </div>
      </div>
      <div id="info" class="text-center">
         <img src="../assets/icon/info.svg" class="center info2" alt="info">
      </div>
      <div class="text-center">
         <div class="modal-body">
            <p class="font-style-roboto mt-1">Do you want to submit?</p>
            <p class="font-style-gotham mt-1">You can always go back and update if there are any changes.</p>
         </div>
      </div>
      <div class="text-center mt-3">
         <button class="button-default bg-white border-color-indigo color-indigo me-0">Cancel</button>      
         <button class="button-default bg-indigo border-color-indigo color-white me-0">Submit</button>      
      </div>
   </div>
   <!-- con2 -->
   <br>
   <div class="container container-modal" >
      <div class="modal-header">
         <p class="modal-header1"><b>Tag User</b></p>
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
            <span class="modal2">
               <p>Give this user the authority to process transactions</p>
            </span>
            <span class="modal2">
               <p>for this business on your behalf.</p>
            </span>
         </div>
      </div>
      <input type="email" class="form-control border-0 shadow-sm mt-3" id="Inputform1" placeholder="Email Address">
      <div class="input-group ">
         <select class="form-select border-0 shadow-sm mt-3" id="admin">
            <option selected>[Owner; Admin]</option>
         </select>
      </div>
      <div class="modal-footer">
         <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-3">Send Request</button>      
      </div>
   </div>
   <!-- con3 -->
   <br>
   <div class="container container-modal-transferwnership shadow-sm" >
      <div class="modal-header">
         <p class="modal-header1"><b>Transfer Ownership</b></p>
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
            <span class="modal2">
               <p>Provide the email address of the recipient to</p>
            </span>
            <span class="modal2">
               <p>who you want to transfer the ownership right of</p>
            </span>
            <span class="modal2">
               <p>the business.</p>
            </span>
         </div>
      </div>
      <input type="email" class="form-control border-0 shadow-sm  mt-3" id="Inputform1" placeholder="Email Address">
      <div class="modal-footer">
         <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-3">Send Request</button>      
      </div>
   </div>
   <!-- con4 -->
   <br>
   <div class="container modal-con4" >
      <div class="modal-header">
         <p class="modal-header1"><b>Existing Business</b></p>
         <div class="d-flex flex-row">
            <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
               <fa class="font-size-24px" icon="close" />
            </button>
         </div>
      </div>
      <span class="modal2">
         <p>Search using the following numbers to find existing business.</p>
      </span>
      <p class="modal3">Business does not exist on our system.</p>
      <input type="email" class="form-control mt-2 shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="Transaction No.">   
      <input type="email" class="form-control mt-2 shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="License No.">   
      <input type="email" class="form-control mt-2 shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="TIN No.">   
      <input type="email" class="form-control mt-2 shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="Date Established">    
      <i class="icon-calendar gray isax isax-calendar-1" style="position:absolute;left:445px; bottom: 80px;"></i>
      <div class="modal-footer">
         <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-2">Search</button>      
      </div>
   </div>
</template>