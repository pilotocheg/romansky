import { faqs } from "@/lib/faqs";
import { SITE_URL } from "@/lib/site";

const BUSINESS_IMAGE = `${SITE_URL}/images/hero-bg.jpeg`;

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
        openingHours: "Mo-Su 00:00-24:00",
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
        image: [BUSINESS_IMAGE, `${SITE_URL}/images/fleet.jpeg`],
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
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
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
