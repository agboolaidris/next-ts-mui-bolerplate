import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonUnstyled } from '@mui/base';
import { getColor } from '../../assets/thems/color';

export const Button = styled(ButtonUnstyled)`
  background-color: ${getColor('white')};
`;

export const LinkButton = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  color: ${getColor('danger')};
  &:hover {
    background-color: ${getColor('danger')};
    color: ${getColor('black')};
  }
`;
const Moving = keyframes`
0%{
  transform:translateX(10px);
  
}
100%{
  transform:translateX(0px);

}
`;
export const AnimationIconWrapper = styled.div`
  animation: ${Moving} 1.5s linear infinite;
  transition: all 0.4s ease-in-out;
`;
