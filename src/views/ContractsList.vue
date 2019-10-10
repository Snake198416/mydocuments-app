<template>
<div>
    <div class="btn__add">
    <router-link :to="{name:'new-contract'}" >
        <button type="button" class="btn btn-success">Добавить</button>
    </router-link>
    </div>

    <table class="table  table-hover general-table">
        <thead>
        <tr>
            <th>#</th>
            <th>Номер</th>
            <th>Дата</th>
            <th>Тип</th>
            <th>Сумма</th>
            <th>Всего <br> счетов</th>
            <th>Оплачено <br> по договору</th>
            <th>Статус <br> оплаты</th>
            <th>Статус <br> договора</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="contract in $store.state.contracts">
            <td>{{contract.id}}</td>
            <td>{{contract.number}}</td>
            <td>{{contract.date}}</td>
            <td>{{contractNameStatus(contract.type_id)}}</td>
            <td>{{contract.amount}}</td>
            <td>{{$store.getters.contractInvoices(contract.id).length}}</td>
            <td>{{$store.getters.payedAmount(contract.id)}}</td>
            <td>{{$store.getters.contractPayedStatus(contract.id)}}</td>
            <td>{{$store.getters.contractStatus(contract.id)}}</td>
            <td>
                <router-link :to="{name:'edit-contract', params:{id:contract.id}}">
                    <button type="button" class="btn btn-default">Изменить</button>
                </router-link>

                <router-link :to="{name:'contract-delete', params:{id:contract.id}}">
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
        name: 'ContractsList',
        methods: {
            contractNameStatus: function (type_id) {
                var type = this.$store.state.types.find(function (el) {
                    return el.id === type_id;
                });
                if (type) {
                    return type.full_name
                } else {
                    return 'Тип договора не определен!'
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