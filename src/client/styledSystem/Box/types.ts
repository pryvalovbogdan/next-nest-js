import {
  BackgroundProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  StylesProps,
  BorderProps,
  FontSizeProps,
  LineHeightProps,
  FontWeightProps,
} from 'styled-system';
import { CSSProp } from 'styled-components';

export interface BoxInterface
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    FlexboxProps,
    ShadowProps,
    BackgroundProps,
    GridProps,
    PositionProps,
    BorderProps,
    LineHeightProps,
    FontWeightProps,
    FontSizeProps {
  __css?: StylesProps;
  theme: object;
  variant?: string;
  tx?: string;
  css?: CSSProp;
}
