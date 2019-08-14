import request from '@/utils/request'

export function addTask (name, dateLimit, corn, URL) {
  return request({
    url: '/hello',
    method: 'post',
    data: {
      name: name,
      dateLimit: dateLimit,
      corn: corn,
      url: URL
    }
  })
}
