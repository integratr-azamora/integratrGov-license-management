<template>
   <div class="d-flex justify-content-center " >
      <div class="licensekey-container1 ">
         <p class="license-header p-20px">Generate License Key</p>
         <button class="m-20px position-absolute top-0 end-0 button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
               <fa class="font-size-20px" icon="close" />
            </button>
            <div class="border-bottom-license mt-14px"></div>

             <!-- 1st -->
      <div class="m-20px">
         <div class="input-group mb-3 Roboto-input-box-font ">
            <form class="form-floating">
               <input type="text" class="form-control shadow-sm border-color-none size-licensekey-inputbox"  value="Business Permit and License">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Module</label>
               </form>
         </div>
      </div>
      <!-- 2nd -->
      <div class="license">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="form-control shadow-sm border-color-none size-licensekey-inputbox"  value="1.0">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Version</label>
               </form>
         </div>
      </div>
      <!-- 3rd -->
      <div class="license">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="form-control shadow-sm border-color-none size-licensekey-inputbox"  value="n/a">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword class=info">Grace Period</label>
               </form>
         </div>
      </div>
      <!-- 4th -->
      <div class="license">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="form-control shadow-sm border-color-none size-licensekey-inputbox"  value="1.0">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Version</label>
               </form>
         </div>
      </div>
      <!-- 5th -->
      <div class="license">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="form-control shadow-sm border-color-none size-licensekey-inputbox"  value="40">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Validity</label>
               </form>
         </div>
      </div>
      <!-- 6th -->
      <div class="license">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="form-control shadow-sm border-color-none size-licensekey-inputbox"  value="100">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Number of License </label>
               </form>
         </div>
      </div>
      <div class="modal-footer m-20px">
         <button class="button-default bg-white border-color-none color-indigo me-0">Cancel</button>
         <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
      </div>
      </div>
   </div>

   <br>
   <div class="d-flex justify-content-center " >
      <div class="licensekey-container2 ">
         <p class="license-header p-20px">Assign License</p>
         <button class="m-20px position-absolute top-0 end-0 button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
               <fa class="font-size-20px" icon="close" />
            </button>
            <div class="border-bottom-license"></div>
             <!-- 1st -->
      <div class="license">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class=" form-control shadow-sm border-color-none"  value="Pasig City">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">LGU/Organization</label>
               </form>
         </div>
      </div>
      <!-- 2nd -->
      <div class="license">
         <div class="input-group mb-3 Roboto-input-box-font">
            <form class="form-floating">
               <input type="text" class="form-control shadow-sm border-color-none size-licensekey-inputbox"  value="Juan Dela Cruz">
               <fa class="font-size-24px licensekey-icon-dropdown color-dimgray" icon="angle-down" />
               <label for="floatingPassword" class="info">Client</label>
               </form>
         </div>
      </div>
      <!-- 3rd -->     
      <div class="license">
         <form class="form-floating">
            <input type="text" class="form-control inputbox-font shadow-sm border-color-none bg-whitesmoke" id="information" value="juandelacruz@gmail.com" >
            <label for="information" class="info">Email Address</label>
         </form>
      </div>
      <div class="modal-footer m-20px">
         <button class="button-default bg-white border-color-none color-indigo me-0">Cancel</button>
         <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
      </div>
      </div>
   </div>
  
</template>