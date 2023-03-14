function timeConversion(s) {
  let conversion = null;
  let militaryTime = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  let h = s[0] + s[1];
  let amOrPm = s[8] + s[9];
  let rest = s.slice(2, 8);

  for (const numb in militaryTime) {
      let aux = h.replace(/0/g, "");
      Object.is(amOrPm, "PM") && Object.is(numb, aux)
          ? (conversion = militaryTime[numb] + rest)
          : Object.is(h, "12") && (conversion = "00" + rest);
      Object.is(amOrPm, "PM") && Object.is(h, "12") && (conversion = "12" + rest);
      Object.is(amOrPm, 'AM') && (conversion = h + rest)
  }
  return conversion
}

timeConversion('12:00:00AM')