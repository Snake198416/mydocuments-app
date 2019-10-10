<template>
  <div class="home">
    <DonutChart/>
    <h2>Количество и процент неоплаченных договоров: {{$store.getters.unpaidContracts().length}} = {{(($store.getters.unpaidContracts().length/$store.state.contracts.length)*100).toFixed()}}%</h2>
    <h2>Количество полностью оплаченных договоров: {{$store.state.contracts.length - $store.getters.unpaidContracts().length}} - ( {{((($store.state.contracts.length - $store.getters.unpaidContracts().length)/$store.state.contracts.length)*100).toFixed()}}% )</h2>
    <h2>Всего договоров в системе: {{$store.state.contracts.length}}</h2>
  </div>
</template>

<script>

import DonutChart from "./DonutChart";

export default {
  name: 'Home',
  components: {DonutChart},
}
</script>
