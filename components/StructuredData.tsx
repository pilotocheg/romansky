import { SITE_URL } from "@/lib/site";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "SportsActivityLocation"],
        "@id": `${SITE_URL}/#business`,
        name: "RomanSky Aviation",
        alternateName: ["RomanSky", "Szkoła Lotnicza RomanSky"],
        description:
          "Szkolenie lotnicze do licencji pilota ULL (program czeski LAA ČR) oraz wynajem samolotu Allegro 2000 w Pile. Certyfikowany instruktor Roman Jałowiecki. Szkolenie ultralajtem w Wielkopolsce od 2015 roku.",
        url: SITE_URL,
        telephone: "+48512187280",
        email: "romansky@wp.pl",
        foundingDate: "2015",
        founder: {
          "@type": "Person",
          name: "Roman Jałowiecki",
          jobTitle: "Instruktor Lotniczy",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Lotnicza 12",
          addressLocality: "Piła",
          postalCode: "64-920",
          addressRegion: "Wielkopolskie",
          addressCountry: "PL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 53.1672,
          longitude: 16.7408,
        },
        hasMap: "https://maps.google.com/?q=Lotnisko+Piła+EPPI",
        openingHours: "Mo-Sa 08:00-18:00",
        priceRange: "400 PLN/godz.",
        currenciesAccepted: "PLN",
        paymentAccepted: "Gotówka, Przelew",
        areaServed: [
          {
            "@type": "City",
            name: "Piła",
          },
          {
            "@type": "AdministrativeArea",
            name: "Wielkopolskie",
          },
          {
            "@type": "Country",
            name: "Polska",
          },
        ],
        knowsAbout: [
          "szkolenie lotnicze",
          "pilot ultralight",
          "UL PPL",
          "szkolenie ultralajtem",
          "lot samolotem",
          "nauka latania",
          "Allegro 2000",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Usługi Lotnicze RomanSky",
          itemListElement: [
            {
              "@type": "Offer",
              "@id": `${SITE_URL}/#offer-szkolenie`,
              name: "Szkolenie Lotnicze do Licencji ULL (program czeski)",
              description:
                "Kurs na czeską Licencję Pilota Samolotów Ultralekkich (ULL) według programu LAA ČR. Cena: 14 000 zł (teoria + praktyka). Egzamin u inspektora czeskiego opłacany oddzielnie.",
              url: `${SITE_URL}/#programs`,
              category: "Szkolenie lotnicze",
              price: "14000",
              priceCurrency: "PLN",
            },
            {
              "@type": "Offer",
              "@id": `${SITE_URL}/#offer-wynajem`,
              name: "Wynajem Samolotu Allegro 2000",
              description:
                "Wynajem ultralajtu Allegro 2000 dla posiadaczy licencji ULL lub równoważnej w Pile.",
              url: `${SITE_URL}/#fleet`,
              price: "400",
              priceCurrency: "PLN",
              unitText: "godz.",
            },
            {
              "@type": "Offer",
              "@id": `${SITE_URL}/#offer-lot-zapoznawczy`,
              name: "Lot Zapoznawczy",
              description:
                "30-minutowy lot próbny dla początkujących — idealne na prezent lub pierwszy krok do licencji pilota.",
              url: `${SITE_URL}/#contact`,
            },
          ],
        },
        image: `${SITE_URL}/og-image.jpg`,
        logo: `${SITE_URL}/og-image.jpg`,
        sameAs: ["https://www.facebook.com/profile.php?id=100048673526562"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "RomanSky Aviation",
        description: "Szkolenie lotnicze i wynajem samolotu w Pile",
        inLanguage: "pl",
        publisher: {
          "@id": `${SITE_URL}/#business`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Czy potrzebuję wcześniejszego doświadczenia, żeby zacząć szkolenie lotnicze?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nie, wcześniejsze doświadczenie nie jest wymagane. Przyjmujemy kompletnych początkujących. Przed pierwszą lekcją latania wykonasz krótką samoocenę zdrowotną oraz wstępne zajęcia teoretyczne z Romanem.",
            },
          },
          {
            "@type": "Question",
            name: "Ile kosztuje szkolenie na pilota ultralight?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Szkolenie do licencji ULL (program czeski) kosztuje 14 000 zł — obejmuje teorię i praktykę. Koszt egzaminu jest pobierany oddzielnie przez inspektora czeskiego. Wynajem samolotu Allegro 2000 kosztuje 400 zł/godz.",
            },
          },
          {
            "@type": "Question",
            name: "Jak długo trwa uzyskanie licencji pilota ULL?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Większość kursantów uzyskuje licencję w ciągu 3–6 miesięcy, w zależności od częstotliwości lekcji i warunków pogodowych. Program czeski LAA ČR obejmuje część teoretyczną i praktyczną zakończoną egzaminem przed inspektorem czeskim.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
