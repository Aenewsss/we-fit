import styled from "styled-components";

interface FlexContainerProps {
  alignItems?: 'center' | 'flex-end';
  justifyContent?: 'center' | 'space-between' | 'flex-end' | 'flex-start';
  gapRow?: number;
  gapColumn?: number;
  flexWrap?: 'wrap' | 'no-wrap' | 'wrap-reverse';
  direction?: 'row' | 'column'
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  row-gap: ${props => (props.gapRow ? `${props.gapRow}px` : '')};
  column-gap: ${props => (props.gapColumn ? `${props.gapColumn}px` : '')};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
`;