import phoneBookParser from './phoneBookParser';

describe('phoneBookParser', () => {
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

  const numbers = '1-541-754-3010,1-541-914-3010,1-541-984-3012,1-321-512-2222,1-741-984-3090,'
    + '1-921-333-2222,1-111-544-8973,1-921-512-2222,1-121-544-8974,1-481-512-2222,'
    + '1-121-504-8974,1-681-512-2222,1-421-674-8974,1-908-512-2222,48-421-674-8974,1-098-512-2222,'
    + '19-421-674-8974,1-498-512-2222,1-099-500-8000,1-931-512-4855,5-555-555-5555,'
    + '5-541-754-3010,6-541-914-3010,5-541-984-3012,5-321-512-2222,3-741-984-3090,'
    + '3-921-333-2222,8-111-544-8973,8-921-512-2222,2-121-544-8974,2-481-512-2222,'
    + '7-121-504-8974,7-681-512-2222,9-421-674-8974,2-908-512-2222,8-421-674-8974,'
    + '15-098-512-2222,9-421-674-8974,3-498-512-2222,12-099-500-8000,8-931-512-4855,'
    + '3-098-512-2222';

  const names = ['J Steeve','E Kustur','P Reed','Paul Dive','Peter Reedgrave ','Anna Stevens','Peter Pan','Wilfrid Stevens',
    'Peter Gone','R Steell','Arthur Clarke','Ray Chandler','Sophia Loren','Peter O\'Brien',
    'Anastasia Via','P Salinger','C Powel','Bernard Deltheil','Peter Crush','William Saurin',
    'P Salinge','Jr Part','F Fulgur','Peter Reeves','Paulo Divino','F Flanaghan','Roland Scorsini',
    'Laurence Pantow','Raymond Stevenson','John Freeland','Robert Mitch','Arthur Paternos','Ray Charles',
    'JP Gorce','P McDon','Elizabeth Corber','C Saborn','Colin Marshall','Bernard Povit','Pete Highman',
    'W Mount Oxford','Donald Drinkaw'].map(x=>x.trim());

  const addresses = ['156 Alphand St.','133 Green Rd. NY-56423','PO Box 530 Pollocksville NC-28573','Sequoia Alley PQ-67209',
    'Chicago','Haramburu Street AA-67209','LA','Wild Street AA-67209','LA','Quora Street AB-47209','San Antonio TT-45120',
    'Teliman Pk. AB-47209','Bern TP-46017','High Street CC-47209','Quirinal Roma','Main Street Denver',
    'Chateau des Fosses Strasbourg F-68000','Mount Av. Eldorado','Labrador Bd.','Bison Street CQ-23071',
    'Main Street Denve','156 Alphandria Street.','1333 Green Road NW-46423','PO Box 5300 Albertville SC-28573',
    'Boulder Alley ZQ-87209','Chicago Av.','Bellevue Street DA-67209','SA','Joly Street EE-67209','Mantow',
    'Eleonore Street QB-87209','San Antonio TT-45121','Stevenson Pk. CB-47209','New-Bern TP-16017',
    'Revolution Street PP-47209','Via Papa Roma','Main Street Boulder','Edinburgh UK','Hill Av. Cameron',
    'Ontario Bd.','Oxford Street CQ-23071','Moon Street Peterville'].map(x=>x.trim());

  test('Basic tests', () => {
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

  test('Random tests', () => {
    function randint(a, b) { 
      return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    
    function phoneMySol(strng, num) {
      let clean = strng.replace(/[^-0-9a-z\s+A-Z\n<>.']/g, ' ');
      let re = new RegExp('\\+*' + num);
      let a = clean.split('\n').filter(x => re.test(x));
      if (a.length > 1) return 'Error => Too many people: ' + num;
      if (a.length == 0) return 'Error => Not found: ' + num;
      let rre = new RegExp('\\+*' + num);
      let c = a[0].replace(rre, '');
      let name = c.match(/<.*>/)[0];
      let ad = c.replace(/<.*>/, '').replace(/\s+/g, ' ').trim();
      return 'Phone => ' + num + ', Name => ' + name.substring(1, name.length-1) + ', Address => ' + ad;
    }

    const mixUp = function(a, b){
      let _a = a.split('\n'), _b = b.split(',');

      const changeNumber = () => `${randint(1,99)}-${randint(100,999)}-${randint(100,999)}-${randint(1000,9999)}`;

      _a = _a.map((phone) => {

        if(phone.length === 0)
          return '';

        let number = phone.match(/(\d{1}|\d{2})-\d{3}-\d{3}-\d{4}/)[0];
        let name = phone.match(/<([^>]+)>/)[1];
        let address = phone.replace('+'+number,'')
          .replace(`<${name}>`,'')
          .replace(/[^\w-. ]/g,'')
          .replace(/_/g,' ')
          .replace(/^ +| +$| (?= )/g,'');

        if(_b.indexOf(number) === -1)
          return phone;

        let newNumber = changeNumber();

        _b[_b.indexOf(number)] = newNumber;
        phone = phone.replace(number, newNumber);
        phone = phone.replace(name, names[randint(0, names.length-1)].trim());
        phone = phone.replace(address, addresses[randint(0, addresses.length-1)].trim());
        return phone;
      });

      return [_a.join('\n'), _b];
    };


    let [_dr, t] = [phoneBook, numbers];
    for (let i = 0; i < 100; i++) {

      if(i % 10 === 0)
        [_dr,t] = mixUp(phoneBook, numbers);

      let n = randint(0, t.length - 1);
      let toF = t[n];

      expect(phoneBookParser(_dr, toF)).toBe(phoneMySol(_dr, toF));
    }
  });
});