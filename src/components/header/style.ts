'use client';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  color: #fff;
  margin: 0;
  height: 70px;
  z-index: 2;
  background-color: #1b1b1b;
  width: 100%;

  h1 {
    margin-left: 50px;
    span {
      color: var(--primary-color);
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: row nowrap;
    list-style: none;
    gap: 40px;
    margin-right: 50px;
  }

  li {
    height: 100%;
  }

  nav a {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: font-weight 200ms ease-in-out, color 200ms ease-in-out;

    &:hover {
      font-weight: 700;
      color: var(--primary-color);
    }
  }
`;
