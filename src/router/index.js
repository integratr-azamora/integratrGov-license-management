import { createRouter, createWebHistory } from 'vue-router'

import Welcome from '../views/Welcome.vue'
import Typography from '../components/Typography.vue';
import StyleComponent from '../components/StyleComponent.vue';
import Iconography from '../components/Iconography.vue';
import InputBox from '../components/InputBoxes.vue'
import Tables from '../components/Tables.vue'
import Modal from '../components/Modal.vue';
import AddAccount from'../components/AddAccount.vue'
import AddAccountClientDetails from'../components/AddAccountClientDetails.vue'
import AccountManager from '../components/AccountManager.vue';
import LicenseManager from '../components/LicenseManger.vue';
import LicensekeyIssue from '../components/Licensekey-Issue.vue';
import DomainManager from '../components/Sprint3/DomainManager.vue';
import SoftwareLicenseManagement from '../components/Sprint3/SoftwareLicenseManagement.vue';
import LicenseKeyAssigned from '../components/Sprint3/LicenseManagerAssigned.vue';
import DomainManagerViewRecord from '../components/Sprint3/DomainManagerViewRecord.vue';
import UpdateLicenseModal from '../components/Sprint3/UpdateLicenseModal.vue';
import TransferLicenseModal from  '../components/Sprint3/TransferLicenseModal.vue';
import SuspendLicense from '../components/Sprint3/SuspendLicense.vue';
import AddLicenseDevelopStaticScreen from '../components/Sprint3/AddLicenseDevelopStaticScreen.vue';
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
      path: '/transfer-licenseodal',
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
