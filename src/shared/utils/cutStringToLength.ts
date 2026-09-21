export function cutStringToLength(s: string, length: number) {
  return s.length <= length ? s : s.slice(0, length) + "...";
}
