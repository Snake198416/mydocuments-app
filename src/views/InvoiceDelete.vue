<template>
    <div class="invoice__delete__block">
        <h1 class="invoice__delete__title">Удалить договор?</h1>
        <br>
        <div class="invoice__delete__buttons">
            <button v-on:click="submitDeleteClicked"  type="button" class="btn btn-danger btn-lg">Подтвердить</button>
            <br>
            <button v-on:click="$emit('invoice-form-canceled')" type="button" class="btn btn-success btn-lg">Отменить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InvoiceDelete",
        props:['id'],
        data: function () {
            return {
                date: null,
                sum: null,
                status: null
            }
        },
        methods: {
            submitDeleteClicked: function () {
                this.$emit('invoice-form-delete', {id: this.id, date: this.date, sum: this.sum, status: this.status})
            },
        }
    }
</script>

<style scoped>

    .invoice__delete__title {
        text-align: center;
    }

    .invoice__delete__block {
        border: 3px solid red;
        background: #ffd405;
        border-radius: 14px;
    }

    .btn {
        margin-bottom: 10px;
    }
    .invoice__delete__buttons {
        text-align: center;
    }

</style>