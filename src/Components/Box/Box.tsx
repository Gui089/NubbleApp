// In Box.tsx
import {
    createBox, 
    createRestyleComponent, 
    BackgroundColorProps,
    backgroundColor, 
    spacing,
    SpacingProps,
    spacingShorthand,
    layout,
    LayoutProps,
    border,
    BorderProps,
    SpacingShorthandProps
} from '@shopify/restyle';
import { Theme } from '../../theme/Theme';
import { TouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps} from 'react-native';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = 
BackgroundColorProps<Theme> & 
SpacingProps<Theme> & 
LayoutProps<Theme> & 
BorderProps<Theme> & 
SpacingShorthandProps<Theme> &
RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>([
    backgroundColor, 
    spacing, 
    spacingShorthand,
    layout, 
    border
], TouchableOpacity);