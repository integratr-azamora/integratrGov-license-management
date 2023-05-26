<template>
   <div class="d-flex justify-content-center " >
      <div class="licensekey">
         <div class="d-flex justify-content-between mt-20px">
            <p class="license-header mx-20px">Generate License Key</p>
         <button class="mx-20px button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
            <fa class="font-size-20px" icon="close" />
         </button>
         </div>
         <div class="border-bottom-license mt-20px"></div>
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
            <option selected>n/a</option>
         </select>
         <label for="floatingSelect" class="Roboto-label-font">Grace Period</label>
      </div>
         <!-- 4th -->
         <div class="form-floating mx-20px">
            <select class="form-select Roboto-input-box-font" id="floatingSelect" aria-label="Floating label select">
               <option selected>1.0</option>
            </select>
            <label for="floatingSelect" class="Roboto-label-font">Version</label>
         </div>
         <!-- 5th -->
         <div class="form-floating mx-20px">
            <select class="form-select Roboto-input-box-font" id="floatingSelect" aria-label="Floating label select">
               <option selected>40 years</option>
            </select>
            <label for="floatingSelect" class="Roboto-label-font">Validity</label>
         </div>
         <!-- 6th -->
         <div class="form-floating mx-20px">
            <select class="form-select Roboto-input-box-font" id="floatingSelect" aria-label="Floating label select">
               <option selected>100</option>
            </select>
            <label for="floatingSelect" class="Roboto-label-font">Number of License</label>
         </div>
         <div class="d-flex justify-content-end  mx-20px mx-20px my-20px">
            <button class="button-default bg-none border-color-none color-indigo me-0 me-2">Cancel</button>
            <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
         </div>
      </div>
   </div>
   <br>
   <div class="d-flex justify-content-center " >
      <div class="licensekey">
         <div class="d-flex justify-content-between my-20px">
            <p class="license-header mx-20px">Assign License</p>
         <button class="mx-20px button-round bg-indigo color-white border-color-indigo d-flex align-items-center">
            <fa class="font-size-20px" icon="close" />
         </button>

         </div>
         
         <div class="border-bottom-license"></div>
         <!-- 1st -->
         <div class="form-floating mx-20px">
         <select class="form-select Roboto-input-box-font" id="floatingSelect" aria-label="Floating label select">
            <option selected>Pasig City</option>
         </select>
         <label for="floatingSelect" class="Roboto-label-font">LGU/Organization</label>
      </div>
      <!-- 2nd -->
      <div class="form-floating mx-20px">
         <select class="form-select Roboto-input-box-font" id="floatingSelect" aria-label="Floating label select">
            <option selected>Juan Dela Cruz</option>
         </select>
         <label for="floatingSelect" class="Roboto-label-font">Client</label>
      </div>
      <!-- 3rd -->
         <form class="form-floating m-20px">
            <input type="text" class="form-control Roboto-input-box-font shadow-sm border-color-none bg-whitesmoke" id="information" value="juandelacruz@gmail.com" >
            <label for="information" class="Roboto-label-font">Email Address</label>
         </form>

      <div class="d-flex text-center justify-content-end mx-20px my-20px">
         <button class="button-default bg-none border-color-none color-indigo me-2">Cancel</button>
         <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
      </div>
   </div>
   </div>
</template>