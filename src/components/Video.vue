<template>
    <div id="myVideo" :style="{width: '800px', height: '600px'}">
    </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myVideo = this.$echarts.init(document.getElementById('myVideo'))
      // 绘制图表
      myVideo.setOption({
        title: { text: '在Video中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style>

</style>
