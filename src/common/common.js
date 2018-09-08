// 倒计时

const leftTimer = () => {
  // 提交订单时间戳
  // let sbumitTime = 1472048779952
  // // 截止时间戳
  // let temp = sbumitTime + 10 * 24 * 60 * 60 * 1000
  // var leftTime = (new Date(temp)) - (new Date(sbumitTime))
  // console.log(leftTime)
  // let last = new Date(temp)
  // let year = last.getFullYear()
  // let month = last.getMonth() - 1
  // let day = last.getDate()
  // let hour = last.getHours()
  // let minute = last.getMinutes()
  // let second = last.getSeconds()
  // var leftTime = (new Date(year, month, day, hour, minute, second)) - (new Date()) // 计算剩余的毫秒数
  // var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10) // 计算剩余的天数
  // var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10) // 计算剩余的小时
  // var minutes = parseInt(leftTime / 1000 / 60 % 60, 10)// 计算剩余的分钟
  // var seconds = parseInt(leftTime / 1000 % 60, 10)// 计算剩余的秒数
  // hours = hours > 9 ? hours : '0' + hours
  // minutes = minutes > 9 ? minutes : '0' + minutes
  // let timeId = setInterval('leftTimer(2016,11,11,11,11,11)', 1000)
}

export default {
  leftTimer
}
