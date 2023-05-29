<template>
    <div class="bor-style-solid m-auto container">
       <div class="bor-style-solid ">
          <div class="col d-flex flex-row px-20px">
             <div class=" size-box-20"></div>
          </div>
       </div>
       <div class="size-container-addlicensedevelop">
          <div class="r-px-20px " >
             <!-- text  -->
             <div>
                <span class="heading1">License Configuration</span>
                <span class="heading3 mt-20px">License Guidelines</span>
                <div class="row font-style-roboto-p1 c-grid c-grid-1">
                   <span class="mt-20px">License Key/Activation Code Format</span>
                   <span>1st Letter = represents the module</span>
                   <span>2nd Letter - represents the validity</span>
                   <span>...</span>
                </div>
             </div>
             <!-- text  -->
             <div class="c-grid mt-20px ">

               <div class="form-floating mw-457px ">
                  <select class="form-select Roboto-input-box-font mt-0 shadow-sm" id="floatingSelect" aria-label="Floating label select">
                     <option selected>Business Permit and License</option>
                  </select>
                  <label for="floatingSelect" class="Roboto-label-font">Module</label>
               </div>

               <form class="form-floating">
                  <input type="text" class="form-control border-color-none shadow-sm Roboto-input-box-font " id="floatingInputValue" placeholder="name@example.com" value="A01">
                  <label for="floatingInputValue"  class="Roboto-label-font">Product No.</label>
               </form>

                <form class="form-floating">
                  <input type="text" class="form-control border-color-none shadow-sm Roboto-input-box-font" id="floatingInputValue" placeholder="name@example.com" value="1.0">
                  <label for="floatingInputValue" class="Roboto-label-font">Version</label>
               </form>

               <div class="form-floating mw-457px margin-top-none">
                  <select class="form-select Roboto-input-box-font mt-0 shadow-sm" id="floatingSelect" aria-label="Floating label select">
                     <option selected>[SaaS; On-prem; Public Cloud; Private Cloud]</option>
                  </select>
                  <label for="floatingSelect" class="Roboto-label-font">Platform</label>
               </div>

               <div class="form-floating mw-457px margin-top-none">
                  <select class="form-select Roboto-input-box-font mt-0 shadow-sm" id="floatingSelect" aria-label="Floating label select">
                     <option selected>40 years</option>
                  </select>
                  <label for="floatingSelect" class="Roboto-label-font">Validity</label>
               </div>

               <form class="form-floating mw-457px ">
                  <input type="text" class="form-control border-color-none shadow-sm Roboto-input-box-font" id="floatingInputValue" placeholder="name@example.com" value="[Perpetual; Saas - E; SaaS - I; SaaS - B]">
                  <label for="floatingInputValue" class="Roboto-label-font">License Description</label>
               </form>
               <form class="form-floating mw-457px">
                  <input type="text" class="form-control border-color-none shadow-sm Roboto-input-box-font " id="floatingInputValue" placeholder="name@example.com" value="A1AA1AA">
                  <label for="floatingInputValue" class="Roboto-label-font">Program/Part No.</label>
               </form>
                <div class="input-group shadow-sm mw-457px bg-none rounded-2">
                   <div class="form-floating">
                      <input type="text" class="form-control border-color-none shadow-none bg-none align-middle Roboto-input-box-font" id="floatingInputGroup1" placeholder="#" value="01/01/2023">
                      <label for="floatingInputValue" class="Roboto-label-font">Release Date</label>
                   </div>
                   <span class="input-group-text border-color-none box-shadow-none shadow-none bg-none"><i class="isax isax-calendar-1 color-dimgray icon-size shadow-none"></i></span>
                </div>
                <div class="input-group shadow-sm mw-457px bg-none rounded-2">
                   <div class="form-floating">
                      <input type="text" class="form-control border-color-none shadow-none bg-none align-middle Roboto-input-box-font" id="floatingInputGroup1" placeholder="#" value="01/01/2024">
                      <label for="floatingInputGroup1" class="Roboto-label-font">End-of-Sale Date</label>
                   </div>
                   <span class="input-group-text border-color-none box-shadow-none shadow-none bg-none"><i class="isax isax-calendar-1 color-dimgray icon-size shadow-none"></i></span>
                </div>
                <div class="input-group shadow-sm mw-457px bg-none rounded-2">
                   <div class="form-floating">
                      <input type="text" class="form-control border-color-none shadow-none bg-none align-middle Roboto-input-box-font" id="floatingInputGroup1" placeholder="#" value="01/01/2025">
                      <label for="floatingInputGroup1" class="Roboto-label-font">End-of-Support-Life Date</label>
                   </div>
                   <span class="input-group-text border-color-none box-shadow-none shadow-none bg-none"><i class="isax isax-calendar-1 color-dimgray icon-size shadow-none"></i></span>
                </div>
                <form class="form-floating">
                  <input type="text" class="form-control border-color-none shadow-sm Roboto-input-box-font " id="floatingInputValue" placeholder="name@example.com" value="FSPDE">
                  <label for="floatingInputValue"  class="Roboto-label-font">5-Letter Code</label>
               </form>
               <form class="form-floating">
                  <input type="text" class="form-control border-color-none shadow-sm Roboto-input-box-font bg-whitesmoke" id="floatingInputValue" placeholder="name@example.com" value="FSPDE-00000-00000-00000-00000">
                  <label for="floatingInputValue"  class="Roboto-label-font">License Key/Activation Code Format</label>
               </form>
             </div>
             <div class="mt-20px">
                <div class="d-flex justify-content-end ">
                   <button class="button-default bg-none border-color-none color-indigo me-0 me-2">Cancel</button>
                   <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
                </div>
                </div>
          </div>
       </div>
    </div>
 </template>