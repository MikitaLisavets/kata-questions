export default function timeStatistics(stats) {
  const times = stats
    .split(', ')
    .map(rawTime => {
      const parsedTimes = rawTime.split('|');
      return 3600 * parsedTimes[0] + 60 * parsedTimes[1] + +parsedTimes[2];
    })
    .sort((a, b) => a - b);
  
  const half = Math.floor(times.length / 2);
  const range = times[times.length - 1] - times[0];
  const average = times.reduce((acc, time) => acc + time, 0) / times.length;
  const median = times.length % 2 ? times[half] : (times[half - 1] + times[half]) / 2;
  
  const convertToStringFormat = (time) => {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time - (h * 3600)) / 60);
    const s = Math.floor(time - (h * 3600) - (m * 60));
    const addZeroIfNeeded = (num) => num < 10 ? '0' + num : num;
    return addZeroIfNeeded(h) + '|' + addZeroIfNeeded(m) + '|' + addZeroIfNeeded(s);
  };
  
  return isNaN(range) || isNaN(average) || isNaN(median) ? ''
    : `Range: ${convertToStringFormat(range)} Average: ${convertToStringFormat(average)} Median: ${convertToStringFormat(median)}`;
}