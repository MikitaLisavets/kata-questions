export default function validParentheses(parens) {
  let counter = 0;
  for (let i = 0; i < parens.length && counter >= 0; i++) {
    counter += parens[i] === '(' ?  1 :  -1;
  }
  return counter === 0;
}