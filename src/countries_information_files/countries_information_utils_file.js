import wretch from "wretch"

export const getCountryData = (params) => {
  let w = wretch(`https://restcountries.eu/rest/v2/name/${params}?fullText=true`);
  w = w.query('fields=name;capital;population;timezones;flag');
  return w.get().json()
};
