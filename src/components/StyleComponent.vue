<template>
    <div class="d-flex flex-column bor-style-solid container" >
       <div class="container bor-style-solid">
          Components: Users
       </div>
       <!-- Consumer  -->
       <div class="container bor-style-solid ">
          <p>Buttons</p>
          <!-- row1  -->
          <!-- default buttons  -->
          <div class="d-flex flex-row">
             <button class="button-default bg-indigo color-white border-color-indigo" >Default</button>
             <button class="button-default bg-purpleheart color-white border-color-purpleheart">Click/Hover</button>
             <button class="button-default bg-dimgray color-white border-color-dimgray">Disabled</button>
          </div>
          <!-- row1  -->
          <!-- row2  -->
          <!-- no bg/ with outline button  -->
          <div class="d-flex flex-row">
             <button class="button-default bg-none color-indigo border-color-indigo">Default</button>
             <button class="button-default bg-none color-purpleheart border-color-purpleheart">Click/Hover</button>
             <button class="button-default bg-none color-dimgray border-color-dimgray">Disabled</button>
             <button class="button-default bg-none color-indigo border-color-indigo d-flex flex-row ">   
                <p>Default</p>
             </button>
             <button class="button-default bg-none color-purpleheart border-color-purpleheart d-flex flex-row ">
                <i class="isax isax-add icon-size-weight icon-bold"></i>
                <p>Click/Hover</p>
             </button>
             <button class="button-default bg-none color-dimgray border-color-dimgray d-flex flex-row">
                <i class="isax isax-add icon-size-weight"></i>
                <p>Disabled</p>
             </button>
          </div>
          <!-- row2  -->
          <!-- row3  -->
          <!-- no bg,outline button  -->
          <div class="d-flex flex-row">
             <button class="button-default bg-none color-indigo border-color-none">Default</button>
             <button class="button-default bg-none color-purpleheart border-color-none">Click/Hover</button>
             <button class="button-default bg-none color-dimgray border-color-none">Disabled</button>
          </div>
          <!-- row3  -->
          <!-- row4 -->
          <div class="d-flex flex-row">
             <button class="button-default bg-frenchskyblue color-white border-color-frenchskyblue">Download (Default)</button>
             <button class="button-default bg-cornflowerblue color-white border-color-cornflowerblue">Download(Click/Hover)</button>
          </div>
          <!-- row4 -->
          <!-- row5 -->
          <div class="d-flex flex-row">
             <button class="button-default bg-ghostwhite color-frenchskyblue border-color-ghostwhite d-flex flex-row">
                <i class="isax isax-filter-search icon-size-weight me-2"></i>
                <p>Default</p>
             </button>
             <button class="button-default bg-frenchskyblue color-ghostwhite border-color-frenchskyblue d-flex flex-row">
                <i class="isax isax-filter-search icon-size-weight me-2"></i>
                <p>Click/Hover</p>
             </button>
          </div>
          <!-- row5 -->
          <!-- row6 -->
          <div class="d-flex flex-row">
            <div class="icon-button-close-rotate">
               <button class="button-round bg-indigo color-white border-color-indigo ">
                <div class=" icon-close-center"><i class="isax isax-add icon-size-weight "></i></div>
             </button>
            </div>
             <div class="icon-button-close-rotate">
               <button class="button-round bg-purpleheart color-white border-color-purpleheart ">
                <div class="icon-close-center"><i class="isax isax-add icon-size-weight"></i></div>
             </button>
             </div>
             
             <button class="button-round bg-dimgray color-white border-color-dimgray "><i class="isax isax-camera icon-button-round-24px"></i></button>
             <button class="button-round bg-lightlavender color-white border-color-lightlavender "><i class="isax isax-camera icon-button-round-24px"></i></button>
          </div>
          <!-- row6  -->
          <!-- row7  -->
          <div class="d-flex flex-row align-items-center">
             <button class="button-pagination bg-none color-dimgray border-color-none d-flex flex-row">
                <i class="isax isax-arrow-left-24 icon-button-round-24px"></i>
                <p>Previous</p>
             </button>
             <button class="button-pagination bg-none color-indigo border-color-indigo px-20 py-10 mx-10 ">1</button>
             <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 mx-10 ">2</button>
             <button class="button-pagination bg-none color-indigo border-color-none d-flex flex-row">
                <p>Next</p>
                <i class="isax isax-arrow-right-34 icon-button-round-24px"></i>
             </button>
          </div>
          <!-- row7  -->
          <!-- row8  -->
          <!-- checkboxes and radio button -->
          <div class="d-flex flex-row">
             <!-- checkbox  -->
             <div class="mt-1 pt-2">
                <input type="checkbox"  id="check1" class="toggle" >
                <label for="check1"></label>
             </div>
             <div class="mt-1 pt-2">
                <input type="checkbox"  id="check2" class="toggle" checked>
                <label for="check2"></label>
             </div>
             <!-- checkbox  -->
             <div class="form-check m-2">
                <input class="form-check-input size-square-24" type="checkbox" value="" id="flexCheckDefault" checked>
                <label class="form-check-label" for="flexCheckDefault"></label>
             </div>
             <div class="form-check m-2">
                <input class="form-check-input size-square-24" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault"></label>
             </div>
             <div class="form-check m-2">
                <input class="form-check-input bg-dimgray border-color-none size-square-24" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                <label class="form-check-label " for="flexRadioDefault1"></label>
             </div>
             <div class="form-check m-2">
                <input class="form-check-input bg-dimgray border-color-none size-square-24" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label " for="flexRadioDefault1"></label>
             </div>
             <div class="form-check m-2">
                <input class="form-check-input bg-dimgray border-color-none size-square-24" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label " for="flexRadioDefault1"></label>
             </div>
          </div>
          <!-- row8  -->
          <!-- row9 -->
          <!-- badges -->
          <div class="d-flex flex-row">
             <div class="badge-default bg-dimgray color-white border-color-dimgray ">Ongoing </div>
             <div class="badge-default bg-indigo color-white border-color-indigo">For Assessment</div>
             <div class="badge-default bg-indigo color-white border-color-indigo">Pending Payment</div>
             <div class="badge-default bg-eucalyptus color-white border-color-eucalyptus">Completed</div>
          </div>
          <!-- row9 -->
          <div class="d-flex flex-row">
             <div class="badge-pill bg-dimgray color-white border-color-dimgray">Unassigned</div>
             <div class="badge-pill bg-indigo color-white border-color-indigo">In Progress</div>
             <div class="badge-pill bg-frenchskyblue color-white border-color-frenchskyblue">Pre-Approved</div>
             <div class="badge-pill bg-valencia color-white border-color-valencia">Denied</div>
             <div class="badge-pill bg-eucalyptus color-white border-color-eucalyptus">Approved</div>
          </div>
       </div>
       <!-- Consumer  -->
       <!-- Admin -->
       Components: Admin
       <!-- row1  -->
       <div class="d-flex flex-row">
          <button class="button-default bg-indigo color-white border-color-indigo" >Default</button>
          <button class="button-default bg-purpleheart color-white border-color-purpleheart">Click/Hover</button>
          <button class="button-default bg-dimgray color-white border-color-dimgray">Disabled</button>
       </div>
       <!-- row1  -->
       <!-- row2  -->
       <div class="d-flex flex-row">
          <button class="button-default bg-none color-indigo border-color-indigo">Default</button>
          <button class="button-default bg-none color-purpleheart border-color-purpleheart">Click/Hover</button>
          <button class="button-default bg-none color-dimgray border-color-dimgray">Disabled</button>
          <button class="button-default bg-none color-indigo border-color-indigo d-flex flex-row">
             <i class="isax isax-add icon-size-weight"></i>
             <p>Default</p>
          </button>
          <button class="button-default bg-none color-purpleheart border-color-purpleheart d-flex flex-row">
             <i class="isax isax-add icon-size-weight"></i>
             <p>Click/Hover</p>
          </button>
          <button class="button-default bg-none color-dimgray border-color-dimgray d-flex flex-row">
             <i class="isax isax-add icon-size-weight"></i>
             <p>Disabled</p>
          </button>
       </div>
       <!-- row2  -->
       <!-- row3 -->
       <div class="d-flex flex-row">
          <button class="button-default bg-none color-indigo border-color-none">Default</button>
          <button class="button-default bg-none color-purpleheart border-color-none">Click/Hover</button>
          <button class="button-default bg-none color-dimgray border-color-none">Disabled</button>
       </div>
       <!-- row3  -->
       <!-- row4  -->
       <div class="d-flex flex-row">
          <button class="button-default bg-indigo color-white border-color-indigo d-flex flex-row">
             <i class="isax isax-trash icon-size-weight me-1"></i>
             <p>Default</p>
          </button>
          <button class="button-default bg-purpleheart color-white border-color-purpleheart d-flex flex-row"><i class="isax isax-trash icon-size-weight me-1"></i>Click/Hover</button>
          <button class="button-default bg-dimgray color-white border-color-dimgray d-flex flex-row"><i class="isax isax-trash icon-size-weight me-1"></i>Disabled</button>
          <button class="button-default bg-indigo color-white border-color-indigo d-flex flex-row">
             <i class="isax isax-edit icon-size-weight me-1"></i>
             <p>Default</p>
          </button>
          <button class="button-default bg-purpleheart color-white border-color-purpleheart d-flex flex-row"><i class="isax isax-edit icon-size-weight me-1"></i>Click/Hover</button>
          <button class="button-default bg-dimgray color-white border-color-dimgray d-flex flex-row"><i class="isax isax-edit icon-size-weight me-1"></i>Disabled</button>
       </div>
       <!-- row4  -->
       <!-- row5 -->
       <div class="d-flex flex-row">
          <button class="button-default bg-valencia color-white border-color-valencia d-flex flex-row"><i class="isax isax-minus icon-size-weight me-1"></i>Default</button>
          <button class="button-default bg-darkvalencia color-white border-color-darkvalencia d-flex flex-row"><i class="isax isax-minus icon-size-weight me-1"></i>Click/Hover</button>
          <button class="button-default bg-dimgray color-white border-color-dimgray d-flex flex-row"><i class="isax isax-minus icon-size-weight me-1"></i>Disabled</button>
       </div>
       <!-- row5 -->
       <!-- row6  -->
       <div class="d-flex flex-row">
          <button class="button-pill bg-lavenderweb color-indigo border-color-lavenderweb">Default</button>
          <button class="button-pill bg-palelavender color-indigo border-color-palelavender">Click/Hover</button>
          <button class="button-pill bg-lavenderweb color-indigo border-color-lavenderweb d-flex flex-row">
             <i class="isax isax-add icon-size-weight"></i>
             <p>Default</p>
          </button>
          <button class="button-pill bg-palelavender color-indigo border-color-palelavender d-flex flex-row"><i class="isax isax-add icon-size-weight"></i>Click/Hover</button>
       </div>
       <!-- row6  -->
       <!-- row7  -->
       <div class="d-flex flex-row">
          <button class="button-pill bg-mistyrose color-venitianred border-color-mistyrose d-flex flex-row"><i class="isax isax-add icon-size-weight"></i>Default</button>
          <button class="button-pill bg-champagnepink color-venitianred border-color-champagnepink d-flex flex-row"><i class="isax isax-add icon-size-weight"></i>Click/Hover</button>
          <button class="button-pill bg-chinesegreen color-seagreen border-color-chinesegreen d-flex flex-row">
             <i class="isax isax-add icon-size-weight"></i>
             <p>Default</p>
          </button>
          <button class="button-pill bg-columbiagreen color-seagreen border-color-columbiagreen d-flex flex-row"><i class="isax isax-add icon-size-weight"></i>Click/Hover</button>
          <button class="button-pill bg-platinum color-darkgray border-color-platinum d-flex flex-row"><i class="isax isax-add icon-size-weight"></i>Disabled</button>
       </div>
       <!-- row7  -->
       <!-- row8 -->
       <div class="d-flex flex-row">
          <button class="button-default bg-ghostwhite color-frenchskyblue border-color-ghostwhite d-flex flex-row">
             <i class="isax isax-filter-search icon-size-weight me-2"></i>
             <p>Default</p>
          </button>
          <button class="button-default bg-frenchskyblue color-ghostwhite border-color-frenchskyblue d-flex flex-row">
             <i class="isax isax-filter-search icon-size-weight me-2"></i>
             <p>Click/Hover</p>
          </button>
       </div>
       <!-- row8 -->
       <!-- row9  -->
       <div class="d-flex flex-row">
         <div class="icon-button-close-rotate">
               <button class="button-round bg-indigo color-white border-color-indigo ">
                <div class=" icon-close-center"><i class="isax isax-add icon-size-weight "></i></div>
             </button>
            </div>
             <div class="icon-button-close-rotate">
               <button class="button-round bg-purpleheart color-white border-color-purpleheart ">
                <div class="icon-close-center"><i class="isax isax-add icon-size-weight"></i></div>
             </button>
             </div>
          <button class="button-round bg-none color-indigo border-color-none "><i class="isax isax-trash icon-button-round-24px"></i></button>
          <button class="button-round bg-none color-purpleheart border-color-none "><i class="isax isax-trash icon-button-round-24px"></i></button>
       </div>
       <!-- row9  -->
       <!-- row10 -->
       <div class="d-flex flex-row">
          <button class="button-pagination bg-none color-dimgray border-color-none"><i class="isax isax-arrow-left-24 icon-button-round-24px"></i></button>
          <button class="button-pagination bg-none color-dimgray border-color-none">Previous</button>
          <button class="button-pagination bg-none color-indigo border-color-indigo px-20 py-10 mx-10 ">1</button>
          <button class="button-pagination bg-none color-dimgray border-color-none px-20 py-10 mx-10 ">2</button>
          <button class="button-pagination bg-none color-indigo border-color-none">Next</button>
          <button class="button-pagination bg-none color-indigo border-color-none"><i class="isax isax-arrow-right-34 icon-button-round-24px"></i></button>
       </div>
       <!-- row10 -->
       <!-- row11  -->
       <div class="d-flex flex-row align-items-center">
          <div class=" mt-1">
             <input type="checkbox"  id="check3" class="toggle" >
             <label for="check3"></label>
          </div>
          <div class="mt-1">
             <input type="checkbox"  id="check4" class="toggle" checked>
             <label for="check4"></label>
          </div>
          <div class="form-check m-2">
             <input class="form-check-input size-square-24" type="checkbox" value="" id="flexCheckDefault" checked>
             <label class="form-check-label" for="flexCheckDefault"></label>
          </div>
          <div class="form-check m-2">
             <input class="form-check-input size-square-24" type="checkbox" value="" id="flexCheckDefault">
             <label class="form-check-label" for="flexCheckDefault"></label>
          </div>
          <div class="d-flex flex-row ">
             <button class="button-round bg-none color-indigo border-color-none "><i class="isax isax-edit-25 icon-button-round-24px"></i></button>
             <button class="button-round bg-none color-purpleheart border-color-none "><i class="isax isax-edit-25 icon-button-round-24px"></i></button>
             <button class="button-round bg-none color-dimgray border-color-none "><i class="isax isax-edit-25 icon-button-round-24px"></i></button>
          </div>
          <button class="button-tab m-3">Tab 1</button>
          <button class="button-tab m-3">Tab 1</button>
          <div class="form-check m-2">
             <input class="form-check-input bg-dimgray border-color-none size-square-24" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
             <label class="form-check-label " for="flexRadioDefault1"></label>
          </div>
          <div class="form-check m-2">
             <input class="form-check-input bg-dimgray border-color-none size-square-24" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
             <label class="form-check-label " for="flexRadioDefault1"></label>
          </div>
          <div class="form-check m-2">
             <input class="form-check-input bg-dimgray border-color-none size-square-24" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
             <label class="form-check-label " for="flexRadioDefault1"></label>
          </div>
       </div>
       <!-- row11 -->
       Badge(Assessment)
       <div class="d-flex flex-row">
          <div class="badge-pill bg-dimgray color-white border-color-dimgray ">Unassigned </div>
          <div class="badge-pill bg-indigo color-white border-color-indigo"> In Progress </div>
          <div class="badge-pill bg-frenchskyblue color-white border-color-frenchskyblue">Pre-Approved </div>
          <div class="badge-pill bg-valencia color-white border-color-valencia">Denied </div>
          <div class="badge-pill bg-eucalyptus color-white border-color-eucalyptus">Approved </div>
       </div>
       Badge(Payment)
       <div class="d-flex flex-row">
          <div class="badge-pill bg-dimgray color-white border-color-dimgray">New</div>
          <div class="badge-pill bg-indigo color-white border-color-indigo">Ongoing</div>
          <div class="badge-pill bg-eucalyptus color-white border-color-eucalyptus">Paid</div>
          <div class="badge-pill bg-valencia color-white border-color-valencia">Late</div>
       </div>
       <!-- Admin -->
    </div>
 </template>