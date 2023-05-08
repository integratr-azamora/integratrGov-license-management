<template>
   <!-- con1 -->
   <br>
   <div class="container container1" >
      <div class="modal-header">
         <hr>
         <div class="position-absolute top-0 end-0">
            <div class="icon-button-close-rotate">
               <button class="button-round bg-indigo color-white border-color-indigo ">
                  <div class=" icon-close-center"><i class="isax isax-add icon-size-weight "></i></div>
               </button>
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
   <div class="container con2" >
      <div class="modal-header">
         <p class="modal-header1"><b>Tag User</b></p>
         <div class="position-absolute top-0 end-0">
            <div class="icon-button-close-rotate">
               <button class="button-round bg-indigo color-white border-color-indigo ">
                  <div class=" icon-close-center"><i class="isax isax-add icon-size-weight "></i></div>
               </button>
            </div>
         </div>
      </div>
      <div class="modal-body2">
         <p class="modal2">Give this user the authority to process transactions for this business on your behalf.</p>
      </div>
      <input type="email" class="form-control mt-2" id="input-form1" placeholder="Email Address">      
      <div class="input-group ">
         <select class="form-select border-0 shadow-sm mt-3" id="admin">
            <option selected>[Owner; Admin]</option>
         </select>
      </div>
      <div class="modal-footer">
         <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-4">Send Request</button>      
      </div>
   </div>
   <!-- con3 -->
   <br>
   <div class="container con3" >
      <div class="modal-header">
         <p class="modal-header1 m-1"><b>Transfer Ownership</b></p>
         <div class="icon-button-close-rotate">
            <button class="button-round bg-indigo color-white border-color-indigo ">
               <div class=" icon-close-center"><i class="isax isax-add icon-size-weight "></i></div>
            </button>
         </div>
      </div>
      <div class="modal-body3">
         <p class="modal3">Provide the email address of the recipient to whom you want to transfer the ownership rights of the business.</p>
      </div>
      <input type="email" class="form-control mt-3" id="Inputform1" placeholder="Email Address">
      <div class="modal-footer">
         <button class="button-default bg-indigo border-color-indigo color-white me-0 mt-4">Send Request</button>      
      </div>
   </div>
   <!-- con4 -->
   <br>
   <div class="container con4" >
      <div class="modal-header">
         <p class="modal-header1"><b>Existing Business</b></p>
         <div class="icon-button-close-rotate">
            <button class="button-round bg-indigo color-white border-color-indigo ">
               <div class=" icon-close-center"><i class="isax isax-add icon-size-weight "></i></div>
            </button>
         </div>
      </div>
      <p class="modal4">Search using the following numbers to find existing business.</p>
      <p class="modal-4">Business does not exist on our system.</p>
      <input class="form-control-1 mt-2" type="text" placeholder="Transaction No." aria-label="Disabled input example" disabled>
      <input class="form-control-1 mt-2" type="text" placeholder="License No." aria-label="Disabled input example" disabled>
      <input class="form-control-1 mt-2" type="text" placeholder="TIN No.." aria-label="Disabled input example" disabled>
      <input class="form-control-1 mt-2" type="text" placeholder="Date Established" aria-label="Disabled input example" disabled>
      <i class="icon-calendar gray isax isax-calendar-1" style="position:absolute;left:440px; bottom: 85px;"></i>
      <div class="modal-footer">
         <button class="button-default bg-indigo border-color-indigo color-white me-0">Search</button>      
      </div>
   </div>
</template>