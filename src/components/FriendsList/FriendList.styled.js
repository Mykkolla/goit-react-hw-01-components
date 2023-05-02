import styled from 'styled-components';

export const Friendlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FriendlistItem = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`;

export const FriendName = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  padding-left: 5px;
`;

export const Friendliststatus = styled.span`
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  margin-right: 10px;
  width: 10px;
  // background-color: green;
  background-color: ${props => {
    return props.isonlinenow ? 'green' : 'red';
  }};
`;
