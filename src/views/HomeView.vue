<script setup type="js">
import InputBox from '../components/Style Guides/InputBoxes.vue'
import Tables from '../components/Style Guides/Tables.vue'
import Iconography from '../components/Style Guides/Iconography.vue';
import Modal from '../components/Style Guides/Modal.vue';
import Typography from '../components/Style Guides/Typography.vue';
import StyleComponent from '../components/Style Guides/StyleComponent.vue';
import AccountManager from '../components/Account Manager/AccountManager.vue';
import LicenseManger from '../components/License Manager/LicenseManager.vue';
import LicensekeyIssue from '../components/License Manager/Modals/Licensekey-Issue.vue';
import AddAccount from '../components/Account Manager/AddAccount.vue';
import AddAccountClientDetails from '../components/Account Manager/AddAccountClientDetails.vue';
import UpdateLicenseModal from '../components/UpdateLicenseModal.vue';
import TransferLicenseModal from '../components/TransferLicenseModal.vue';
import SuspendLicense from '../components/SuspendLicense.vue';
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
      <DomainManagerViewRecord/>
      <UpdateLicenseModal/>
      <SuspendLicense/>
      
  </main>
</template>
