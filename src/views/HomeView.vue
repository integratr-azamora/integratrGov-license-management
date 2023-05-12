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
import AddAccount from '../components/AddAccount.vue';
import AddAccountClientDetails from '../components/AddAccountClientDetails.vue';
</script>


<template>
  <main>
      <AddAccount/>
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
      <AddAccountClientDetails/>
  </main>
</template>
