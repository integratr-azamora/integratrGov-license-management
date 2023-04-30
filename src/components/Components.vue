<template>
    <div class="d-flex flex-column bor-style-solid">
        <div class="container bor-style-solid">
             Components: Users
        </div>
        <!-- Consumer  -->
        <div class="container bor-style-solid ">
             <p>Buttons</p>
             <!-- row1  -->
             <!-- default buttons  -->
             <div class="d-flex flex-row">
                <button class="component-button-indigo-solid-indigo-roboto-16px-white-px10-py20-mx10-my-10">Default</button>
                <button class="component-button-purpleheart-solid-purpleheart-roboto-16px-white-px10-py20-mx10-my-10">Click/Hover</button>
                <button class="component-button-dimgray-none-roboto-16px-white-px10-py20-mx10-my-10">Disabled</button>
             </div>
             <!-- row1  -->
             <!-- row2  -->
             <!-- no bg/ with outline button  -->
             <div class="d-flex flex-row">
                <button class="component-button-none-solid-indigo-roboto-16px-indigo-px10-py20-mx10-my-10">Default</button>
                <button class="component-button-none-solid-purpleheart-roboto-16px-white-px10-py20-mx10-my-10">Click/Hover</button>
                <button class="component-button-none-solid-dimgray-roboto-16px-white-px10-py20-mx10-my-10">Disabled</button>
                <button class="component-button-none-solid-indigo-roboto-16px-dimgray-px10-py20-mx10-my-10 d-flex flex-row"><i class="isax isax-add icon-size-weight"></i><p>Default</p> </button>
                <button class="component-button-none-solid-purpleheart-roboto-16px-white-px10-py20-mx10-my-10 d-flex flex-row"><i class="isax isax-add icon-size-weight"></i><p>Click/Hover</p> </button>
                <button class="component-button-none-solid-dimgray-roboto-16px-white-px10-py20-mx10-my-10 d-flex flex-row"><i class="isax isax-add icon-size-weight"></i><p>Disabled</p> </button>
             </div>
             <!-- row2  -->
             <!-- row3  -->
             <!-- no bg,outline button  -->
             <div class="d-flex flex-row">
                <button class="component-button-none-none-none-roboto-16px-indigo-px10-py20-mx10-my-10">Default</button>
                <button class="component-button-none-none-none-roboto-16px-purpleheart-px10-py20-mx10-my-10">Click/Hover</button>
                <button class="component-button-none-none-dimgray-roboto-16px-dimgray-px10-py20-mx10-my-10">Disabled</button>
             </div>
             <!-- row3  -->
             <!-- row4 -->
             <div class="d-flex flex-row">
                <button class="component-button-frenchskyblue-solid-frenchskyblue-roboto-16px-white-px10-py20-mx10-my-10">Download (Default)</button>
                <button class="component-button-cornflowerblue-solid-cornflowerblue-roboto-16px-white-px10-py20-mx10-my-10">Download(Click/Hover)</button>
             </div>
             <!-- row4 -->
             <!-- row5 -->
             <div class="d-flex flex-row">
                <button class="component-button-ghostwhite-solid-ghostwhite-roboto-16px-frechskyblue-px10-py20-mx10-my-10 d-flex flex-row"><i class="isax isax-filter-search icon-size-weight me-2"></i><p>Default</p></button>
                <button class="component-button-frenchskyblue-solid-frenchskyblue-roboto-16px-white-px10-py20-mx10-my-10 d-flex flex-row"><i class="isax isax-filter-search icon-size-weight me-2"></i><p>Click/Hover</p></button>
             </div>
             <!-- row5 -->
             <!-- row6 -->
             <div class="d-flex flex-row">
                <button class="component-button-round-indigo-none-indigo-nofont-fontsize24px-white-mx10-my-10 "><div class="icon-button-close-rotate"><i class="isax isax-add icon-size-weight"></i></div></button>
                <button class="component-button-round-purpleheart-none-purpleheart-nofont-fontsize24px-white-mx10-my-10 "><div class="icon-button-close-rotate"><i class="isax isax-add icon-size-weight"></i></div></button>
                <button class="component-button-round-lightgray-none-none-nofont-nofontsize-white-mx10-my-10 "><i class="isax isax-camera icon-button-round-24px"></i></button>
                <button class="component-button-round-lavenderblue-none-none-nofont-nofontsize-white-mx10-my-10 "><i class="isax isax-camera icon-button-round-24px"></i></button>
             </div>
             <!-- row6  -->
             <!-- row7  -->
             <!-- pagination  -->
             <div class="d-flex flex-row">
                <button class="component-button-none-none-dimgray-roboto-16px-dimgray"><i class="isax isax-arrow-left-24 icon-button-round-24px"></i></button>
                <button class="component-button-none-none-dimgray-roboto-16px-dimgray mb-2">Previous</button>
                <button class="component-button-none-solid-indigo-roboto-16px-indigo-px10-py20-mx10-my-10">1</button>
                <button class="component-button-none-none-dimgray-roboto-16px-dimgray-px10-py20-mx10-my-10">2</button>
                <button class="component-button-none-none-indigo-roboto-16px-dimgray mb-2">Next</button>
                <button class="component-button-none-none-indigo-roboto-16px-dimgray"><i class="isax isax-arrow-right-34 icon-button-round-24px"></i></button>
             </div>
             <!-- row7  -->
             <!-- row8  -->
             <!-- checkboxes and radio button -->
             <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
             <!-- row8  -->

             <!-- row9 -->
             <!-- badges -->
             <div class="d-flex flex-row">
                <div class="components-badges-w152px-h30px-bgdimgray-fsgotham-fcwhite-fs16px-lineh-textaligncenter-mx10-my10">Ongoing</div>
                <div class="components-badges-w152px-h30px-bgindigo-fsgotham-fcwhite-fs16px-lineh-textaligncenter-mx10-my10">For Assessment</div>
                <div class="components-badges-w152px-h30px-bgindigo-fsgotham-fcwhite-fs16px-lineh-textaligncenter-mx10-my10">Pending Payment</div>
                <div class="components-badges-w152px-h30px-bgeucalyptus-fsgotham-fcwhite-fs16px-lineh-textaligncenter-mx10-my10">Completed</div>
             </div>
             <!-- row9 -->
             <div class="d-flex flex-row">
                <div class="components-badges-pill-bgdimgray-fsgotham-fcwhite-fs13px-lineh-textaligncenter-mx10-my10-px2-py2">Unassigned</div>
                <div class="components-badges-pill-bgindigo-fsgotham-fcwhite-fs13px-lineh-textaligncenter-mx10-my10-px2-py2">In Progress</div>
                <div class="components-badges-pill-bgfrenchskyblue-fsgotham-fcwhite-fs13px-lineh-textaligncenter-mx10-my10-px2-py2">Pre-Approved</div>
                <div class="components-badges-pill-bgvalencia-fsgotham-fcwhite-fs13px-lineh-textaligncenter-mx10-my10-px2-py2">Denied</div>
                <div class="components-badges-pill-bgeucalyptus-fsgotham-fcwhite-fs13px-lineh-textaligncenter-mx10-my10-px2-py2">Approved</div>

             </div>
        </div>
        <!-- Consumer  -->
        <!-- Admin -->
        Components: Admin
        <!-- row1  -->
        <div class="d-flex flex-row">
            <button class="component-button-indigo-solid-indigo-roboto-16px-white-px10-py20-mx10-my-10">Default</button>
            <button class="component-button-purpleheart-solid-purpleheart-roboto-16px-white-px10-py20-mx10-my-10">Click/Hover</button>
            <button class="component-button-dimgray-none-roboto-16px-white-px10-py20-mx10-my-10">Disabled</button>
        </div>
        <!-- row1  -->
        <!-- row2  -->
        <div class="d-flex flex-row"> 
            <button class="component-button-none-solid-indigo-roboto-16px-indigo-px10-py20-mx10-my-10">Default</button>
            <button class="component-button-none-solid-purpleheart-roboto-16px-white-px10-py20-mx10-my-10">Click/Hover</button>
            <button class="component-button-none-solid-dimgray-roboto-16px-white-px10-py20-mx10-my-10">Disabled</button>
            <button class="component-button-none-solid-indigo-roboto-16px-dimgray-px10-py20-mx10-my-10 d-flex flex-row"><i class="isax isax-add icon-size-weight"></i><p>Default</p> </button>
            <button class="component-button-none-solid-purpleheart-roboto-16px-white-px10-py20-mx10-my-10 d-flex flex-row"><i class="isax isax-add icon-size-weight"></i><p>Click/Hover</p> </button>
            <button class="component-button-none-solid-dimgray-roboto-16px-white-px10-py20-mx10-my-10 d-flex flex-row"><i class="isax isax-add icon-size-weight"></i><p>Disabled</p> </button>
        </div>
        <!-- row2  -->
        <!-- row3 -->
        <div class="d-flex flex-row">
            <button class="component-button-none-none-none-roboto-16px-indigo-px10-py20-mx10-my-10">Default</button>
                <button class="component-button-none-none-none-roboto-16px-purpleheart-px10-py20-mx10-my-10">Click/Hover</button>
                <button class="component-button-none-none-dimgray-roboto-16px-dimgray-px10-py20-mx10-my-10">Disabled</button>
        </div>
        <!-- row3  -->

        Badge(Assessment)
        <div class="d-flex flex-row">
            <div class="components-badges-pill-bgdimgray-fsgotham-fcwhite-fs13px-lineh-textaligncenter-mx10-my10-px2-py2">Unassigned</div>
                <div class="components-badges-pill-bgindigo-fsgotham-fcwhite-fs13px-lineh-textaligncenter-mx10-my10-px2-py2">In Progress</div>
                <div class="components-badges-pill-bgfrenchskyblue-fsgotham-fcwhite-fs13px-lineh-textaligncenter-mx10-my10-px2-py2">Pre-Approved</div>
                <div class="components-badges-pill-bgvalencia-fsgotham-fcwhite-fs13px-lineh-textaligncenter-mx10-my10-px2-py2">Denied</div>
                <div class="components-badges-pill-bgeucalyptus-fsgotham-fcwhite-fs13px-lineh-textaligncenter-mx10-my10-px2-py2">Approved</div>
             </div>
        <!-- Admin -->
    </div>
</template>