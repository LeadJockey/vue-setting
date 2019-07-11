<template>
  <div>
    <ul class="list_item">
      <li
        v-for="({i,v,c,x,y}, idx) in formatData"
        :key="idx+Math.random()"
        @click.prevent="onClick(x,y)"
      >
        <div class="bg" :style="{'background-color':c}">{{i}}:{{v}}|(x:{{x}}y:{{y}})</div>
      </li>
    </ul>
  </div>
</template>

<script>
import mapData from '@/constants/matrixMap'
import { chunkIdx } from '@/utils/helper'

const CHUNK_COUNT = 10
const START_INDEX = 6
const END_INDEX = 36
const DEFAULT_BG = 'white'
const BLOCK_BG = 'gray'
const START_BG = 'red'
const END_BG = 'blue'

export default {
  data() {
    return {
      data: mapData.moveLayer,
      currentIdx: START_INDEX
    }
  },
  computed: {
    chunkedData() {
      return chunkIdx(this.data, CHUNK_COUNT)
    },
    formatData() {
      return this.data.map((v, i) => {
        let color = !!v ? DEFAULT_BG : BLOCK_BG
        if (i === START_INDEX) {
          color = START_BG
        }
        if (i === END_INDEX) {
          color = END_BG
        }
        return {
          i,
          v,
          x: i % CHUNK_COUNT,
          y: i === 0 ? 0 : Math.floor(i / CHUNK_COUNT),
          c: color
        }
      })
    }
  },
  mounted() {
    console.log(this.formatData)
  },
  methods: {
    onClick(x, y) {
      this.search(x, y)
    },
    search(x, y) {
      const n = this.chunkedData[y - 1] ? this.chunkedData[y - 1][x] : null
      const s = this.chunkedData[y + 1] ? this.chunkedData[y + 1][x] : null
      const w = this.chunkedData[y] ? this.chunkedData[y][x - 1] : null
      const e = this.chunkedData[y] ? this.chunkedData[y][x + 1] : null
      console.table({ n, s, w, e })
      const result = [n, s, w, e]
        .filter(item => !!item)
        .map(idx => {
          this.formatData[idx].c = 'gold'
        })
      console.table(result)
      return result
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
  line-height: 100px;
  text-align: center;
  border: 1px solid #efefef;
  box-sizing: border-box;
}
.list_item li .bg {
  width: 100%;
  height: 100%;
}
</style>
