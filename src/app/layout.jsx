import './globals.css'

export const metadata = {
  title: 'IMDb',
  description: 'IMDB Movies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
