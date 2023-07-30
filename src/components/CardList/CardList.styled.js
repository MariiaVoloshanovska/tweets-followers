import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardListWrapper = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const LinkBack = styled(NavLink)`
  cursor: pointer;
  color: #471ca9;
  width: 140px;
  font-size: 21px;
  border: 2px solid #471ca9;
  background-color: #ebd8ff;
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 18px;
  text-align: center;
  font-weight: 600;
  margin-left: auto;
  display: block
  margin-left: auto;
  display: block;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #471ca9;
  }
  }
`;

// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export const CardListWrapper = styled.ul`
//   display: grid;
//   max-width: calc(100vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
//   grid-gap: 16px;
//   margin-top: 20px;
//   margin-bottom: 0;
//   padding: 0;
//   list-style: none;
//   margin-left: auto;
//   margin-right: auto;
//   /* Center the element horizontally */
//   justify-content: center;
//   /* If you want to center it vertically too, you can add the following property */
//   align-items: center;
// `;

// export const LinkBack = styled.a`
//   cursor: pointer;
//   color: #ffffff;
//   background-color: #4b0082;
//   padding: 8px 12px;
//   border-radius: 4px;
//   text-decoration: none;
//   display: inline-block;
//   margin-bottom: 20px; /* Add some spacing at the bottom */

//   &:hover {
//     background-color: #0056b3; /* Change the background color on hover */
//   }
// `;
