import "./globals.css";

export const metadata = {
  title: "HooBank",
  description: "Online Bank | Hoo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
