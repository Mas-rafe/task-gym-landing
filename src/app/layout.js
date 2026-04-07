// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Power Your Potential | Gym & Fitness",
  description: "Transform your body and unlock your true potential",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans">
      <body className="min-h-screen bg-white antialiased">
        
        {children}
      </body>
    </html>
  );
}