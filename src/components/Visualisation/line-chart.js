import { Line } from 'vue-chartjs'

export default{
    extends:Line,
    data(){
      return{

      }
    },
    props:['blockData'],
    mounted() {
      this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
      this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
      this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
      this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

      this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
      this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
      this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
      this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');

      var self = this;

      var dataset = [];

      this.blockData.filter(function(item){
        dataset.push({
          label: item.title,
          borderColor: self.blockData.indexOf(item) % 2 === 0 ? 'rgba(255, 0,0, 0.5)' :'rgba(0, 231, 255, 0.9)',
          pointBackgroundColor: 'white',
          borderWidth:1,
          pointBorderColor:'white',
          backgroundColor: self.blockData.indexOf(item) % 2 === 0 ? self.gradient : self.gradient2,
          data: self.getNumbers(item)
        })
      })

      this.renderChart({
        labels: this.getLabels(this.blockData),
        datasets: dataset
      }, { responsive: true, maintainAspectRatio: false })
  },
  methods:{
    getNumbers(data){
      var numbers = [];
          data.number.filter(function(i){
            numbers.push(i.title)
          })
         
      return numbers;
    },
    getLabels(data){
      var labels = [];

      for(var i = 1; i <= data[0].number.length; i++){
        labels.push(i);
      }

      return labels;
    }
  }
}