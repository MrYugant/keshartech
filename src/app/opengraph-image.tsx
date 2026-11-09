import { renderOgImage } from "@/lib/og";

export const alt = "Keshar Tech — We build what's next";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Keshar Tech", title: "We build what's next." });
}
