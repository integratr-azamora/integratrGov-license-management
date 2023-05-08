<script setup type="js">
import InputBox from '../components/InputBoxes.vue'
import Tables from '../components/Tables.vue'
import Iconography from '../components/Iconography.vue';
import Modal from '../components/Modal.vue';
import Typography from '../components/Typography.vue';
import Components from '../components/StyleComponent.vue'
import LicensekeyIssue from '../components/Licensekey-Issue.vue';
</script>

<template>
  <main>
    <div class="container">
      <InputBox />
      <Components />
       <Buttons />
      <Tables />
      <div class="mt-5"></div>
      <Iconography/>
      <Modal/>
      <Typography/>
      <InputBox />
      <StyleComponent/>
      <LicensekeyIssue/>
    </div>
  </main>
</template>
