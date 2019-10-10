<template>
    <vc-donut
            background="white" foreground="grey"
            :size="200" unit="px" :thickness="30"
            has-legend legend-placement="top"
            :sections="sections" :total="100"
            :start-angle="0"
            @section-click="handleSectionClick"
    >
        <h1></h1>
    </vc-donut>
</template>
<script>
    export default {
        computed: {
            sections: function () {
                return [
                    { label: 'Неоплаченные договора', value: (this.$store.getters.unpaidContracts().length/this.$store.state.contracts.length) * 100, color: 'red' },
                    { label: 'Оплаченные договора', value: (100-(this.$store.getters.unpaidContracts().length/this.$store.state.contracts.length) * 100), color: 'green' }
                ]
            }
        },
        methods: {
            handleSectionClick(section) {
            }
        }
    };
</script>

<style scoped>

</style>