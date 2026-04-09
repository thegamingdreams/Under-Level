import "./globals.css";

export const metadata = {
  title: "Under Level Roofing",
  description: "Honest roofing work with fair prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
