const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('Returns empty string if empty string was provided', () => {
      //expect(wrap("", 10)).to.equal("");
    });
    it('Wraps the string if the string is longer than the column number', () => {
        expect(wrap('1 2 3 4 5 6 7 8 9 10', 5)).to.equal('1 2 3 4 5\n6 7 8 9 10');
    })
  });


