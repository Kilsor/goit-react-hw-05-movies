import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Logo, Navigation, NavLink } from './Layout.styled';

export function Layout({ children }) {
  return (
    <div>
      <Header>
        <Link to="/">
          <Logo>Movie Search</Logo>
        </Link>
        <Navigation>
          <NavLink to="/">Головна</NavLink>
          <NavLink to="/movies">Пошук фільмів</NavLink>
        </Navigation>
      </Header>
      <main>{children}</main>
    </div>
  );
}
