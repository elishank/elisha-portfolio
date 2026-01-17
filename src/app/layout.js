import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Elisha - Portfolio Website",
  description: "Personal portfolio website for fullstack engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
