import TargetPageTemplate from '@/components/templates/TargetPageTemplate';
import { artisansData } from '@/data/artisans';

export const metadata = {
  title: 'Hive Flow pour Artisans - Automatisez votre gestion',
  description: 'Gagnez du temps sur vos tâches administratives et concentrez-vous sur votre savoir-faire.',
};

export default function ArtisansPage() {
  return <TargetPageTemplate data={artisansData} />;
}
