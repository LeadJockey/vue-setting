import { createRequest } from '@/api'

export const getCountData = ({ onSuccess, onError }) => {
  createRequest({ method: 'get', url: '/v2/5cdbcbcb2d00003b12f5a305' }, onSuccess, onError)
}
