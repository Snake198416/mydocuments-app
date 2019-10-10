<template>
    <div class="act__delete__block">
        <h1 class="act__delete__title">Удалить договор?</h1>
        <br>
        <div class="act__delete__buttons">
            <button v-on:click="submitDeleteClicked"  type="button" class="btn btn-danger btn-lg">Подтвердить</button>
            <br>
            <button v-on:click="$emit('act-form-canceled')" type="button" class="btn btn-success btn-lg">Отменить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ActDelete",
        props:['id'],
        data: function () {
            return {
                date: null,
                sum: null,
                condition: null
            }
        },
        methods: {
            submitDeleteClicked: function () {
                this.$emit('act-form-delete', {id: this.id, date: this.date, sum: this.sum, condition: this.condition})
            },
        }
    }
</script>

<style scoped>

    .act__delete__title {
        text-align: center;
    }

    .act__delete__block {
        border: 3px solid red;
        background: #ffd405;
        border-radius: 14px;
    }

    .btn {
        margin-bottom: 10px;
    }
    .act__delete__buttons {
        text-align: center;
    }

</style>