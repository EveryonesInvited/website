export type Color = keyof typeof colors;
const colors = {
  primary: '#000',
  secondary: '#F3F3F3',
  cabaret: '#D74259',
};

const fontSizes = {
  // if html font-size is 16px
  0: '0.75rem', // 12px
  1: '0.875em', // 14px
  2: '1rem', // 16px
  3: '1.25rem', // 20px
  4: '1.5rem', // 24px
  5: '1.75rem', // 28px
  6: '2rem', // 32px
  7: '2.25rem', // 36px
  8: '2.5rem', // 40px
  9: '3.75rem', // 60px
};

const space = {
  // if html font-size is 16px
  0: '0rem', // 0px
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '2rem', // 32px
  8: '2.5rem', // 40px
  9: '4rem', // 64px
  10: '5rem', // 80px
  11: '7.5rem', // 120px
};

export default { colors, fontSizes, space };
