import styled, { css } from 'styled-components';

interface ButtonProps {
  variant: 'empty' | 'selected';
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 8px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width:317px;

  ${({ variant }) => variant === 'empty' && css`
    background-color: #009EDD;
    &:hover {
      background-color: #0073A1;
    }
  `}

  ${({ variant }) => variant === 'selected' && css`
    background-color: #039B00;
    &:hover {
      background-color: #027700;
    }
  `}
`;

export const StyledLink = styled.a`
  min-width:173px;
  height: 40px;
  padding: 8px;
  gap: 12px;
  border-radius: 4px;
  background: #009EDD;
  color:white;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  display:flex;
  align-items:center;
  justify-content:center;
`

export const StyledSpan = styled.span`
  font-size:12px;
`

export const StyledSpanBold = styled(StyledSpan)`
  font-weight: 700;
`