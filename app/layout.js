import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Hive Flow - Automatisation pour Artisans, Associations et Entreprises',
  description: 'Simplifiez vos processus métier grâce à l\'automatisation intelligente.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}