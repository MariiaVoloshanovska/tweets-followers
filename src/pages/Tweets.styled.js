import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 30px;
  color: rgb(255, 255, 255);
`;

export const Button = styled.button`
  /* Your existing styles */
  display: block;
  width: 170px;
  height: 50px;
  padding: 7px 8px;
  margin: 20px auto 0px auto;
  border: 2px solid #471ca9;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  background-color: #ebd8ff;
  color: #471ca9;
  text-transform: uppercase;
  font-size: 17px;
  line-height: 1.02;
  font-weight: 700;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #471ca9;
  }

  &.clicked {
    transform: translateY(2px);
    box-shadow: 0px 1px 1px -2px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;
