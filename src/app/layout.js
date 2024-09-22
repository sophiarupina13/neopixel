import "./globals.css";

export const metadata = {
  title: "NeoPixel3D",
  description:
    "Первый отечественный фотополимерный 3D-принтер повышенной точности",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
