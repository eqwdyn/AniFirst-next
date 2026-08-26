import colors from "@/shared/Colors";

export function parseColors() {
  const cssVars = Object.entries(colors)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join("\n");

  return cssVars;
}
