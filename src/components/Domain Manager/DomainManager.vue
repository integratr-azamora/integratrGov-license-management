<template>
    <div class=" ">
       <div class="d-flex justify-content-center">
          <div class=" rounded-3 container">
             <div class=" heading1">Domain Manager </div>
             <!-- row1  -->
             <div class=" shadow-sm border-round16px pb-20px">
               <div class="d-flex justify-content-between mt-20px pt-20px mx-20px">
                  <p class="fontfamily-gotham-heading-2">Domains</p>
               </div>
               
                <!-- table Header Row2  -->
                <!-- table Header Row3  -->
                <div class="col d-flex flex-row">
                   <!-- px box  -->
                   <div class=" size-box-20">
                   </div>
                   <!-- px box  -->
                </div>
                <!-- table Header Row3  -->
                <!-- table Header Row4  -->
                <div class=" ">
                   <!-- table Header Row4 Col1 -->
                   <div class="d-flex align-items-center">
                      <div class="input-group shadow-sm border-round-4px align-items-center size-search-table ms-20px">
                         <span class="input-group-text bg-none border-color-none" id="basic-addon1"><i class="isax isax-search-normal-1  table-inputbox-icon-size py-14py"></i></span>
                         <input type="text" class="form-control border-color-none shadow-none" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                      <div class="mx-20px">
                        <button @click="showModal" class="button-default bg-indigo color-white border-color-indigo d-flex flex-row" >
                            <i class="isax isax-trash icon-size-weight me-1"></i>
                            Delete
                        </button>
                      </div>
                   </div>
                   <!-- table Header Row4 Col1 -->
                </div>
                <!-- table Header Row4  -->
                <!-- table Header Row5  -->
                <div class="d-flex flex-row">
                   <!-- px box  -->
                   <div class=" size-box-20"></div>
                   <!-- px box  -->
                </div>
                <!-- table Body  -->
                <div class="table-responsive rounded-1 scroll-domain-manager  table-borderless" >
                   <table class="table  table-striped-custom table-hover font-table-text overflow-scroll table-responsive table-borderless" >
              <thead class="table-header">
                 <tr > 
                   <th class="text-start ps-20px pb-10px padding-top-none">
                      <div class="d-flex ">
                         <span class="font-table-column me-10px">
                            <div class="form-check">
                                <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault"></label>
                            </div>
                         </span>
                      </div>
                   </th>
                   <th class="text-start  pb-10px padding-top-none">
                      <div class="d-flex align-items-center">
                         <span class="font-table-column me-10px">Type</span>
                         <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                      </div>
                   </th>
                   <th class="text-start  pb-10px padding-top-none">
                      <div class="d-flex align-items-center">
                         <span class="font-table-column me-10px">Host</span>
                         <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                      </div>
                   </th>
                   <th class="text-start  pb-10px padding-top-none ">
                      <div class="d-flex align-items-center">
                         <span class="font-table-column me-10px">Points to</span>
                         <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                      </div>
                   </th>
                   <th class="text-start  pb-10px padding-top-none pe-20px width-50px">
                      <div class="d-flex align-items-center">
                         <span class="font-table-column me-10px">TTL</span>
                         <i class="isax isax-arrow-down5 size-icon-table-arrow"></i>
                      </div>
                   </th>
                 </tr>
              </thead>
              <tbody class="border rounded-1">
                 <!-- row1  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px  width-50px">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="checkbox1" >
                            <label class="form-check-label" for="checkbox1"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">www</td>
                    <td class="text-start vertical-alignment-center">www.integratrgov.net</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row2  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">A</td>
                    <td class="text-start vertical-alignment-center">@</td>
                    <td class="text-start vertical-alignment-center">23.236.62.147</td>
                    <td class="text-start vertical-alignment-center pe-20px">600 seconds</td>
                 </tr>
                 <!-- row3  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">email</td>
                    <td class="text-start vertical-alignment-center">email.secureserver.net</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row4  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">ftp</td>
                    <td class="text-start vertical-alignment-center">@</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row5  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">A</td>
                    <td class="text-start vertical-alignment-center">@</td>
                    <td class="text-start vertical-alignment-center">184.168.221.49</td>
                    <td class="text-start vertical-alignment-center pe-20px">600 seconds</td>
                 </tr>
                 <!-- row6  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">_domainconnect</td>
                    <td class="text-start vertical-alignment-center">_domainconnect.gd.domaincontrol.com</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row7  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">www</td>
                    <td class="text-start vertical-alignment-center">@</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row8  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">email</td>
                    <td class="text-start vertical-alignment-center">email.secureserver.net</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row9  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">ftp</td>
                    <td class="text-start vertical-alignment-center">@</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
                 <!-- row10  -->
                 <tr class="size-table-tabledata column border-rouded-5px">
                    <td class="text-start vertical-alignment-center mwmc ps-20px ">
                        <div class="form-check">
                            <input class="form-check-input size-checkbox-24px mb-4px" type="checkbox" value="" id="flexCheckDefault" >
                            <label class="form-check-label" for="flexCheckDefault"></label>
                        </div>
                    </td>
                    <td class="text-start vertical-alignment-center">CNAME</td>
                    <td class="text-start vertical-alignment-center">_domainconnect</td>
                    <td class="text-start vertical-alignment-center">_domainconnect.gd.domaincontrol.com</td>
                    <td class="text-start vertical-alignment-center pe-20px">1 hour</td>
                 </tr>
              </tbody>
           </table>
                </div>
                <!-- table Body  -->
                <div class="d-flex flex-row justify-content-end mx-20px mt-20px font-table-pagination d-flex align-items-center ">
                   <!-- pagination  -->
                   <div class=" col padding-none">
                     <div class="d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-between responsive-margin-end-5px mx-auto">
                        <button class="button-pagination bg-none color-dimgray border-color-none"><fa class="font-size-20px  mt-1" icon="angle-left" /></button>
                        <button class="button-pagination bg-none color-dimgray border-color-none responsive-table-margin responsive-table-margin-end">Previous</button>
                        <button class="button-pagination bg-none color-indigo border-color-indigo px-20 py-10 ">1</button>
                        <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 ">2</button>
                        <button class="button-pagination bg-none color-indigo border-color-none responsive-table-margin responsive-table-margin-start">Next</button>
                        <button class="button-pagination bg-none color-indigo border-color-none"><fa class="font-size-20px  mt-1" icon="angle-right" /></button>
                     </div>
                  </div>
                   <!-- pagination  -->
                </div>
             </div>
             <!-- row1  -->        
          </div>
       </div>
       
    </div>

    <ModalLarge :show="openModalViewRecordCName" @close="openModalViewRecordCName = false">
      <template #body>
         <div class="d-flex justify-content-center" ref="openModalViewRecordCName">
      <div class="view-record-modal padding-none" >
         <div class="modal-header mt-24px ms-20px me-20px">
            <p class="modal-font-style-roboto">CNAME Record</p>
            <div class="position-relative">
               <div class="d-flex flex-row">
                  <button class="button-round-modal bg-indigo color-white border-color-indigo">
                     <fa class="font-size-24px" icon="close"/>
                  </button>
               </div>
            </div>
         </div>
         <div class="border-bottom-license mt-20px"></div>
         <div class="row mt-20">
            <div class="col ms-20px me-20px">
               <div class="row mt-20px">
                  <div class="row d-flex align-items-center ">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">Host:</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">www</span>
                     </span>
                  </div>
               </div>
               <div class="row mt-10px">
                  <div class="row d-flex align-items-center ">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">Points to:</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">www000.integratrgov.net</span>
                     </span>
                  </div>
               </div>
               <div class="row mt-10px">
                  <div class="row d-flex align-items-center ">
                     <span class=" d-flex justify-content-start">
                     <span class="view-record-font-heading3 mt-1">TTL:</span> 
                     <span class="font-style-roboto-p1 ms-1 mt-1">1 hour</span>
                     </span>
                  </div>
               </div>
               <div class="d-flex justify-content-end mb-20px">
                  <button class="button-default bg-none border-color-none color-indigo me-0 me-2">Cancel</button>
                  <button class="button-default bg-indigo border-color-indigo color-white me-0">Save</button>
               </div>
            </div>
         </div>
      </div>
   </div>
      </template>
   </ModalLarge>
 </template>

<script>
import ModalLarge from '../../components/ModalLarge.vue'

export default {
   components: {
      ModalLarge
   },
   data(){
      return {
       openModalViewRecordCName: false, 
      }
   },
   methods:{
      showModal() {
         this.$refs['openModalViewRecordCName'].show();
      },
      hideModal() {
         this.$refs['openModalViewRecordCName'].hide();
      },

   }
}
</script>