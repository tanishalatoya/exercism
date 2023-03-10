//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name = 'you') => {
  let message = 'One for you, one for me.';
  if (name !== 'you') {
    message = `One for ${name}, one for me.`
  }
  return message;
};
