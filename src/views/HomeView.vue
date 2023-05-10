<script setup type="js">
import InputBox from '../components/InputBoxes.vue'
import Tables from '../components/Tables.vue'
import Iconography from '../components/Iconography.vue';
import Modal from '../components/Modal.vue';
import Typography from '../components/Typography.vue';
import StyleComponent from '../components/StyleComponent.vue';
import AccountManager from '../components/AccountManager.vue';
import LicenseManger from '../components/LicenseManger.vue';
import LicensekeyIssue from '../components/Licensekey-Issue.vue';
</script>


<template>
  <main>
    <i class="fa-solid fa-caret-down"></i>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      <LicenseManger/>
      <AccountManager/>
      <InputBox />
      <Components />
      <Buttons />
      <Tables />
      <StyleComponent/> 
      <div class="mt-5"></div>
      <Iconography/>
      <Modal/>
      <Typography/>
      <LicensekeyIssue/>
  </main>
</template>
