import Image, { type ImageProps } from "next/image";

export function AppImage(props: ImageProps) {
  return <Image {...props} suppressHydrationWarning />;
}
