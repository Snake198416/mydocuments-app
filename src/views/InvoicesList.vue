<template>
    <div>
        <div class="btn__add">
            <router-link :to="{name:'new-invoice'}">
                <button type="button" class="btn btn-success">Добавить</button>
            </router-link>
        </div>
    <table class="table  table-hover general-table">
        <thead>
        <tr>
            <th>#</th>
            <th>Дата</th>
            <th>Сумма</th>
            <th>Договор №</th>
            <th>Статус</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="invoice in $store.state.invoices">
            <td>{{invoice.id}}</td>
            <td>{{invoice.date}}</td>
            <td>{{invoice.sum}}</td>
            <td>{{invoiceContractNumber(invoice.contract_id)}}</td>
            <td>{{invoiceNameStatus(invoice.status_id)}}</td>
            <td></td>
            <td></td>
            <td>
                <router-link :to="{name:'edit-invoice', params:{id:invoice.id}}">
                    <button type="button" class="btn btn-default">Изменить</button>
                </router-link>

                <router-link :to="{name:'invoice-delete', params:{id:invoice.id}}">
                    <button type="button" class="btn btn-danger">Удалить</button>
                </router-link>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
    export default {
        name: "InvoicesList",
        methods: {
            invoiceNameStatus: function (status_id) {
                var status = this.$store.state.statuses.find(function (el) {
                    return el.id === status_id;
                });
                if (status) {
                    return status.full_name
                } else {
                    return 'Статус счета не указан!'
                }
            },
            invoiceContractNumber: function (contract_id) {
                var contract = this.$store.state.contracts.find(function (el) {
                    return el.id === contract_id;
                });
                if (contract) {
                    return contract.number
                } else {
                    return 'Договор не указан'
                }
            }
        }
    }
</script>

<style scoped>

    .btn {
        margin-right: 20px;
        margin-top: 10px;
    }
    .btn__add {
        text-align: right;
    }

</style>