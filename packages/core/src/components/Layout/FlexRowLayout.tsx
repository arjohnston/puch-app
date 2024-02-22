import React from 'react';
import Layout, { Display, Flex, FlexDirection, LayoutProps } from './Layout';

const FlexRowLayout: React.FunctionComponent<LayoutProps> = (
  props: LayoutProps,
) => (
  <Layout
    display={Display.Flex}
    flexDirection={FlexDirection.Row}
    flex={Flex.One}
    {...props}
  />
);

export default FlexRowLayout;
