<template>
    <div>
        <label>Дата акта</label>
        <input class="form-control" placeholder="" type="text" v-model="date">
        <br>
        <label>Сумма акта</label>
        <input class="form-control"  v-model="sum" type="number">
        <br>
        <label>Состояние акта</label>
        <select class="form-control mb-10" v-model="condition_id" type="text">
            <option v-for="condition in $store.state.conditions" v-bind:value="condition.id">{{condition.name}}</option>
        </select>
        <br>
        <button v-on:click="submitFormActClicked"  type="button" class="btn btn-default">Сохранить</button>
        <button v-on:click="$emit('act-form-canceled')" type="button" class="btn btn-primary">Отменить</button>
    </div>
</template>

<script>
    export default {
        name: "ActForm",
        props: ['id'],
        data: function () {
            return {
                date: null,
                sum: null,
                condition_id: null,
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
            submitFormActClicked: function () {
                this.$emit('act-form-submited', {id: this.id, date: this.date, sum: this.sum, condition_id: this.condition_id})
            },
            fillForm: function () {
                var act = this.$store.getters.act(this.id);
                if (act) {
                    this.date = act.date;
                    this.sum = act.sum;
                    this.condition_id = act.condition_id;
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