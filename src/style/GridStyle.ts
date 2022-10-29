import styled from 'styled-components';

interface GridStyleProps {
  gap: number;
  autoFlow?: 'column' | 'row';
  margin?: string;
}

export const Grid = styled.div<GridStyleProps>`
  display: grid;
  gap: ${({ gap }) => gap}px;
  grid-auto-flow: ${({ autoFlow }) => autoFlow};
  margin: ${({ margin }) => margin};
  justify-content: flex-start;
  justify-items: flex-start;
`;
