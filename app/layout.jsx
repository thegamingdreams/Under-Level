export const metadata = {
  title: "Under Level Roofing",
  description:
    "Roofing and gutter services with fair prices, honest work, and quality materials.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
