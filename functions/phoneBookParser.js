export default function phoneBookParser(strng, num) {
  const phoneLines = strng.split('\n').filter(line => line.indexOf(num) >= 0);

  if (!phoneLines.length) return `Error => Not found: ${num}`;
  if (phoneLines.length > 1) return `Error => Too many people: ${num}`;
  
  const name = /<(.+?)>/g.exec(phoneLines[0]);
  const address = phoneLines[0]
    .replace('+' + num, '')
    .replace(name[0], '')
    .replace(/[^\w\s\-.']|[_]/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  return `Phone => ${num}, Name => ${name[1]}, Address => ${address}`;
}