<template>
   <div class="container container7" >
      <div class="license-header1 d-flex justify-content-between">
         <p class="license-header"><b>Generate License Key</b></p>
         <div class="icon-button-close-rotate">
            <button class="button-round bg-indigo color-white border-color-indigo">
               <div class=" icon-close-center"><i class="isax isax-add icon-size-weight"></i></div>
            </button>
         </div>
      </div>
      <hr>
      <!-- 1st -->
      <div class="form-floating">
         <select class="form-select default-label" id="floatingSelect" aria-label="Floating label select">
            <option selected>Business Permit and License</option>
         </select>
         <label for="floatingSelect" class="info">Module</label>
      </div>
      <!-- 2nd -->
      <div class="form-floating">
         <select class="form-select default-label" id="floatingSelect" aria-label="Floating label select">
            <option selected>1.0</option>
         </select>
         <label for="floatingSelect" class="info">Version</label>
      </div>
      <!-- 3rd -->
      <div class="form-floating">
         <select class="form-select default-label" id="floatingSelect" aria-label="Floating label select">
            <option selected>n/a</option>
         </select>
         <label for="floatingSelect" class="info">Grace Period</label>
      </div>
      <!-- 4th -->
      <div class="form-floating">
         <select class="form-select default-label" id="floatingSelect" aria-label="Floating label select">
            <option selected>1.0</option>
         </select>
         <label for="floatingSelect" class="info">Version</label>
      </div>
      <!-- 5th -->
      <div class="form-floating">
         <select class="form-select default-label" id="floatingSelect" aria-label="Floating label select">
            <option selected>40 years</option>
         </select>
         <label for="floatingSelect" class="info">Validity</label>
      </div>
      <!-- 6th -->
      <div class="form-floating">
         <select class="form-select default-label" id="floatingSelect" aria-label="Floating label select">
            <option selected>100</option>
         </select>
         <label for="floatingSelect" class="info">Number of License</label>
      </div>
      <div class="modal-footer mt-3">
         <button class="button-default bg-white border-color-none color-indigo me-0">Cancel</button>
         <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
      </div>
   </div>
   <!-- Issue License -->
   <br>
   <div class="container container8" >
      <div class="license-header1 d-flex justify-content-between">
         <p class="license-header mt-3"><b>Assign License</b></p>
         <div class="icon-button-close-rotate">
            <button class="button-round bg-indigo color-white border-color-indigo ">
               <div class=" icon-close-center"><i class="isax isax-add icon-size-weight "></i></div>
            </button>
         </div>
      </div>
      <hr>
      <!-- 1st -->
      <div class="form-floating">
         <select class="form-select default-label" id="floatingSelect" aria-label="Floating label select">
            <option selected>Business Permit and License</option>
         </select>
         <label for="floatingSelect" class="info">LGU/Organization</label>
      </div>
      <!-- 2nd -->
      <div class="form-floating">
         <select class="form-select default-label" id="floatingSelect" aria-label="Floating label select">
            <option selected>Juan Dela Cruz</option>
         </select>
         <label for="floatingSelect" class="info">Client</label>
      </div>
      <!-- 3rd -->
      <div class="form-floating ">
         <select class="form-select " id="floatingSelect" aria-label="Floating label select">
            <option class="bg-dimgray" selected >juandelacruz@gmail.com</option>
         </select>
         <label for="floatingSelect" class="info">Email Address</label>
      </div>
      <div class="modal-footer text-center justify-content mt-3">
         <button class="button-default bg-white border-color-none color-indigo me-0">Cancel</button>
         <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
      </div>
   </div>
</template>