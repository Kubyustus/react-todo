var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1512047567;
var currentMoment = moment.unix(timestamp);
console.log('Current Moment', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2017 @ 12:13 AM
console.log('Current Moment', currentMoment.format('MMMM do, YYYY @ h:mm A'));
