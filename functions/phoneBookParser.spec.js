import phoneBookParser from './phoneBookParser';

test('Basic tests', () => {
  const phoneBook = '/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n'
    + '+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n'
    + '+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n'
    + '+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n'
    + '<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n'
    + '<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n'
    + '<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O\'Brien> High Street +1-908-512-2222; CC-47209\n'
    + '<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n'
    + '<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n'
    + '+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n'
    + '<P Salinge> Main Street, +1-098-512-2222, Denve\n'
    + '/+5-541-754-3010 156 Alphandria_Street. <Jr Part>\n 1333, Green, Road <F Fulgur> NW-46423 ;+6-541-914-3010!\n'
    + '+5-541-984-3012 <Peter Reeves> /PO Box 5300; Albertville, SC-28573\n :+5-321-512-2222 <Paulo Divino> Boulder Alley ZQ-87209\n'
    + '+3-741-984-3090 <F Flanaghan> _Chicago Av.\n :+3-921-333-2222 <Roland Scorsini> Bellevue_Street DA-67209\n'
    + '+8-111-544-8973 <Laurence Pantow> SA\n +8-921-512-2222 <Raymond Stevenson> Joly Street EE-67209\n'
    + '<John Freeland> Mantow ?+2-121-544-8974 \n <Robert Mitch> Eleonore Street QB-87209 +2-481-512-2222?\n'
    + '<Arthur Paternos> San Antonio $+7-121-504-8974 TT-45121\n <Ray Charles> Stevenson Pk. !+7-681-512-2222! CB-47209,\n'
    + '<JP Gorce> +9-421-674-8974 New-Bern TP-16017\n <P McDon> Revolution Street +2-908-512-2222; PP-47209\n'
    + '<Elizabeth Corber> +8-421-674-8974 Via Papa Roma\n <C Saborn> Main Street, +15-098-512-2222, Boulder\n'
    + '<Colin Marshall> *+9-421-674-8974 Edinburgh UK\n <Bernard Povit> +3-498-512-2222; Hill Av.  Cameron\n'
    + '+12-099-500-8000 <Pete Highman> Ontario Bd.\n +8-931-512-4855 <W Mount> Oxford Street CQ-23071\n'
    + '<Donald Drinkaw> Moon Street, +3-098-512-2222, Peterville\n';

  expect(phoneBookParser(phoneBook, '48-421-674-8974')).toBe('Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma');
  expect(phoneBookParser(phoneBook, '19-421-674-8974')).toBe('Phone => 19-421-674-8974, Name => C Powel, Address => Chateau des Fosses Strasbourg F-68000');
  expect(phoneBookParser(phoneBook, '1-921-512-2222')).toBe('Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209');
  expect(phoneBookParser(phoneBook, '1-908-512-2222')).toBe('Phone => 1-908-512-2222, Name => Peter O\'Brien, Address => High Street CC-47209');
  expect(phoneBookParser(phoneBook, '1-541-754-3010')).toBe('Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St.');
  expect(phoneBookParser(phoneBook, '1-121-504-8974')).toBe('Phone => 1-121-504-8974, Name => Arthur Clarke, Address => San Antonio TT-45120');
  expect(phoneBookParser(phoneBook, '1-498-512-2222')).toBe('Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av. Eldorado');
  expect(phoneBookParser(phoneBook, '1-481-512-2222')).toBe('Phone => 1-481-512-2222, Name => R Steell, Address => Quora Street AB-47209');
  expect(phoneBookParser(phoneBook, '1-098-512-2222')).toBe('Error => Too many people: 1-098-512-2222');
  expect(phoneBookParser(phoneBook, '5-555-555-5555')).toBe('Error => Not found: 5-555-555-5555');

  expect(phoneBookParser(phoneBook, '1-921-512-2222')).toBe('Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209');
  expect(phoneBookParser(phoneBook, '1-121-544-8974')).toBe('Phone => 1-121-544-8974, Name => Peter Gone, Address => LA');
  expect(phoneBookParser(phoneBook, '5-541-984-3012')).toBe('Phone => 5-541-984-3012, Name => Peter Reeves, Address => PO Box 5300 Albertville SC-28573');
  expect(phoneBookParser(phoneBook, '19-421-674-8974')).toBe('Phone => 19-421-674-8974, Name => C Powel, Address => Chateau des Fosses Strasbourg F-68000');
  expect(phoneBookParser(phoneBook, '3-921-333-2222')).toBe('Phone => 3-921-333-2222, Name => Roland Scorsini, Address => Bellevue Street DA-67209');
  expect(phoneBookParser(phoneBook, '3-498-512-2222')).toBe('Phone => 3-498-512-2222, Name => Bernard Povit, Address => Hill Av. Cameron');
  expect(phoneBookParser(phoneBook, '1-741-984-3090')).toBe('Phone => 1-741-984-3090, Name => Peter Reedgrave, Address => Chicago');
  expect(phoneBookParser(phoneBook, '8-921-512-2222')).toBe('Phone => 8-921-512-2222, Name => Raymond Stevenson, Address => Joly Street EE-67209');
  expect(phoneBookParser(phoneBook, '1-541-914-3010')).toBe('Phone => 1-541-914-3010, Name => E Kustur, Address => 133 Green Rd. NY-56423');
  expect(phoneBookParser(phoneBook, '9-421-674-8974')).toBe('Error => Too many people: 9-421-674-8974');
});