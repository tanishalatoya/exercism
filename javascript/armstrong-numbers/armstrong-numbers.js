//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  const numOfDigits = num.toString().length;
  const allDigits = num.toString().split('');
  let value;
  const armstrongCalc = allDigits.reduce((sum, digit) => {
    value = Number(digit)**Number(numOfDigits);
    return sum + value;
  }, 0)
  
  return armstrongCalc === num;
};
