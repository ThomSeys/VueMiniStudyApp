<template>
  <div class="col-12">
    <div class="dashboard-block">
      <line-chart :block-data="data"></line-chart>
    </div>
  </div>
</template>

<script>
  import userSection from "./user-section.vue"
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { faCoffee } from '@fortawesome/fontawesome-free-solid'  
  import lineChart from './Visualisation/line-chart.js'

  export default {
    props:['data'],
    components:{FontAwesomeIcon, lineChart}
  }
</script>

<style lang="less">
  .dashboard-block{
    background-color:#101421;
    border-radius:3px;
    padding: 1rem;
    margin-bottom:30px;

    h2{
      font-size:1.25rem;
      color:#ffffff;
      text-align:left;
      font-weight:bold;
    }

    h3{
      font-size:1rem;
      color:#ffffff;
      font-weight:normal;
      text-align:left;

      .fa-user{
        font-size: 0.75rem;
        margin-right:0.5rem;
        color:#29ffc6;
      }
    }
  }
  
  .Chart {
    border-radius: 15px;
    box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
    margin:  25px 0;
  }

  .Chart h2 {
    margin-top: 0;
    padding: 15px 0;
    color:  rgba(255, 0,0, 0.5);
    border-bottom: 1px solid #323d54;
  }
</style>
