import styled from '@emotion/styled';
import React from 'react';

export enum Display {
  Block = 'block',
  Flex = 'flex',
  Grid = 'grid',
}

export enum JustifyContent {
  Center = 'center',
  FlexEnd = 'flex-end',
  FlexStart = 'flex-start',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
}

export enum AlignItems {
  Center = 'center',
  FlexEnd = 'flex-end',
  FlexStart = 'flex-start',
  Stretch = 'stretch',
}

export enum FlexDirection {
  Column = 'column',
  Row = 'row',
}

export enum FlexWrap {
  Wrap = 'wrap',
  NoWrap = 'nowrap',
}

export enum Overflow {
  Hidden = 'hidden',
  Scroll = 'scroll',
  Visible = 'visible',
}

export enum Position {
  Absolute = 'absolute',
  Fixed = 'fixed',
  Relative = 'relative',
  Static = 'static',
}

export enum Flex {
  One = '1',
}

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
  }),
);

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return <StyledLayout {...props}>{children}</StyledLayout>;
};

export default Layout;
