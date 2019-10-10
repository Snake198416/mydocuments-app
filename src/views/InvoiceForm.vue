<template>
    <div>
        <label>Дата счета</label>
        <input class="form-control" v-model="date">
        <br>
        <label>Сумма счета</label>
        <input class="form-control"  v-model="sum" type="number">
        <br>
        <label>Статус счета</label>
        <select class="form-control mb-10" v-model="status_id" type="text">
            <option v-for="status in $store.state.statuses" v-bind:value="status.id">{{status.name}}</option>
        </select>
        <label class="select__contract">Выберите договор</label>
        <select class="form-control mb-10" type="text" v-model="contract_id">
            <option v-for="contract in $store.state.contracts" v-bind:value="contract.id">{{`Договор № ${contract.number} от ${contract.date}`}}</option>
        </select>
        <br>
        <button v-on:click="submitFormInvoiceClicked"  type="button" class="btn btn-default">Сохранить</button>
        <button v-on:click="$emit('invoice-form-canceled')" type="button" class="btn btn-primary">Отменить</button>
    </div>
</template>

<script>
    export default {
        name: "InvoiceForm",
        props: ['id'],
        data: function () {
            return {
                date: null,
                sum: null,
                status_id: null,
                contract_id: null
            }
        },
        created: function () {
            this.fillForm()
        },
        watch: {
            id: function () {
                this.fillForm()
            }
        },
        methods: {
            submitFormInvoiceClicked: function () {
                this.$emit('invoice-form-submited', {id: this.id, date: this.date, sum: this.sum, status_id: this.status_id, contract_id: this.contract_id})
            },
            fillForm: function () {
                var invoice = this.$store.getters.invoice(this.id);
                if (invoice) {
                    this.date = invoice.date;
                    this.sum = invoice.sum;
                    this.status_id = invoice.status_id;
                }
            }
        }
    }
</script>

<style scoped>

    .btn{
        margin-right: 20px;
    }
    .select__contract{
        font-weight: bold;
        margin-top: 10px;
    }

</style>