import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme/Theme";

export function useAppTheme() {
    return useTheme<Theme>();
}