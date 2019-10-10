<template>
    <div>
    <div class="btn__add">
        <router-link :to="{name:'new-act'}">
            <button type="button" class="btn btn-success">Добавить</button>
        </router-link>
    </div>
    <table class="table  table-hover general-table">
        <thead>
        <tr>
            <th>#</th>
            <th>Дата</th>
            <th>Сумма</th>
            <th>Статус</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="act in $store.state.acts">
            <td>{{act.id}}</td>
            <td>{{act.date}}</td>
            <td>{{act.sum}}</td>
            <td>{{actNameStatus(act.condition_id)}}</td>
            <td></td>
            <td></td>
            <td>
                <router-link :to="{name:'edit-act', params:{id:act.id}}">
                    <button type="button" class="btn btn-default">Изменить</button>
                </router-link>

                <router-link :to="{name:'act-delete', params:{id:act.id}}">
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
        name: "ActsList",
        methods: {
            actNameStatus: function (condition_id) {
                var condition = this.$store.state.conditions.find(function (el) {
                    return el.id === condition_id;
                });
                if (condition) {
                    return condition.full_name
                } else {
                    return 'Состояние акта не указано!'
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