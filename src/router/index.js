import { createRouter, createWebHistory } from 'vue-router'

import Welcome from '../views/Welcome.vue'
import Typography from '../components/Style Guides/Typography.vue';
import StyleComponent from '../components/Style Guides/StyleComponent.vue';
import Iconography from '../components/Style Guides/Iconography.vue';
import InputBox from '../components/Style Guides/InputBoxes.vue';
import Tables from '../components/Style Guides/Tables.vue';
import Modal from '../components/Style Guides/Modal.vue';
import AccountManager from '../components/Account Manager/AccountManager.vue';
import AddAccount from'../components/Account Manager/AddAccount.vue';
import LicenseManager from '../components/License Manager/LicenseManager.vue';
import AddAccountClientDetails from'../components/Account Manager/AddAccountClientDetails.vue';
import LicensekeyIssue from '../components/Account Manager/Licensekey-Issue.vue';



import DomainManager from '../components/Domain Manager/DomainManager.vue';
import SoftwareLicenseManagement from '../components/License Manager/SoftwareLicenseManagement.vue';
import LicenseKeyAssigned from '../components/License Manager/LicenseManagerAssigned.vue';
import DomainManagerViewRecord from '../components/Domain Manager/DomainManagerViewRecord.vue';
import UpdateLicenseModal from '../components/License Manager/Modals/UpdateLicenseModal.vue';
import TransferLicenseModal from  '../components/License Manager/Modals/TransferLicenseModal.vue';
import SuspendLicense from '../components/License Manager/Modals/SuspendLicense.vue';
import AddLicenseDevelopStaticScreen from '../components/License Manager/AddLicenseDevelopStaticScreen.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    },
    {
      path: '/typography',
      name: 'typography',
      component: Typography
    },
    {
      path: '/components',
      name: 'components',
      component: StyleComponent
    },
    {
      path: '/iconography',
      name: 'iconography',
      component: Iconography
    }
    ,
    {
      path: '/inputbox',
      name: 'inputbox',
      component: InputBox
    },
    {
      path: '/table',
      name: 'table',
      component: Tables
    }
    ,
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
    {
      path: '/accmanager',
      name: 'accmanager',
      component: AccountManager
    },
    {
      path: '/licmanager',
      name: 'licmanager',
      component: LicenseManager
    },
    {
      path: '/licensekeyissue',
      name: 'licensekeyissue',
      component: LicensekeyIssue
    }
    ,
    {
      path: '/addaccount',
      name: 'addaccount',
      component: AddAccount
    }
    ,
    {
      path: '/addaccount-clientdetails',
      name: 'addaccount-clientdetails',
      component: AddAccountClientDetails
    }
    // sprint 3 
    ,
    {
      path: '/licensekey-assigned',
      name: 'licensekey-assigned',
      component: LicenseKeyAssigned
    }
    ,
    {
      path: '/domain-manager',
      name: 'domain-manager',
      component: DomainManager
    }
    ,
    {
      path: '/software-license-management',
      name: 'software-license-management',
      component: SoftwareLicenseManagement
    }
    ,
    {
      path: '/domain-manager-viewRecord',
      name: 'domain-manager-viewRecord',
      component: DomainManagerViewRecord
    }
    ,
    {
      path: '/update-license-modal',
      name: 'update-license-modal',
      component: UpdateLicenseModal
    }
    ,
    {
      path: '/transfer-license-modal',
      name: 'transfer-license-modal',
      component: TransferLicenseModal
    }
    
    ,
    {
      path: '/Suspend-License',
      name: 'Suspend-License',
      component: SuspendLicense
    }
    

        ,
    {
      path: '/add-license-develop-static-screen',
      name: 'add-license-develop-static-screen',
      component: AddLicenseDevelopStaticScreen
    }
    

    // sprint 3
    
  ]
})

export default router
