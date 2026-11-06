import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Parks Walks",
  description: "Reliable, insured pet care for Chicago's pets.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Chewy&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"/>
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}