<template>
    <Transition name="modal2">
        <div v-if="show">
            <div :class="`suspend-modal modal-mask-2 modal-large-2 p-0  ${modalContainer}`">
                <div :class="`modal-dialog modal-dialog-2 modal-dialog-centered modal-dialog-scrollable ${modalDialog}`">
                    <div :class="`modal-content pad-y-20p ${modalContent}`">
                        <div :class="`modal-body modal-body-2 scrollpink pad-x-20p mb-0 pb-0 p-0 ${modalBody}`">
                            <slot name="body">

                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>




<script>
export default {
    props: {
        show: Boolean,
        modalBody: String,
        modalFooter: String,
        modalContainer: String,
        modalDialog: String,
        modalHeader: String,
        modalContent: String,
    },
}
</script>

<style>
.modal-large-2 {
    display: block !important;
}

.modal-dialog-2 {
    overflow-y: initial !important
}

.modal-body-2 {
    overflow-y: auto;
}
/* dim background */
.modal-mask-2 {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    overflow-y: hidden !important; 
     
}

.modal-header-2 {
    border: 0px;
    border-bottom: 1px;
    border-color: #F4F4F4;
    border-style: solid;
}

.modal-footer-2 {
    border: none;
}

.suspend-modal {
  --bs-modal-height: 560px;
  --bs-modal-width: 481px;
  --bs-modal-zindex: 1055;
  --bs-modal-padding: 1rem;
  --bs-modal-margin: 0.5rem;
  --bs-modal-bg: #fff;
  --bs-modal-border-radius: 8px;
  --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-modal-zindex);
  display: none;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;}



@media (min-width: 500px) {
    .modal-dialog-2 {
        max-width: 490px;
        margin: 1.75rem auto;
    }
}

@media (min-width: 922px) {
    .modal-dialog-2 {
        max-width: 800px;
        margin: 1.75rem auto;
    }
}

@media (min-width: 1100px) {
    .modal-dialog-2 {
        max-width: 1000px;
        margin: 1.75rem auto;
    }
}

@media (min-width: 1400px) {
    .modal-dialog-2 {
        max-width: 1300px;
        margin: 1.75rem auto;
    }
}

@media (min-width: 1600px) {
    .modal-dialog-2 {
        max-width: 1500px;
        margin: 1.75rem auto;
    }
}


</style>