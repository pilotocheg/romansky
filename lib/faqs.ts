import { MEDICAL_REQUIREMENT } from "@/lib/site";

export const faqs = [
  {
    q: "Czy potrzebuję wcześniejszego doświadczenia, żeby zacząć szkolenie lotnicze?",
    a: "Nie, wcześniejsze doświadczenie nie jest wymagane. Przyjmujemy kompletnych początkujących.",
  },
  {
    q: "Jak długo trwa uzyskanie świadectwa kwalifikacji pilota ultralight (UL PPL)?",
    a: "Większość kursantów uzyskuje licencję pilota w ciągu 2–4 miesięcy, w zależności od częstotliwości zajęć i warunków pogodowych. Minimum to 20 godzin lotu (z instruktorem i solo) oraz zdanie egzaminów teoretycznego i praktycznego.",
  },
  {
    q: "Jakie badania lekarskie są wymagane do kursu pilota ultralight?",
    a: `Wymagane jest orzeczenie lotniczo-lekarskie: ${MEDICAL_REQUIREMENT}. Pomagamy w uzyskaniu takiego orzeczenia.`,
  },
  {
    q: "Jaki jest cennik szkolenia?",
    a: "Szkolenie do licencji pilota ULL kosztuje 15 000 zł i obejmuje teorię oraz praktykę. Istnieje możliwość rozłożenia kosztów kursu na raty. Oddzielnie płatny jest egzamin pod nadzorem czeskiego instruktora (szacunkowo ok. 3000 zł) oraz badania lotniczo-lekarskie.",
  },
  {
    q: "Jaki jest cennik wynajmu samolotu?",
    a: "Wynajem samolotu Allegro 2000 kosztuje 450 zł za godzinę lotu. Oferujemy również pakiety 10-godzinne w cenie 4000 zł.",
  },
  {
    q: "Czy mogę wynająć samolot, posiadając licencję wydaną w innym kraju?",
    a: "Tak — akceptujemy pilotów z uznanymi zagranicznymi licencjami UL lub LAPL. Przed pierwszym samodzielnym lotem wymagany jest krótki lot sprawdzający z Romanem, aby upewnić się, że znasz Allegro 2000 i lokalne procedury.",
  },
  {
    q: "Jakie są wymagania pogodowe do lotów?",
    a: "Loty ultralajtem odbywają się w warunkach VMC (widoczność wzrokowa). Lekcje mogą być przełożone w przypadku niskiej chmurności, silnego bocznego wiatru lub złej widoczności. Roman na bieżąco monitoruje warunki i zawsze stawia bezpieczeństwo na pierwszym miejscu.",
  },
  {
    q: "Jak zarezerwować lot zapoznawczy?",
    a: "Wystarczy wypełnić formularz kontaktowy powyżej, wybrać opcję 'Lot zapoznawczy' jako temat zapytania i podać preferowane terminy. Roman potwierdzi dostępność zazwyczaj w ciągu 24 godzin.",
  },
] as const;
