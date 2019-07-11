export const chunk = (list, chunkSize) =>
  list.reduce((chunks, item, idx) => (idx % chunkSize ? chunks[chunks.length - 1].push(item) : chunks.push([item])) && chunks, [])

export const chunkIdx = (list, chunkSize) =>
  list.reduce((chunks, item, idx) => (idx % chunkSize ? chunks[chunks.length - 1].push(idx) : chunks.push([idx])) && chunks, [])
