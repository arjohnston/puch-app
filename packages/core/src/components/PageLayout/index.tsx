import styled from '@emotion/styled';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Body from '../Body';

interface Props {
  children: React.ReactNode;
}

const Main = styled.main({});

const Component: React.FunctionComponent<Props> = ({ children }: Props) => (
  <Main>
    <Sidebar />
    <Header />
    <Body>{children}</Body>
    <Footer />
  </Main>
);

export default Component;
