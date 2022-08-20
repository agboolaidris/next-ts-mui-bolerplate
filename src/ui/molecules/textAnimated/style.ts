import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { getColor } from '../../../assets/thems/color';

const Light = keyframes`
  0%,
  80% {
    color:${getColor('white')};
    text-shadow: none;
  }
  100% {
    color: ${getColor('white')};
      text-shadow: -0.06em 0 ${getColor('danger')}, 0.06em 0 ${getColor(
  'white'
)};
  }

`;

export const LightText = styled.span<{ delay?: number }>`
  animation: ${Light} 1s linear infinite;
`;
export const TextStyled = styled.div`
  font-size: 6em;
  color: #333;
  font-weight: 500;
  opacity: 0.1;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
`;
