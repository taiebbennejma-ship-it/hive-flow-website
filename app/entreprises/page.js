import TargetPageTemplate from '@/components/templates/TargetPageTemplate';
import { entreprisesData } from '@/data/entreprises';

export const metadata = {
  title: 'Hive Flow pour Entreprises - Automatisez vos processus',
  description: 'Optimisez vos processus métier et accélérez votre croissance avec des workflows intelligents.',
};

export default function EntreprisesPage() {
  return <TargetPageTemplate data={entreprisesData} />;
}
