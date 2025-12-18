import TargetPageTemplate from '@/components/templates/TargetPageTemplate';
import { associationsData } from '@/data/associations';

export const metadata = {
  title: 'Hive Flow pour Associations - Automatisez votre gestion',
  description: 'Simplifiez la gestion de votre association et mobilisez vos équipes plus efficacement.',
};

export default function AssociationsPage() {
  return <TargetPageTemplate data={associationsData} />;
}
