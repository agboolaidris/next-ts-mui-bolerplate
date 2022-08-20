export const colors = {
  danger: '#B30049',
  white: '#f9f9f9',
  black: '#070D0D',
  cursor: '179,0,73',
  lightBlack: '#231F20 ',
  yellow: '#fff800',
};

export type ColorsInterface = typeof colors;

// 👇️ type Keys = "name" | "age" | "country"
export type ColorType = keyof typeof colors;
