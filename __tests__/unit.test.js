// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
describe('isPhoneNumber', () => {
  test('valid phone number 1', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('valid phone number 2', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('invalid phone number 1', () => {
    expect(isPhoneNumber('123456')).toBe(false);
  });

  test('invalid phone number 2', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email 1', () => {
    expect(isEmail('test@notarealemail.com')).toBe(true);
  });

  test('valid email 2', () => {
    expect(isEmail('CSE110@domain.co')).toBe(true);
  });

  test('invalid email 1', () => {
    expect(isEmail('user@.com')).toBe(false);
  });

  test('invalid email 2', () => {
    expect(isEmail('userdomain.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid strong password 1', () => {
    expect(isStrongPassword('Str0ngPass')).toBe(true);
  });

  test('valid strong password 2', () => {
    expect(isStrongPassword('My_pass123')).toBe(true);
  });

  test('invalid strong password 1', () => {
    expect(isStrongPassword('123')).toBe(false);
  });

  test('invalid strong password 2', () => {
    expect(isStrongPassword('a')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid date 1', () => {
    expect(isDate('12/31/2020')).toBe(true);
  });

  test('valid date 2', () => {
    expect(isDate('01/01/1999')).toBe(true);
  });

  test('invalid date 1', () => {
    expect(isDate('01012025')).toBe(false); // wrong format (MM/DD/YYYY expected)
  });

  test('invalid date 2', () => {
    expect(isDate('not-a-date')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid hex color 1', () => {
    expect(isHexColor('#fff')).toBe(true);
  });

  test('valid hex color 2', () => {
    expect(isHexColor('#a1b2c3')).toBe(true);
  });

  test('invalid hex color 1', () => {
    expect(isHexColor('12345678')).toBe(false); // missing '#'
  });

  test('invalid hex color 2', () => {
    expect(isHexColor('#ggg')).toBe(false); // invalid hex characters
  });
});