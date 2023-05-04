<template>
    <div class="container bor-style-solid-perma container7" >
       <div class="license-header1">
          <p class="license-header mt-4"><b>Generate License Key</b></p>
          <button class="icon-x">
             <div class="rotate-45 ms-1"><i class="isax isax-add "></i></div>
          </button>
       </div>
       <!-- 1st -->
       <div class="form-floating mt-3">
          <select class="form-select mt-3" id="floatingSelect mt-5" aria-label="Floating label select">
             <option selected>Business Permit and License</option>
          </select>
          <label for="floatingSelect">Module</label>
       </div>
       <!-- 2nd -->
       <div class="form-floating">
          <select class="form-select mt-2" id="floatingSelect" aria-label="Floating label select">
             <option selected>1.0</option>
          </select>
          <label for="floatingSelect">Version</label>
       </div>
       <!-- 3rd -->
       <div class="form-floating">
          <select class="form-select mt-2" id="floatingSelect" aria-label="Floating label select">
             <option selected>n/a</option>
          </select>
          <label for="floatingSelect">Grace Period</label>
       </div>
       <!-- 4th -->
       <div class="form-floating">
          <select class="form-select mt-2" id="floatingSelect" aria-label="Floating label select">
             <option selected>1.0</option>
          </select>
          <label for="floatingSelect">Version</label>
       </div>
       <!-- 5th -->
       <div class="form-floating">
          <select class="form-select mt-2" id="floatingSelect" aria-label="Floating label select">
             <option selected>40 years</option>
          </select>
          <label for="floatingSelect">Validity</label>
       </div>
       <!-- 6th -->
       <div class="form-floating">
          <select class="form-select mt-2" id="floatingSelect" aria-label="Floating label select">
             <option selected>100</option>
          </select>
          <label for="floatingSelect">Number of License</label>
       </div>

       <div class="modal-footer m-2">
          <button class="license-button">Cancel</button>
          <button class="license-button">Save</button>
       </div>
    </div>
    <!-- Issue License -->
    <div class="container bor-style-solid-perma container8" >
       <div class="license-header1">
          <p class="license-header mt-4"><b>Assign License</b></p>
          <button class="icon-x">
             <div class="rotate-45 ms-1"><i class="isax isax-add "></i></div>
          </button>
       </div>
       <!-- 1st -->
       <div class="form-floating mt-3">
          <select class="form-select mt-3" id="floatingSelect mt-5" aria-label="Floating label select">
             <option selected>Business Permit and License</option>
          </select>
          <label for="floatingSelect">Module</label>
       </div>
       <!-- 2nd -->
       <div class="form-floating">
          <select class="form-select mt-2" id="floatingSelect" aria-label="Floating label select">
             <option selected>1.0</option>
          </select>
          <label for="floatingSelect">Version</label>
       </div>
       <!-- 3rd -->
       <form class="form-floating">
       <input type="email" class="form-control mt-2" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
      <label for="floatingInputValue">Input with value</label>
       </form>
    </div>
 </template>