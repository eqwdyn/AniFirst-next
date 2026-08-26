import Colors from "@/shared/Colors";
import { TColorsKeys } from "@/shared/types/ColorsKeys.type";

export function useColor(colorName: TColorsKeys) {
  return Colors[colorName];
}
