<script setup type="js">
import InputBox from '../components/InputBoxes.vue'
import Tables from '../components/Tables.vue'
import Iconography from '../components/Iconography.vue';
import Modal from '../components/Modal.vue';
import Typography from '../components/Typography.vue';
import StyleComponent from '../components/StyleComponent.vue';
import AccountManager from '../components/AccountManager.vue';
</script>

<template>
  <main>
    <div class="container">
       <InputBox />
      <Components />
      <Tables />
      <div class="mt-5"></div>
      <Iconography/>
      <Modal/>
      <Typography/>
      <InputBox />
      <AccountManager/>
      <Tables />
      <StyleComponent/> 
      
      
    </div>
  </main>
</template>
