<template>
    <div>
        <label>Номер договора</label>
        <input class="form-control" placeholder="" type="text" v-model="number">
        <br>
        <label>Дата договора</label>
        <input class="form-control" type="text" v-model="date">
        <br>
        <label>Тип договора</label>
        <select class="form-control mb-10" v-model="type_id" type="text">
            <option v-for="type in $store.state.types" v-bind:value="type.id">{{type.name}}</option>
        </select>
        <br>
        <label>Сумма договора</label>
        <input class="form-control" placeholder="" type="number" v-model="amount">
        <br>
        <button v-on:click="submitFormContractClicked"  type="button" class="btn btn-default">Сохранить</button>
        <button v-on:click="$emit('contract-form-canceled')" type="button" class="btn btn-primary">Отменить</button>
    </div>
</template>

<script>
    export default {
        name: "ContractsForm",
        props: ['id'],
        data: function () {
            return {
                number: null,
                date: null,
                type_id: null,
                amount: null,
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
            submitFormContractClicked: function () {
                this.$emit('contract-form-submited', {id: this.id, number: this.number, date: this.date, type_id: this.type_id, amount: this.amount})
            },
            fillForm: function () {
                var contract = this.$store.getters.contract(this.id);
                if (contract) {
                    this.number = contract.number;
                    this.date = contract.date;
                    this.type_id = contract.type_id;
                    this.amount = contract.amount;
                }
            }
        }
    }
</script>

<style scoped>

    .btn{
        margin-right: 20px;
    }

</style>