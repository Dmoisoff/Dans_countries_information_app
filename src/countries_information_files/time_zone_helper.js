export let getLocalTimes = (timezones)  => {
  const currentTime = new Date();
  const utcHours = currentTime.getUTCHours(),
  utcMins = currentTime.getUTCMinutes();
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
  let totalHours = isAhead ? utcHours + utcHourDiff : utcHours - utcHourDiff;

  if (totalMins >= 60) {
    totalHours++
    totalMins = totalMins % 60;
  }

  if (totalMins < 0) {
    totalMins = 60 - Math.abs(totalMins);
    totalHours--;
  }

  let unit = (totalHours >= 12 && totalHours < 24) || totalHours < 0 ? 'pm' : 'am';

  if(totalHours > 12) {
    totalHours = totalHours % 12;
  }

  if (totalHours < 0) {
    totalHours = Math.abs(totalHours + 12);
  }

  if (totalHours === 0) {
    totalHours += 12;
  }

  let formatHour = formatTime(totalHours);
  let formatMins = formatTime(totalMins);
  return `${formatHour}:${formatMins} ${unit}`;

}

let formatTime = (time) => (
  time < 10 ? `0${time}` : time
)
