const moment = require('moment-timezone')

const getAwaitTime = (timezone) => {

  const WORKING_HOURS_WEEKDAY = '06:00:00'
  const WORKING_HOURS_WEEKEND = '09:00:00'
  const fullDate = moment('2021-02-27T23:32:16').tz(timezone)
  //const getFullDate = moment().tz('America/Mexico_City').locale('es')
  // const fullDate = moment().tz(timezone)
  console.log(moment())
  const nameDay = fullDate.format('dddd')
  const fullDateUTC = fullDate.utc()
  console.log("fullDateUTC: ",fullDateUTC)


  console.log("fullDate: ", fullDate)
  console.log("nameDay: ", nameDay)

  let newDay = fullDateUTC.add(1, 'days')
  console.log("newDay: ", newDay)
  const getDate = newDay.format('YYYY-MM-DD')
  console.log("getDate: ", getDate)
  let newDate

  if(nameDay == 'Friday' || nameDay == 'Saturday'){
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

  console.log(`${Math.ceil(hours)} hours`)
}



getAwaitTime('America/Bogota');