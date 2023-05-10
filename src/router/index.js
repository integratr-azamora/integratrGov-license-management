import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Welcome from '../views/Welcome.vue'
import Typography from '../components/Typography.vue';
import StyleComponent from '../components/StyleComponent.vue';
import Iconography from '../components/Iconography.vue';
import InputBox from '../components/InputBoxes.vue'
import Tables from '../components/Tables.vue'
import Modal from '../components/Modal.vue';

import AccountManager from '../components/AccountManager.vue';
import LicenseManager from '../components/LicenseManger.vue';
import LicensekeyIssue from '../components/Licensekey-Issue.vue';

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
    
  ]
})

export default router
