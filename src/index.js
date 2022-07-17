var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (n) {
    
  if (n == 0) return 'zero';

  if (n < 10) return ones[n];

  if (n >= 10 && n < 20) return teens[n%10];

  if (n >= 20 && n < 100) {
    if (n % 10 == 0) return tens[n / 10];
    else return tens[Math.trunc(n/10)] + ' ' + ones[n%10];
  }

  if (n >= 100 && n < 1000) {
    if (n % 100 == 0) return ones[n / 100] + ' hundred';
    else if (Math.trunc(n%100/10) == 1) return ones[Math.trunc(n/100)] + ' hundred ' + teens[n%10];
    else if (Math.trunc(n%100/10) == 0) return ones[Math.trunc(n/100)] + ' hundred ' + ones[n%10];
    else return `${ones[Math.trunc(n/100)]} hundred ${tens[Math.trunc(n%100/10)]} ${ones[n%10]}`.trim();
  }
}
