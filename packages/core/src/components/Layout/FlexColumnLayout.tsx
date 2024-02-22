import React from 'react';
import Layout, { Display, FlexDirection, LayoutProps } from './Layout';

const FlexColumnLayout: React.FunctionComponent<LayoutProps> = (
  props: LayoutProps,
) => (
  <Layout
    display={Display.Flex}
    flexDirection={FlexDirection.Column}
    {...props}
  />
);

export default FlexColumnLayout;
