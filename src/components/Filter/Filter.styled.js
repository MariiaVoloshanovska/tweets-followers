import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  display: inline-block;
  padding: 7px 8px;
  border: 2px solid #471ca9;
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #471ca9;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  background-color: #ebd8ff;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #471ca9;
  }
`;

export const Select = styled.select`
  margin-left: 30px;
  font-size: 16px;
  color: #471ca9;
  border: 1px solid #471ca9;
  border-radius: 4px;
  outline: none;
  padding: 2px 2px;
`;

export const Option = styled.option`
  font-size: 19px;
  color: #471ca9;
  padding: 5px 5px;
  margin-left: auto;
  display: block;
  margin-left: auto;
  display: block;
`;
