import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #ff5722;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

export const Main = styled.main`
  padding: 20px;
`;

export const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 16px 0;
  text-align: center;
`;
