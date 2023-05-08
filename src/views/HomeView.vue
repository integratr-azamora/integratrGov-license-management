<script setup type="js">
import InputBox from '../components/InputBoxes.vue'
import Tables from '../components/Tables.vue'
import Iconography from '../components/Iconography.vue';
import Modal from '../components/Modal.vue';
import Typography from '../components/Typography.vue';
import StyleComponent from '../components/StyleComponent.vue';
import AccountManager from '../components/AccountManager.vue';
import LicenseManger from '../components/LicenseManger.vue';
</script>

<template>
  <main>
      <LicenseManger/>
      <AccountManager/>
      <InputBox />
      <Tables />
      <StyleComponent/> 
      <div class="mt-5"></div>
      <Iconography/>
      <Modal/>
      <Typography/>
  </main>
</template>
