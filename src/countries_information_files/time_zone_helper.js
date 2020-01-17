export let getLocalTimes = (timezones)  => {
  const currentTime = new Date();
  const utcHours = currentTime.getUTCHours(),
  utcMins = currentTime.getUTCMinutes();
console.log(currentTime)
  return timezones.map((timezone) => {
    let localTZ = timezone;
    let timezoneInfo = formatTimezones(timezone);
    let localTime = calculateTime({utcHours, utcMins, ...timezoneInfo});
    return {localTZ, localTime}
  })
}



let formatTimezones = (timezone) => {
  const plusSign = '+'
  return {
    utcHourDiff: Number(timezone.slice(4,6)),
    utcMinDiff : Number(timezone.slice(7)),
    isAhead : timezone.slice(3,4) === plusSign
  }
}




let calculateTime = ({utcMins, utcHours, utcHourDiff, utcMinDiff, isAhead}) => {
  let totalMins = isAhead ? utcMins + utcMinDiff : utcMins - utcMinDiff;
  let totalHours = isAhead ? (utcHours + utcHourDiff) % 12 : utcHours - utcHourDiff;

  if (totalMins >= 60) {
    totalHours = (Math.floor(totalMins/60) + totalHours) % 12;
    totalMins = totalMins % 60;
  }

  if (totalMins < 0) {
    totalMins = 60 - Math.abs(totalMins);
    totalHours--;
  }

  if (totalHours < 0) {
    totalHours = Math.abs(totalHours + 12);
  }

  if (totalHours === 0) {
    totalHours += 12;
  }

  let formatHour = formatTime(totalHours);
  let formatMins = formatTime(totalMins);
  return `${formatHour}:${formatMins}`;

}

let formatTime = (time) => (
  time < 10 ? `0${time}` : time
)

// let calculateMins = (utcMins,utcMinDiff,isAhead) => {
//   let results = {
//     mins: utcMins,
//     hour: 0
//   }
//   let totalMins = isAhead ? utcMins + utcMinDiff : utcMins - utcMinDiff;
//   if (totalMins >= 60) {
//     results[hour] = (Math.floor(totalMins/60) + totalHours) % 12;
//     totalMins = totalMins % 60;
//   }
// }

// console.log(formatTimezones([
//   "UTC-12:00",
//   "UTC-11:00",
//   "UTC-10:00",
//   "UTC-09:00",
//   "UTC-08:00",
//   "UTC-07:00",
//   "UTC-06:00",
//   "UTC-05:00",
//   "UTC-04:00",
//   "UTC+10:00",
//   "UTC+12:00"
//   ]))

  console.log(
    getLocalTimes([
  // "UTC-12:00",
  // "UTC-12:15",
  // "UTC-12:30",
  // "UTC-12:45",
  // "UTC-12:55",
  // "UTC-11:00",
  // "UTC-11:15",
  // "UTC-11:30",
  // "UTC-11:45",
  // "UTC-10:00",
  // "UTC-10:15",
  // "UTC-10:30",
  // "UTC-10:45",
  // "UTC-09:00",
  // "UTC-09:15",
  // "UTC-09:30",
  // "UTC-09:45",
  // "UTC-08:00",
  // "UTC-08:15",
  // "UTC-08:30",
  // "UTC-08:45",
  // "UTC-07:00",
  // "UTC-07:15",
  // "UTC-07:30",
  // "UTC-07:45",
  // "UTC-06:00",
  // "UTC-06:15",
  // "UTC-06:30",
  // "UTC-06:45",
  // "UTC-05:00",
  // "UTC-05:15",
  // "UTC-05:30",
  // "UTC-05:45",
  // "UTC-04:00",
  // "UTC-04:15",
  // "UTC-04:30",
  // "UTC-04:45",
  // "UTC-03:00",
  // "UTC-03:15",
  // "UTC-03:30",
  // "UTC-03:45",
  // "UTC-02:00",
  // "UTC-02:15",
  // "UTC-02:30",
  // "UTC-02:45",
  // "UTC-01:00",
  // "UTC-01:15",
  // "UTC-01:30",
  // "UTC-01:45",
  // 'UTC',
  // "UTC+01:00",
  // "UTC+01:15",
  // "UTC+01:30",
  // "UTC+01:45",
  // "UTC+02:00",
  // "UTC+02:15",
  // "UTC+02:30",
  // "UTC+02:45",
  // "UTC+03:00",
  // "UTC+03:15",
  // "UTC+03:30",
  // "UTC+03:45",
  // "UTC+04:00",
  // "UTC+04:15",
  // "UTC+04:30",
  // "UTC+04:45",
  // "UTC+05:00",
  // "UTC+05:15",
  // "UTC+05:30",
  // "UTC+05:45",
  // "UTC+06:00",
  // "UTC+06:15",
  // "UTC+06:30",
  // "UTC+06:45",
  // "UTC+07:00",
  // "UTC+07:15",
  // "UTC+07:30",
  // "UTC+07:45",
  // "UTC+08:00",
  // "UTC+08:15",
  // "UTC+08:30",
  // "UTC+08:45",
  // "UTC+09:00",
  // "UTC+09:15",
  // "UTC+09:30",
  // "UTC+09:45",
  "UTC+10:00",
  // "UTC+10:15",
  // "UTC+10:30",
  // "UTC+10:45",
  // "UTC+11:00",
  // "UTC+11:15",
  "UTC+11:30",
  // "UTC+11:45",
  // "UTC+12:00",
  // "UTC+12:15",
  // "UTC+12:30",
  // "UTC+12:45",
  // "UTC+13",
    ])
  )


// node time_test.js
