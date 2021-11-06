const { nextISSTimesForMyLocation } = require('./iss_promised');

fetchMyIP()
  .then(body => console.log(body));


  const fetchCoordsByIP = function(body) {
    const ip = JSON.parse(body).ip;
    return request(`https://freegeoip.app/json/${ip}`);
  };
  
  fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));

  nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

  
  module.exports = { fetchMyIP, fetchCoordsByIP };