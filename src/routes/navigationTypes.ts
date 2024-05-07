import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Routes";
import { AppStackParams } from "./AppStack";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { AppTabBottomTabParams } from "./AppTap";


declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }

export type AppScreenProps<RoutName extends keyof AppStackParams> = NativeStackScreenProps<AppStackParams, RoutName>

export type AuthScreenProps<RoutName extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, RoutName>

export type AppTabScreenProps<RoutName extends keyof AppTabBottomTabParams> = CompositeScreenProps<
    BottomTabScreenProps<AppTabBottomTabParams, RoutName>,
    NativeStackScreenProps<AppStackParams, 'AppTabNavigator'>
>