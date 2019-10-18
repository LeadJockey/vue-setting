<template>
  <div>
    <ul>
      <li v-for="item of currentList" :key="item.id">
        <button>page up</button>
        <button @click="moveItemTo(item.order)">up</button>
        {{item.order}}
        <button>dwon</button>
        <button>page dwon</button>
        <b>{{item.title}}</b>
      </li>
    </ul>
    <div>
      <button @click="moveTo(currentPageIdx-1)">PREV</button>
      <button
        v-for="({pageId, pageNum, pageIdx}) of currentPageList"
        :class="{on:pageIdx === currentPageIdx}"
        :key="pageIdx"
        @click="moveTo(pageIdx)"
      >{{pageNum}}</button>
      <button @click="moveTo(currentPageIdx+1)">NEXT</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPageIdx: 0,
      pagerChunkSize: 5,
      totalList: this.createdataList(100)
    }
  },
  computed: {
    dataList() {
      return this.chunk(this.totalList, 6)
    },
    currentList() {
      return this.dataList[this.currentPageIdx]
    },
    pageList() {
      return this.dataList.map(({ id }, idx) => ({ pageId: `pageIdx:${id}`, pageNum: idx + 1, pageIdx: idx }))
    },
    chunkedPageList() {
      return this.chunk(this.pageList, this.pagerChunkSize)
    },
    currentPageList() {
      const currentChunkedPageIdx = Math.floor(this.currentPageIdx / this.pagerChunkSize)
      return this.chunkedPageList[currentChunkedPageIdx]
    }
  },
  methods: {
    createdataList(count) {
      let dataList = []
      let idx = 0
      while (idx < count) {
        dataList.push({
          id: idx,
          title: `title _ ${idx}`,
          order: idx
        })
        idx++
      }
      return dataList
    },
    chunk(list, chunkSize) {
      return list.reduce((chunks, item, idx) => (idx % chunkSize ? chunks[chunks.length - 1].push(item) : chunks.push([item])) && chunks, [])
    },
    moveTo(idx) {
      this.currentPageIdx = idx
    },
    moveItemTo(order) {
      if(order === 0) return 
      const prevList = this.totalList.slice(0, order)
      const currList = this.totalList.slice(order, order + 1)
      const nextList = this.totalList.slice(order + 1)
      const target = prevList.pop()
      nextList.unshift(target)

      console.log('prevList', prevList)
      console.log('currList', currList)
      console.log('nextList', nextList)

      this.totalList = [...prevList, ...currList, ...nextList].map((item, idx) => ({ ...item, order: idx }))
      console.log(this.totalList)
    }
  }
}
</script>

<style scoped>
.on {
  color: red;
}
</style>