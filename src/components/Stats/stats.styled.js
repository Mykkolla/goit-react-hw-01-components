import styled from 'styled-components';

export const StatisticsSection = styled.section`
  border: dashed red;
`;

export const Statisticsul = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:nth-of-type(1n) {
    background-color: ${getRandomColor()};
  }
  &:nth-of-type(2n) {
    background-color: ${getRandomColor()};
  }
  width: 80px;
`;

export const StatsTitle = styled.h2`
  text-align: center;
  color: dark;
`;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
