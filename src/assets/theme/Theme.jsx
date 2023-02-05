const colors = {
  black: '#000000',
  darkGray: '#7c7c7c',
  gray: '#bfbfbf',
  lightGray: '#d9d9d9',
  white: '#ffffff',
  skyBlue: '#e3eaf0',
  red: '#e36675',
  backgroundBlue: '#fafbfd',
  blue: '#4a90e2',
  lightRed: 'rgba(231, 109, 123, 0.8)',
  yellow: '#fad77e',
  darkYellow: '#ecb834',
};

const shadow = {
  componentShadow: `
    box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.25);
  `,
  homeBoxShadow: `
    box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.25);
  `,
};

const font = {
  header: `
    font-family: 'pretendard-bold';
    font-size: 32px;
    line-height: 38px;
    letter-spacing: 0.105em;
  `,
  semiHeader: `
    font-family: 'pretendard-bold';
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.105em;
  `,
  semiBold: `
    font-family: 'pretendard-semibold';
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.185em;
  `,
  small: `
    font-family: 'pretendard-regular';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.185em;
  `,
  contentTitle: `
    font-family: 'pretendard-semibold';
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.055em;
  `,
  contentText: `
    font-family: 'pretendard-regular';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.04em;
  `,
  sideContent: `
    font-family: 'pretendard-regular';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.095em;
  `,
  sideContentBold: `
    font-family: 'pretendard-bold';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.055em;
  `,
  sideContentSmall: `
    font-family: 'pretendard-regular';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
  `,
  pageTitle: `
    font-family: 'pretendard-semibold';
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.025em;
  `,
  buttonText: `
    font-family: 'pretendard-semibold';
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.055em;
  `,
  tinyText: `
    font-family: 'pretendard-semibold';
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
  `,
  loginText: `
    font-family: 'pretendard-medium';
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.055em;
  `,
  calenderTitle: `
    font-family: 'pretendard-semibold';
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.015em;
  `,
};

const flex = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const animation = {
  box: { scale: 1.03, transition: { duration: 0.3 } },
};

const theme = {
  colors,
  shadow,
  font,
  flex,
  animation,
};

export default theme;
