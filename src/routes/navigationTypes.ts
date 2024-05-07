import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "./Routes";
import { AppStackParams } from "./AppStack";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }

export type AppScreenProps<RoutName extends keyof AppStackParams> = NativeStackScreenProps<AppStackParams, RoutName>

export type AuthScreenProps<RoutName extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, RoutName>