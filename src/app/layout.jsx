import Header from './components/Header';
import './globals.css';
import Providers from './Providers';

export const metadata = {
  title: 'IMDb',
  description: 'IMDB Movies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
