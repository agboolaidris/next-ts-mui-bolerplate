import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Box, Theme } from '@mui/material';
import { getColor } from '../../../assets/thems/color';

export const HeaderStyled = styled(Box)<{ theme?: Theme }>`
  height: 70px;
  width: 100%;
  padding: 0 min(5%, 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  font-size: 1.2rem;
  font-weight: bolder;
`;

export const NavBar = styled.ul<{ theme?: Theme; open: boolean }>`
  display: flex;
  align-items: center;
  .link {
    margin-left: 50px;
    width: max-content;
    text-align: center;
    a {
      display: block;
      &:hover {
        color: ${getColor('danger')};
      }
    }
    transition: all 2s ease-in-out;
    &.active-link {
      a {
        color: ${getColor('danger')};
      }
      .underline {
        width: 100%;
        height: 1px;
        background: ${getColor('danger')};
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: fixed;
    width: 100%;
    z-index: 40;
    background: ${getColor('danger')};
    left: 0;
    top: 60px;
    flex-direction: column;
    padding-inline-start: 0px;
    height: max-content;
    padding: 20px 0px;
    transform: translatex(-100%);
    transition: all 0.3s ease-in-out;
    ${({ open }) =>
      open &&
      css`
        transform: translatex(0%);
      `}
    .link {
      margin-left: 0px;
      width: 100%;
      padding: 15px;
      .underline {
        display: none;
      }
      &.active-link {
        background: ${getColor('black')};
        a {
          color: ${getColor('black')};
        }
      }
    }
  }
`;

export const Harmburger = styled.div<{ theme?: Theme }>`
  display: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;
  }
`;
