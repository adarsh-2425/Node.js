const getDateAndTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString('en-IN');
  const time =now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
  //console.log(date + ' ' + time);
  return { date, time };
}

module.exports = getDateAndTime;
