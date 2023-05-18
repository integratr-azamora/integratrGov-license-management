<template>
   <!-- con1 -->
   <br>
   <div class="container container-modal p-20px" >
      <div class="modal-header">
         <hr>
         <div class="position-absolute top-0 end-0">
            <div class="position-relative">
               <div class="d-flex flex-row">
                  <button class="button-round-modal bg-indigo color-white border-color-indigo d-flex align-items-center">
                     <fa class="font-size-24px" icon="close"/>
                  </button>
               </div>
            </div>
         </div>
      </div>
      <div id="info" class="text-center">
         <img src="../assets/icon/info.svg" class="center info2" alt="info">
      </div>
      <div class="text-center">
         <div class="">
            <p class="modal-font-style-roboto mt-20px">Do you want to submit?</p>
            <p class="modal-gotham-body mt-10px">You can always go back and update if there are any changes.</p>
         </div>
      </div>
      <div class="text-center mt-20px">
         <button class="button-default bg-white border-color-indigo color-indigo me-5px mt-0 mb-0 ">Cancel</button>      
         <button class="button-default bg-indigo border-color-indigo color-white ms-5px mt-0 mb-0">Submit</button>      
      </div>
   </div>
   <!-- con2 -->
   <br>
   <div class="container container-user p-20px" >
      <div class="modal-header">
         <p class="container-modal-title">Tag User</p>
         <div class="position-relative">
            <div class="d-flex flex-row">
               <button class="button-round-modal bg-indigo color-white border-color-indigo">
                  <fa class="font-size-24px" icon="close"/>
               </button>
            </div>
         </div>
      </div>
      <div class="row d-flex align-items-center mt-7px">
         <div class="modal-body2">
            <span class="modal2">
               <p>Give this user the authority to process transactions</p>
            </span>
            <span class="modal2">
               <p>for this business on your behalf.</p>
            </span>
         </div>
      </div>
      <input type="email" class="form-control border-0 shadow-sm mt-20px" id="Inputform1" placeholder="Email Address">
      <div class="input-group ">
         <select class="form-select border-0 shadow-sm mt-20px" id="admin">
            <option selected>[Owner; Admin]</option>
         </select>
         <fa class="arrow-icon arrow-icon-positon margin-top-left gray" icon="angle-down"/>
      </div>
      <div class="modal-footer">
         <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-20px">Send Request</button>      
      </div>
   </div>
   <!-- con3 -->
   <br>
   <div class="container container-transfer-ownership p-20px">
      <div class="modal-header">
         <p class="container-modal-title"><b>Transfer Ownership</b></p>
         <div class="position-relative">
            <div class="d-flex flex-row">
               <button class="button-round-modal bg-indigo color-white border-color-indigo">
                  <fa class="font-size-24px" icon="close"/>
               </button>
            </div>
         </div>
      </div>
      <div class="row d-flex align-items-center mt-7px">
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
      <input type="email" class="form-control border-0 shadow-sm  mt-20px" id="Inputform1" placeholder="Email Address">
      <div class="modal-footer">
         <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-20px">Send Request</button>      
      </div>
   </div>
   <!-- con4 -->
   <br>
   <div class="container container-existing p-20px" >
      <div class="modal-header">
         <p class="container-modal-title"><b>Existing Business</b></p>
         <div class="d-flex flex-row">
            <button class="button-round-modal bg-indigo color-white border-color-indigo d-flex align-items-center">
               <fa class="font-size-24px" icon="close"/>
            </button>
         </div>
      </div>
      <div class="row d-flex align-items-center mt-7px">
         <div class="modal-body2">
            <span class="modal2">
               <p>Search using the following numbers to find existing business.</p>
            </span>
         </div>
      </div>
      <p class="font-style-roboto-modal4 mt-20px">Business does not exist on our system.</p>
      <input type="email" class="form-control mt-10px shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="Transaction No.">   
      <input type="email" class="form-control mt-10px shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="License No.">   
      <input type="email" class="form-control mt-10px shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="TIN No.">   
      <input type="email" class="form-control mt-10px shadow-sm border-color-valencia bg-lavender-bush" id="input-form1" placeholder="Date Established">    
      <i class="calendar-modal gray isax isax-calendar-1"></i>
      <div class="modal-footer">
         <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-10px">Search</button>      
      </div>
   </div>
</template>