<template>
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
