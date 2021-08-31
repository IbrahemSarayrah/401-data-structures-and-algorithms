'use strict'

const validateBrackets = require('../stack-queue-brackets')

describe('stack-queue-brackets test', () => {
    
    it('check the brackets if balanced', () => {
      let test1 = '{}(){}';
      let test2 = '{}{Code}[Fellows](())';
      let test3 = '()[[Extra Characters]]'
      
      expect(validateBrackets(test1)).toBe(true);
      expect(validateBrackets(test2)).toBe(true);
      expect(validateBrackets(test3)).toBe(true);
    });
  
    it('check the brackets if not balanced', () => {
      let test1 = '[({}]';
      let test2 = '{{Code}[Fellows]())';
      let test3 = '(]('
      
      expect(validateBrackets(test1)).toBe(false);
      expect(validateBrackets(test2)).toBe(false);
      expect(validateBrackets(test3)).toBe(false);
    });
    
  });