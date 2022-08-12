import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  position,
  border,
  shadow,
  background,
} from 'styled-system';
import styled from 'styled-components';
import css, { get } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { BoxInterface } from './types';

const base = (props: BoxInterface) => css(props.__css)(props.theme);
const variant = ({ theme, variant = '', tx = 'variants' }: BoxInterface) =>
  css(get(theme, tx + '.' + variant, get(theme, variant)))(theme);

export const Box = styled('div').withConfig({
  shouldForwardProp: prop => shouldForwardProp(prop),
})<BoxInterface>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  (props: BoxInterface) => props.css,
  compose(space, layout, typography, color, flexbox, position, border, shadow, background),
);
