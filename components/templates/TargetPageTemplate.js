import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

export default function TargetPageTemplate({ data }) {
  const { theme, hero, about, concept, automation, offers, testimonials, cta } = data;

  return (
    <div data-theme={theme}>
      {/* Hero Section */}
      <Section background="theme" pattern="hexagon" className="pt-20 lg:pt-28 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-theme-100)] text-[var(--color-theme-700)] text-sm font-medium mb-6">
                {hero.badge.icon} {hero.badge.text}
              </div>

              {/* Titre */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                {hero.title}
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8">
                {hero.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="theme" size="lg" href="https://app.hiveflow.com">
                  Acceder a Hive Flow
                </Button>
                <Button variant="outline" size="lg" href="#offres">
                  Voir les tarifs
                </Button>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative animate-float">
              <div className="aspect-square bg-gradient-to-br from-[var(--color-theme-400)] to-[var(--color-theme-600)] rounded-3xl opacity-20 hexagon-shape"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Qui sommes-nous */}
      <Section background="white" narrow>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            {about.paragraph1}
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {about.paragraph2}
          </p>
        </div>
      </Section>

      {/* Section Notre concept */}
      <Section background="gray" pattern="hexagon">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Notre concept
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              {concept.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {concept.features.map((feature, index) => (
              <Card key={index} variant="hexagon" hover className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Section Automatisation */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Qu'est-ce que l'automatisation ?
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                {automation.paragraph1}
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                {automation.paragraph2}
              </p>

              {/* Callout */}
              <div className="bg-[var(--color-theme-50)] border-l-4 border-[var(--color-theme-500)] p-6 rounded-lg mb-6">
                <p className="text-[var(--color-theme-900)] font-semibold mb-2">
                  Le saviez-vous ?
                </p>
                <p className="text-[var(--color-theme-800)]">
                  {automation.fact}
                </p>
              </div>

              {/* Bloc RAG si present (entreprises uniquement) */}
              {automation.rag && (
                <div className="bg-neutral-50 border-l-4 border-neutral-400 p-6 rounded-lg">
                  <p className="text-neutral-900 font-semibold mb-2">
                    {automation.rag.title}
                  </p>
                  <p className="text-neutral-700 mb-3">
                    {automation.rag.description}
                  </p>
                  <p className="text-neutral-700">
                    <strong>Benefices concrets :</strong> {automation.rag.benefits}
                  </p>
                </div>
              )}
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[var(--color-theme-400)] to-[var(--color-theme-600)] rounded-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Nos offres */}
      <Section background="gray" id="offres">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Nos offres
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Choisissez la formule qui correspond a vos besoins. Tous nos plans incluent un essai gratuit de 14 jours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card
                key={index}
                variant={offer.popular ? 'theme' : 'elevated'}
                className={`relative ${offer.popular ? 'ring-2 ring-[var(--color-theme-500)] md:scale-105' : ''}`}
              >
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-theme-500)] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Le plus populaire
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {offer.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">{offer.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-neutral-900">{offer.price}</span>
                    {offer.period && <span className="text-neutral-600 ml-1">{offer.period}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-[var(--color-theme-500)] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={offer.popular ? 'theme' : 'outline'}
                  className="w-full"
                  href="https://app.hiveflow.com"
                >
                  {offer.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Section Avis clients */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-neutral-600">
              Decouvrez ce que nos utilisateurs disent de Hive Flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="elevated">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-neutral-700 italic mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex text-primary-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="theme" pattern="honeycomb">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            {cta.title}
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            {cta.description}
          </p>
          <Button variant="theme" size="lg" href="https://app.hiveflow.com" className="mb-4">
            {cta.buttonText}
          </Button>
          <p className="text-sm text-neutral-600">
            Sans engagement - Sans carte bancaire
          </p>
        </div>
      </Section>
    </div>
  );
}
