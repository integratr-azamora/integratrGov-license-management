<template>
   <div class="container licensekey-container1" >
      <div class="license-header1 d-flex justify-content-between">
         <p class="license-header"><b>Generate License Key</b></p>
         <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
            <fa class="font-size-20px" icon="close" />
         </button>
      </div>
      <!-- 1st -->
      <div class="license mt-20px">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class=" form-control shadow-sm border-color-none"  value="Business Permit and License">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Module</label>
            </form>
         </div>
      </div>
      <!-- 2nd -->
      <div class="license mt-20px">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="default-label form-control shadow-sm border-color-none"  value="1.0">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Version</label>
            </form>
         </div>
      </div>
      <!-- 3rd -->
      <div class="license mt-20px">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="default-label form-control shadow-sm border-color-none"  value="n/a">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword class=info">Grace Period</label>
            </form>
         </div>
      </div>
      <!-- 4th -->
      <div class="license mt-20px">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="default-label form-control shadow-sm border-color-none"  value="1.0">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Version</label>
            </form>
         </div>
      </div>
      <!-- 5th -->
      <div class="license mt-20px">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="default-label form-control shadow-sm border-color-none"  value="40">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Validity</label>
            </form>
         </div>
      </div>
      <!-- 6th -->
      <div class="license mt-20px">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="default-label form-control shadow-sm border-color-none"  value="100">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Number of License </label>
            </form>
         </div>
      </div>
   </div>
   <!-- Issue License -->
   <br>
   <div class="container licensekey-container2" >
      <div class="license-header1 d-flex justify-content-between">
         <p class="license-header mt-3"><b>Assign License</b></p>
         <button class="button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
            <fa class="font-size-20px" icon="close" />
         </button>
      </div>
      <hr>
      <!-- 1st -->
      <!-- 1st -->
      <div class="license mt-20px">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class=" form-control shadow-sm border-color-none"  value="Business Permit and License">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">LGU/Organization</label>
            </form>
         </div>
      </div>
      <!-- 2nd -->
      <div class="license mt-20px">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="default-label form-control shadow-sm border-color-none"  value="Juan Dela Cruz">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Client</label>
            </form>
         </div>
      </div>
      <!-- 3rd -->
      <div class="input-group mt-4">
         <form class="form-floating">
            <input type="text" class="form-control inputbox-font shadow-sm border-color-none bg-whitesmoke" id="information" value="juandelacruz@gmail.com" >
            <label for="information" class="info">Email Address</label>
         </form>
      </div>
      <div class="modal-footer text-center justify-content mt-3">
         <button class="button-default bg-white border-color-none color-indigo mt-10px me-0">Cancel</button>
         <button class="button-default bg-indigo border-color-indigo color-white mt-10px me-0">Save</button>
      </div>
   </div>
</template>