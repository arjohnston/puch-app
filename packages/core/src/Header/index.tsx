import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => <header>header: {children}</header>;

export default Header;
