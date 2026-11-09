import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { brand } from "@/config/theme";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

let logoDataUri: Promise<string> | undefined;
function getLogo() {
  logoDataUri ??= readFile(path.join(process.cwd(), "public/images/brand/logo-dark.svg")).then(
    (buf) => `data:image/svg+xml;base64,${buf.toString("base64")}`,
  );
  return logoDataUri;
}

/** Branded social card shared by every route's opengraph-image. */
export async function renderOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const logo = await getLogo();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: brand.black,
          backgroundImage: `radial-gradient(circle at 85% 110%, ${brand.orange}55, transparent 55%)`,
          color: brand.paper,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" height={86} width={200} />
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: brand.orange }}>{eyebrow}</div>
        </div>
        <div style={{ display: "flex", fontSize: title.length > 48 ? 64 : 80, fontWeight: 700, letterSpacing: -2, lineHeight: 1.02, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: brand.muted }}>
          <span>{siteConfig.tagline}</span>
          <span>keshartech.com</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
