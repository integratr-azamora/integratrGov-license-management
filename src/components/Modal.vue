<template>
   <!-- con1 -->
   <br>
   <div class="container bor-style-solid-perma container1" >
      <div class="modal-header">
         <hr>
         <div class="position-absolute top-0 end-0">
         <button class="icon-x">
            <div class="rotate-45"><i class="isax isax-add "></i></div>
         </button>
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
         <button class="button-cancel">Cancel</button>
         <button class="button-submit">Submit</button>
      </div>
   </div>
   <!-- con2 -->
   <br>
   <div class="container con2" >
      <div class="modal-header">
         <p class="modal-header1 m-1"><b>Tag User</b></p>
         <button class="icon-x">
            <div class="rotate-45 ms-1"><i class="isax isax-add "></i></div>
         </button>
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
      <div class="modal-footer m-2">
         <button class="component-button2">Send Request</button>
      </div>
   </div>
   <!-- con3 -->
   <br>
   <div class="container bor-style-solid-perma con3" >
      <div class="modal-header">
         <p class="modal-header1 m-1"><b>Transfer Ownership</b></p>
         <button class="icon-x">
            <div class="rotate-45"><i class="isax isax-add "></i></div>
         </button>
      </div>
      <div class="modal-body3">
         <p class="modal3">Provide the email address of the recipient to whom you want to transfer the ownership rights of the business.</p>
      </div>
      <input type="email" class="form-control mt-3" id="Inputform1" placeholder="Email Address">
      <div class="modal-footer m-3">
         <button class="component-button2">Send Request</button>
      </div>
   </div>
   <!-- con4 -->
   <br>
   <div class="container bor-style-solid-perma con4" >
      <div class="modal-header">
         <p class="modal-header1"><b>Existing Business</b></p>
         <button class="icon-x">
            <div class="rotate-45"><i class="isax isax-add "></i></div>
         </button>
      </div>
      <p class="modal4">Search using the following numbers to find existing business.</p>
      <div class="text-danger d-flex flex-column">
         <p class="modal-4">Business does not exist on our system.</p>
         <input class="form-control-1 mt-2" type="text" placeholder="Transaction No." aria-label="Disabled input example" disabled>
         <input class="form-control-1 mt-2" type="text" placeholder="License No." aria-label="Disabled input example" disabled>
         <input class="form-control-1 mt-2" type="text" placeholder="TIN No.." aria-label="Disabled input example" disabled>
         <input class="form-control-1 mt-2" type="text" placeholder="Date Established" aria-label="Disabled input example" disabled>
         <i class="icon-size m-1 gray isax isax-calendar-1" style="position:relative;left:420px; bottom: 40px;"></i>

         <div class="modal-footer">
            <button class="component-button3">Search</button>
         </div>
      </div>
   </div>
 </template>