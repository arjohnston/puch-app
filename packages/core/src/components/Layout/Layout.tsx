import styled from '@emotion/styled';
import React from 'react';
import { Color } from '../../types';
import {
  AlignItems,
  Display,
  Flex,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  Overflow,
  Position,
} from './types';

export {
  AlignItems,
  Display,
  Flex,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  Overflow,
  Position,
};

export interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  fullHeight?: boolean;
  display?: Display;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  overflow?: Overflow;
  position?: Position;
  flex?: Flex;
  backgroundColor?: Color.Any;
}

const StyledLayout = styled.div(
  ({
    fullWidth,
    fullHeight,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    overflow,
    position,
    flex,
    backgroundColor,
  }: Omit<LayoutProps, 'children'>) => ({
    width: fullWidth ? '100%' : 'auto',
    height: fullHeight ? '100%' : 'auto',
    display,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    overflow,
    position,
    flex,
    backgroundColor,
  }),
);

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return <StyledLayout {...props}>{children}</StyledLayout>;
};

export default Layout;
