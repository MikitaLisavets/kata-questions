import timeStatistics from './timeStatistics';

test('Basic tests', () => {
  expect(timeStatistics('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17'))
    .toBe('Range: 01|01|18 Average: 01|38|05 Median: 01|32|34');

  expect(timeStatistics('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41'))
    .toBe('Range: 00|31|17 Average: 02|26|18 Median: 02|22|00');

  expect(timeStatistics('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17'))
    .toBe('Range: 00|31|17 Average: 02|27|10 Median: 02|24|57');

  expect(timeStatistics('0|15|59, 0|16|16, 0|17|20, 0|22|34, 0|19|34, 0|15|0'))
    .toBe('Range: 00|07|34 Average: 00|17|47 Median: 00|16|48');

  expect(timeStatistics('11|15|59, 10|16|16, 12|17|20, 9|22|34, 13|19|34, 11|15|17, 11|22|00, 10|26|37, 12|17|48, 9|16|30, 12|20|14, 11|25|11'))
    .toBe('Range: 04|03|04 Average: 11|14|36 Median: 11|18|59');

  expect(timeStatistics('1|15|59, 1|16|16, 1|17|20, 1|22|34, 1|19|34, 1|15|17, 1|22|00, 1|26|37, 1|17|48, 1|16|30, 1|20|14, 1|25|11'))
    .toBe('Range: 00|11|20 Average: 01|19|36 Median: 01|18|41');

  expect(timeStatistics('00|00|00')).toBe('Range: 00|00|00 Average: 00|00|00 Median: 00|00|00');

  expect(timeStatistics('')).toBe('');
});

test('Random tests', () => {
  function randint(a,b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function time2snd1231(s) {
    var arr = s.split('|').map(function (x) { return ~~x; } );
    var snd = 3600 * arr[0] + 60 * arr[1] + arr[2];
    return snd;
  }
  function pad1231(num, size) {
    var s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }
  function snd2time1231(m) {
    var h = Math.floor(m / 3600);
    var re = m % 3600;
    var mn = Math.floor(re / 60);
    var s = re % 60;
    return pad1231(h, 2) + '|' + pad1231(mn, 2) + '|' + pad1231(s, 2);
  }
  function stat1231(strg) {
    if (strg === '')
      return '';
    var r = strg.split(',').map(function(x) { return time2snd1231(x); } ).sort(function(a, b) { return a-b; } );
    var lg = r.length;
    var avg = ~~(r.reduce(function(s, x) { return (s + x); } ) / lg);
    var rge = ~~(r[lg - 1] -  r[0]);
    var md = ~~((r[ ~~((lg - 1) / 2) ] + r[ ~~(lg / 2) ]) / 2);
    return 'Range: ' + pad1231(snd2time1231(rge)) + ' Average: ' + 
          pad1231(snd2time1231(avg)) + ' Median: ' + pad1231(snd2time1231(md));
  }
  function comb() {
    var a = '01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17';
    var b = '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41';
    var c = '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17';
    var d = '00|15|59, 00|16|16, 00|17|20, 00|22|34, 00|19|34, 00|15|17';
    var e = '11|15|59, 10|16|16, 12|17|20, 9|22|34, 13|19|34, 11|15|17, 11|22|00, 10|26|37, 12|17|48, 9|16|30, 12|20|14, 11|25|11';
    var f = '1|15|59, 1|16|16, 1|17|20, 1|22|34, 1|19|34, 1|15|17, 1|22|00, 1|26|37, 1|17|48, 1|16|30, 1|20|14, 1|25|11';

    var k = a + ', ' + b + ', ' + c + ', ' + d + ', ' + e + ', ' + f;
    var s = k.split(', ');
    var l = s.length;
    var res = '';
    var i = 0;
    var nb = randint(0, 20);
    while (i < nb) {
      a = randint(0, l - 1);
      res = res + s[a];
      if (i < nb - 1) res += ', ';
      i += 1;
    }
    return res;
  }

  for (var i = 0; i < 50; i++){
    var a = comb();
    expect(timeStatistics(a)).toBe(stat1231(a));
  }
});