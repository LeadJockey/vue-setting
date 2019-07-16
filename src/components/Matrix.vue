<template>
  <div>
    <ul class="list_item">
      <li
        v-for="({x,y,index,color,order}) in renderData"
        :key="index+Math.random()"
        @click.prevent="onClick(index)"
      >
        <div class="bg" :style="`background-color:${color}`">{{x}}:{{y}}/{{index}}</div>
        <div class="bg" :style="`color:red;background-color:${color}`">{{order}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import mapData from '@/constants/matrixMap'
import { setInterval, clearInterval } from 'timers'
export default {
  data() {
    return {
      cnt: 1,
      rowCnt: 10,
      data: mapData.moveLayer,
      renderData: [],
      openList: [],
      closeList: []
    }
  },
  computed: {},
  mounted() {
    this.getRenderData()
    this.search(6)
  },
  methods: {
    onClick(index) {},
    getRenderData() {
      this.renderData = this.data.map((m, i) => {
        const x = i % this.rowCnt
        const y = Math.floor((i + 1) / this.rowCnt)
        return {
          x: x,
          y: y,
          index: i,
          value: m,
          color: m ? 'white' : 'gray',
          order: 0
        }
      })
    },
    getDirections(index, cnt) {
      const n = this.renderData[index - this.rowCnt]
      const s = this.renderData[index + this.rowCnt]
      const w = this.renderData[index - 1]
      const e = this.renderData[index + 1]
      return [n, s, w, e].filter(direction => !!direction && !!direction.value)
    },
    search(startIndex) {
      let list = this.getDirections(startIndex)
      this.renderData[startIndex].order = this.cnt++
      list.forEach(({ index }) => {
        if (this.renderData[index].order !== 0) return
        this.search(index)
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
.list_item {
  overflow: hidden;
  width: 1000px;
  height: 1000px;
}
.list_item li {
  float: left;
  width: 100px;
  height: 100px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #efefef;
  box-sizing: border-box;
}
.list_item li .bg {
  width: 100%;
  height: 50%;
}
</style>
