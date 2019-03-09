export default function rot13(message) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';

  return message
    .split('')
    .map((char) => {
      if (/[^a-zA-Z]/.test(char)) return char;
      const isUpperCase = char === char.toUpperCase();
      const charIndex = abc.indexOf(char.toLowerCase());
      const rot13Letter = abc[(charIndex + 13) % abc.length];
      return isUpperCase ? rot13Letter.toUpperCase() : rot13Letter;
    })
    .join('');
}