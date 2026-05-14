export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "SportsActivityLocation"],
        "@id": "https://romansky.pl/#business",
        name: "RomanSky Aviation",
        alternateName: ["RomanSky", "Szkoła Lotnicza RomanSky"],
        description:
          "Szkolenie lotnicze na pilota ultralight (UL PPL) oraz wynajem samolotu Allegro 2000 w Pile. Certyfikowany instruktor Roman Jałowiecki. Szkolenie ultralajtem w Wielkopolsce od 2010 roku.",
        url: "https://romansky.pl",
        telephone: "+48XXXXXXXXX",
        email: "info@romansky.pl",
        foundingDate: "2010",
        founder: {
          "@type": "Person",
          name: "Roman Jałowiecki",
          jobTitle: "Instruktor Lotniczy",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Lotnicza 1",
          addressLocality: "Piła",
          postalCode: "64-920",
          addressRegion: "Wielkopolska",
          addressCountry: "PL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 53.1672,
          longitude: 16.7408,
        },
        hasMap: "https://maps.google.com/?q=Lotnisko+Piła+EPPI",
        openingHours: "Mo-Sa 08:00-18:00",
        priceRange: "500 PLN/godz.",
        currenciesAccepted: "PLN",
        paymentAccepted: "Gotówka, Przelew",
        areaServed: [
          {
            "@type": "City",
            name: "Piła",
          },
          {
            "@type": "AdministrativeArea",
            name: "Wielkopolska",
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
              "@id": "https://romansky.pl/#offer-szkolenie",
              name: "Szkolenie Lotnicze UL PPL",
              description:
                "Kurs na świadectwo kwalifikacji pilota ultralajtu. Szkolenie lotnicze prowadzone przez certyfikowanego instruktora w Pile.",
              url: "https://romansky.pl/#programs",
              category: "Szkolenie lotnicze",
              eligibleRegion: {
                "@type": "Country",
                name: "Polska",
              },
            },
            {
              "@type": "Offer",
              "@id": "https://romansky.pl/#offer-wynajem",
              name: "Wynajem Samolotu Allegro 2000",
              description:
                "Wynajem ultralajtu Allegro 2000 dla posiadaczy licencji UL PPL w Pile.",
              url: "https://romansky.pl/#fleet",
              price: "500",
              priceCurrency: "PLN",
              unitText: "godz.",
            },
            {
              "@type": "Offer",
              "@id": "https://romansky.pl/#offer-lot-zapoznawczy",
              name: "Lot Zapoznawczy",
              description:
                "30-minutowy lot próbny dla początkujących — idealne na prezent lub pierwszy krok do licencji pilota.",
              url: "https://romansky.pl/#contact",
            },
          ],
        },
        image: "https://romansky.pl/og-image.jpg",
        logo: "https://romansky.pl/og-image.jpg",
        sameAs: [
          "https://www.facebook.com/romansky",
          "https://www.instagram.com/romansky",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://romansky.pl/#website",
        url: "https://romansky.pl",
        name: "RomanSky Aviation",
        description: "Szkolenie lotnicze i wynajem samolotu w Pile",
        inLanguage: "pl",
        publisher: {
          "@id": "https://romansky.pl/#business",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://romansky.pl/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://romansky.pl/#faq",
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
              text: "Koszt szkolenia zależy od indywidualnego tempa nauki i liczby godzin. Wynajem samolotu Allegro 2000 kosztuje 500 zł/godz. Skontaktuj się z nami, aby omówić indywidualną wycenę całego kursu.",
            },
          },
          {
            "@type": "Question",
            name: "Jak długo trwa uzyskanie licencji pilota ultralight (UL PPL)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Większość kursantów uzyskuje licencję w ciągu 3–6 miesięcy, w zależności od częstotliwości lekcji i warunków pogodowych. Minimum to 30 godzin lotu (z instruktorem i solo) oraz zdanie egzaminu teoretycznego z 9 modułów.",
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
