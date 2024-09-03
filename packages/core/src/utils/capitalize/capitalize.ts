export function capitalize(string: string): string {
  const clean = string.toLowerCase();
  return clean.charAt(0).toUpperCase() + clean.slice(1, clean.length);
}
