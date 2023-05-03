<script setup type="js">
import InputBox from '../components/InputBoxes.vue'
import Buttons from '../components/Buttons.vue'
import Tables from '../components/Tables.vue'
import Iconography from '../components/Iconography.vue';
import Input from '../components/Input.vue';
import Modal from '../components/Modal.vue';
import Typography from '../components/Typography.vue';
</script>

<template>
  <main>
    <div class="container">
      <InputBox />
      <Components />
      <Tables />
      <Buttons />
      <Tables />
      <Iconography/>
      <Modal/>
      <Typography/>
    </div>
  </main>
</template>
