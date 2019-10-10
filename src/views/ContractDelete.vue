<template>
    <div class="contract__delete__block">
        <h1 class="contract__delete__title">Удалить договор?</h1>
        <br>
        <div class="contract__delete__buttons">
            <button v-on:click="submitDeleteClicked"  type="button" class="btn btn-danger btn-lg">Подтвердить</button>
            <br>
            <button v-on:click="$emit('contract-form-canceled')" type="button" class="btn btn-success btn-lg">Отменить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContractDelete",
        props:['id'],
        data: function () {
            return {
                number: null,
                date: null,
                type: null,
                price: null,
            }
        },
        methods: {
            submitDeleteClicked: function () {
                this.$emit('contract-form-delete', {id: this.id, number: this.number, date: this.date, type: this.type, price: this.price})
            },
        }
    }
</script>

<style scoped>

    .contract__delete__title {
        text-align: center;
    }

    .contract__delete__block {
        border: 3px solid red;
        background: #ffd405;
        border-radius: 14px;
    }

    .btn {
        margin-bottom: 10px;
    }
    .contract__delete__buttons {
        text-align: center;
    }

</style>