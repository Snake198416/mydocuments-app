import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contracts from './views/Contracts.vue'
import Invoices from './views/Invoices.vue'
import Acts from './views/Acts.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Home
    },
    {
      path: '/contracts',
      component: Contracts,
      children: [
        {
          path: '',
          name: 'contracts-list',
          component: () => import('./views/ContractsList.vue')
        },
        {
          path: ':id/edit',
          name: 'edit-contract',
          component: () => import('./views/ContractForm.vue'),
          props: true
        },
        {
          path: '/new/contract',
          name: 'new-contract',
          component: () => import('./views/ContractForm.vue')
        },
        {
          path: ':id/delete',
          name: 'contract-delete',
          component: () => import('./views/ContractDelete.vue'),
          props: true
        }
      ]
    },
    {
      path: '/acts',
      component: Acts,
      children: [
        {
          path: '',
          name: 'acts-list',
          component: () => import('./views/ActsList.vue')
        },
        {
          path: ':id/edit',
          name: 'edit-act',
          component: () => import('./views/ActForm.vue'),
          props: true
        },
        {
          path: '/new/act',
          name: 'new-act',
          component: () => import('./views/ActForm.vue')
        },
        {
          path: ':id/delete',
          name: 'act-delete',
          component: () => import('./views/ActDelete.vue'),
          props: true
        }
      ]
    },
    {
      path: '/invoices',
      component: Invoices,
      children: [
        {
          path: '',
          name: 'invoices-list',
          component: () => import('./views/InvoicesList.vue')
        },
        {
          path: ':id/edit',
          name: 'edit-invoice',
          component: () => import('./views/InvoiceForm.vue'),
          props: true
        },
        {
          path: '/new/invoice',
          name: 'new-invoice',
          component: () => import('./views/InvoiceForm.vue')
        },
        {
          path: ':id/delete',
          name: 'invoice-delete',
          component: () => import('./views/InvoiceDelete.vue'),
          props: true
        }
      ]
    },
  ]
})
