const colors = {
  danger: '#B30049',
  white: '#f9f9f9',
  black: '#070D0D',
  cursor: '179,0,73',
  lightBlack: '#231F20 ',
  yellow: '#fff800',
};

// 👇️ type Keys = "name" | "age" | "country"
export type ColorType = keyof typeof colors;

// 👇️ type Values = string | number
type Values = typeof colors[ColorType];

export const getColor = (value: ColorType): Values => {
  return colors[value];
};
