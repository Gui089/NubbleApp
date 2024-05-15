import { Box, Icon, Text, TouchableOpacityBox } from '@Components';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AppIconBottom } from './AppIconBottom';
import { AppTabBottomTabParams } from './AppTap';
import { useAppSafeArea } from '@hooks';
import { ViewStyle } from 'react-native';

const $shadowProps: ViewStyle = {
    elevation: 9,
}

export function AppBottomTab({ state, descriptors, navigation }: BottomTabBarProps) {

    const {bottom} = useAppSafeArea();

  return (
    <Box 
        paddingTop='s16' backgroundColor='background' 
        style={[{paddingBottom: bottom}, $shadowProps]} flexDirection='row'>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const tabItem = AppIconBottom[route.name as keyof 
            AppTabBottomTabParams];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={route.name}
            activeOpacity={1}
            justifyContent='center'
            alignItems='center'
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Icon 
            color={isFocused ? 'primary' : 'backgroundContrast'}
            name={isFocused ? 
                tabItem.icon.focused : 
                tabItem.icon.onFocused
                }/>
            <Text 
                color={isFocused ? 'primary' : 'backgroundContrast'}
                semiBold 
                preset='paragraphCaption'>
                {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

