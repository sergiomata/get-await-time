const moment = require('moment-timezone')

const getAwaitTime = (timezone, defaultValue) => {

  const WORKING_HOURS_WEEKDAY = '06:00:00'
  const WORKING_HOURS_WEEKEND = '09:00:00'
  //const fullDate = moment('2021-02-27T23:32:16').tz(timezone)
  //const getFullDate = moment().tz('America/Mexico_City').locale('es')
  const fullDate = moment('2021-02-26T09:19:22-06:00').tz(timezone)
  //const fullDate = moment('2021-02-23T19:19:22-06:00').tz(timezone)
  const fullDateUTC = fullDate.utc()
  const getHours = fullDateUTC.format('HH')
  const nameDay = fullDateUTC.format('dddd')
  console.log("moment: ",moment())
  console.log("fullDate: ",fullDate)
  console.log("fullDateUTC: ",fullDateUTC)
  console.log("nameDay: ", nameDay)
  console.log('getHours: ',getHours)

  if ((getHours >= 4 && getHours < 12 ) && (nameDay !== 'Saturday' && nameDay !== 'Sunday')||
      (getHours >= 4 && getHours < 14 ) && (nameDay === 'Saturday' || nameDay === 'Sunday')
      ){
    let newDay = fullDateUTC.add(1, 'days')
    console.log("newDay: ", newDay)
    const getDate = newDay.format('YYYY-MM-DD')
    console.log("getDate: ", getDate)
    let newDate

    if(nameDay === 'Saturday' || nameDay === 'Sunday'){
      newDate = moment(`${getDate}T${WORKING_HOURS_WEEKEND}`)
    }else {
      console.log(`${getDate}T${WORKING_HOURS_WEEKDAY}`)
      newDate = moment(`${getDate}T${WORKING_HOURS_WEEKDAY}`)
    }

    console.log("newDate: ", newDate)
    let differenceTime = newDate.diff(fullDateUTC)
    console.log("differenceTime: ", differenceTime)
    let duration = moment.duration(differenceTime)
    let hours = duration.asHours()

    waitTime = `${Math.ceil(hours)} hours`
    console.log(waitTime)
    return waitTime
  }
  else {
    return defaultValue
  }

}

console.log(getAwaitTime('America/Mexico_City','30 seconds'));