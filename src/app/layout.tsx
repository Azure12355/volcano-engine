// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // 引入全局样式

export const metadata: Metadata = {
  title: "智巨人 - AI时代的商业新物种",
  description: "让小企业成为AI时代的小巨人",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Font Awesome CDN for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer" />
      </head>
      <body>{children}</body>
    </html>
  );
}