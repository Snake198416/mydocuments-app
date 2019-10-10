import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        contracts: [
            {id: 1, number: '134', date: '01.01.1900', type_id: 1, amount: 2000},
            {id: 2, number: '154', date: '02.01.1900', type_id: 2, amount: 3000},
            {id: 3, number: '250', date: '03.01.1900', type_id: 3, amount: 4000}
        ],
        invoices: [
            {id: 1, date: '01.01.1900', sum: 2000, status_id: 1, contract_id: 1},
            {id: 2, date: '02.01.1900', sum: 3000, status_id: 1, contract_id: 2},
            {id: 3, date: '03.01.1900', sum: 4000, status_id: 2, contract_id: 3}
        ],
        acts: [
            {id: 1, date: '01.01.1900', sum: 2000, condition_id: 1, contract_id: 1},
            {id: 2, date: '02.01.1900', sum: 3000, condition_id: 2, contract_id: 2},
            {id: 3, date: '03.01.1900', sum: 4000, condition_id: 2, contract_id: 3}
        ],
        types: [
            {id: 1, name: 'licence', full_name: 'Лицензия'},
            {id: 2, name: 'service', full_name: 'Сервис'},
            {id: 3, name: 'subcontracting', full_name: 'Субконтракт'}
        ],
        statuses: [
            {id: 1, name: 'paid', full_name: 'Оплачен'},
            {id: 2, name: 'not_paid', full_name: 'Не оплачен'}
        ],
        conditions: [
            {id: 1, name: 'signed', full_name: 'Подписан'},
            {id: 2, name: 'not_signed', full_name: 'Не подписан'}
        ]
    },
    getters: {
        contractInvoices: state => contract_id => {
            return state.invoices.filter(c => c.contract_id == contract_id)
        },
        contractInvoicesPayed: state => contract_id => {
          return state.invoices.filter(c => c.contract_id == contract_id && c.status_id === 1)
        },
        payedAmount: (state,getters) => contract_id => {
            var result = 0;
            getters.contractInvoicesPayed(contract_id).forEach(el => result += el.sum);
            return result
        },
        unpaidContracts: (state, getters) => contract_id =>{
            return state.contracts.filter(c => c.amount > getters.payedAmount(c.id))
        },
        contractPayedStatus: (state, getters) => contract_id =>{
            // console.log(contract_id, getters.payedAmount(contract_id), getters.contract(contract_id).amount);
            if (getters.payedAmount(contract_id) === getters.contract(contract_id).amount) {
                return 'Оплачен'
            } else if (getters.payedAmount(contract_id) > getters.contract(contract_id).amount) {
                return 'Счет больше дог.!'
            } else if (getters.payedAmount(contract_id) < getters.contract(contract_id).amount && getters.payedAmount(contract_id) !== 0) {
                return 'Дог. опл. част.'
            }
            else {
                return 'Не оплачен'
            }
        },
        contractStatus: (state, getters) => contract_id =>{
            if (getters.payedAmount(contract_id) == getters.contract(contract_id).amount) {
                return 'Договор закрыт'
            } else {
                return 'Договор не закрыт'
            }
        },
        contract: state => id => {
            return state.contracts.find(c => c.id == id)
        },
        invoice: state => id => {
            return state.invoices.find(c => c.id === parseInt(id))
        },
        act: state => id => {
            return state.acts.find(c => c.id === parseInt(id))
        }
    },
    mutations: {
        deleteContract: function (state, contract) {
            var index = state.contracts.findIndex(el => el.id === contract.id);
            if (index >= 0) {
                state.contracts.splice(index, 1);
            }
        },
        createContract: function (state, contract) {
            var maxId = Math.max.apply(Math, state.contracts.map(c => c.id));
            contract.id = maxId + 1;
            state.contracts.push(contract)
        },
        updateContract: function (state, contract) {
            var index = state.contracts.findIndex(function (el) {
                return el.id === contract.id
            });
            if (index >= 0) {
                state.contracts.splice(index, 1, contract);
            }
        },
        deleteInvoice: function (state, invoice) {
            var index = state.invoices.findIndex(el => el.id === invoice.id);
            if (index >= 0) {
                state.invoices.splice(index, 1);
            }
        },
        createInvoice: function (state, invoice) {
            var maxId = Math.max.apply(Math, state.invoices.map(c => c.id));
            invoice.id = maxId + 1;
            state.invoices.push(invoice)
        },
        updateInvoice: function (state, invoice) {
            var index = state.invoices.findIndex(function (el) {
                return el.id === invoice.id
            });
            if (index >= 0) {
                state.invoices.splice(index, 1, invoice);
            }
        },
        deleteAct: function (state, act) {
            var index = state.acts.findIndex(el => el.id === act.id);
            if (index >= 0) {
                state.acts.splice(index, 1);
            }
        },
        createAct: function (state, act) {
            var maxId = Math.max.apply(Math, state.acts.map(c => c.id));
            act.id = maxId + 1;
            state.acts.push(act)
        },
        updateAct: function (state, act) {
            var index = state.acts.findIndex(function (el) {
                return el.id === act.id
            });
            if (index >= 0) {
                state.acts.splice(index, 1, act);
            }
        }
    },
    actions: {}
})
