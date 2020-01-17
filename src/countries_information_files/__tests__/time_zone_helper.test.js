import {formatTimezones, calculateTime} from './../time_zone_helper'

const allTimezones = [
"UTC-12:00",
"UTC-11:00",
"UTC-10:00",
"UTC-09:00",
"UTC-08:00",
"UTC-07:00",
"UTC-06:00",
"UTC-05:00",
"UTC-04:00",
"UTC-03:00",
"UTC-02:00",
"UTC-01:00",
'UTC',
"UTC+01:00",
"UTC+02:00",
"UTC+03:00",
"UTC+04:00",
"UTC+05:00",
"UTC+06:00",
"UTC+07:00",
"UTC+08:00",
"UTC+09:00",
"UTC+10:00",
"UTC+11:00",
"UTC+12:00",
"UTC+13",
]

const testTimezoneOne = "UTC-12:00"
const testTimezoneTwo = "UTC"

const dateObj = new Date(Date.UTC(2020, 1, 16, 12, 4, 5))


describe('Timezone Helpers',() => {
  describe('formatTimezones', () => {
    it('correctly formats a UTC string into separtate elements', () => {
        expect(formatTimezones(testTimezoneOne)).toEqual({
          utcHourDiff: 12,
          utcMinDiff : 0,
          isAhead : false
        })

    })
    it('correctly formats just UTC', () => {
        expect(formatTimezones(testTimezoneTwo)).toEqual({
          utcHourDiff: 0,
          utcMinDiff : 0,
          isAhead : false
        })

    })
  })

  describe('calculateTime', () => {
    it.each`
    formatedTime | date       | result
    ${formatTimezones(allTimezones[0])} | ${dateObj} | ${"12:04 am"}
    ${formatTimezones(allTimezones[1])} | ${dateObj} | ${"01:04 am"}
    ${formatTimezones(allTimezones[2])} | ${dateObj} | ${"02:04 am"}
    ${formatTimezones(allTimezones[3])} | ${dateObj} | ${"03:04 am"}
    ${formatTimezones(allTimezones[4])} | ${dateObj} | ${"04:04 am"}
    ${formatTimezones(allTimezones[5])} | ${dateObj} | ${"05:04 am"}
    ${formatTimezones(allTimezones[6])} | ${dateObj} | ${"06:04 am"}
    ${formatTimezones(allTimezones[7])} | ${dateObj} | ${"07:04 am"}
    ${formatTimezones(allTimezones[8])} | ${dateObj} | ${"08:04 am"}
    ${formatTimezones(allTimezones[9])} | ${dateObj} | ${"09:04 am"}
    ${formatTimezones(allTimezones[10])} | ${dateObj} | ${"10:04 am"}
    ${formatTimezones(allTimezones[11])} | ${dateObj} | ${"11:04 am"}
    ${formatTimezones(allTimezones[12])} | ${dateObj} | ${"12:04 pm"}
    ${formatTimezones(allTimezones[13])} | ${dateObj} | ${"01:04 pm"}
    ${formatTimezones(allTimezones[14])} | ${dateObj} | ${"02:04 pm"}    ${formatTimezones(allTimezones[15])} | ${dateObj} | ${"03:04 pm"}    ${formatTimezones(allTimezones[16])} | ${dateObj} | ${"04:04 pm"}    ${formatTimezones(allTimezones[17])} | ${dateObj} | ${"05:04 pm"}    ${formatTimezones(allTimezones[18])} | ${dateObj} | ${"06:04 pm"}    ${formatTimezones(allTimezones[19])} | ${dateObj} | ${"07:04 pm"}
    ${formatTimezones(allTimezones[20])} | ${dateObj} | ${"08:04 pm"}
    ${formatTimezones(allTimezones[21])} | ${dateObj} | ${"09:04 pm"}
    ${formatTimezones(allTimezones[22])} | ${dateObj} | ${"10:04 pm"}
    ${formatTimezones(allTimezones[23])} | ${dateObj} | ${"11:04 pm"}
    ${formatTimezones(allTimezones[24])} | ${dateObj} | ${"12:04 am"}
    ${formatTimezones(allTimezones[25])} | ${dateObj} | ${"01:04 am"}
    `('correctly returns the local time at $formatedTime', ({formatedTime, date, result}) => {
      let utcHours = date.getUTCHours(),
          utcMins = date.getUTCMinutes();
      expect(calculateTime({utcHours,utcMins,...formatedTime})).toEqual(result);
    });
  });


})
