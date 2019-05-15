import axios from 'axios'
import { AXIOS_INSTANT_CONFIG } from '@/constants'

const instance = axios.create(AXIOS_INSTANT_CONFIG)

const createRequest = (config, onSuccess, onError) => {
  instance({ ...config })
    .then(res => successHandler(res, onSuccess))
    .catch(err => errorHandelr(err, onError))
}

const successHandler = (res, onSuccess) => {
  const { status, data } = res
  status === 200 && onSuccess(data)
}

const errorHandelr = (err, onError) => {
  const { status } = err.response
  onError ? onError(err) : console.log('error', `error : status ${status}`)
}

export { createRequest }
