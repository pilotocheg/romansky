import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SUB_PAGES, type SubPage } from "@/lib/pages";
import { SITE_URL } from "@/lib/site";

type Props = {
  page: SubPage;
  eyebrow: string;
  heading: string;
  lead: string;
  ctaLabel: string;
  children: React.ReactNode;
};

export default function SubPageShell({
  page,
  eyebrow,
  heading,
  lead,
  ctaLabel,
  children,
}: Props) {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: page.label,
        item: `${SITE_URL}${page.path}`,
      },
    ],
  };
  const related = SUB_PAGES.filter((p) => p.path !== page.path);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Nav />
      <main className="flex-1 pt-16">
        <section className="bg-charcoal text-white">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
            <nav aria-label="Ścieżka" className="text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Strona główna
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">{page.label}</span>
            </nav>
            <span className="inline-block text-brand-sky text-sm font-semibold tracking-widest uppercase mb-4">
              {eyebrow}
            </span>
            <h1 className="font-bold leading-tight text-4xl md:text-5xl mb-6">
              {heading}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">{lead}</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 py-16 space-y-12 text-muted text-base leading-relaxed [&_h2]:text-charcoal [&_h2]:font-bold [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:leading-tight [&_h2]:mb-4 [&_h3]:text-charcoal [&_h3]:font-bold [&_h3]:text-lg [&_h3]:mb-2 [&_p+p]:mt-4 [&_ul+p]:mt-4 [&_ol+p]:mt-4 [&_p+ul]:mt-4 [&_p+ol]:mt-4 [&_strong]:text-charcoal [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_a]:text-brand-sky [&_a:hover]:text-brand-sky-dark">
          {children}
        </article>

        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="bg-surface border border-divider p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-charcoal font-bold text-xl mb-1">
                Masz pytania?
              </p>
              <p className="text-muted text-sm">
                Zadzwoń do Romana lub napisz — odpowiadamy zwykle w ciągu 24
                godzin.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+48512187280"
                className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-5 py-3 transition-colors text-sm"
              >
                <Phone size={16} />
                +48 512 187 280
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-brand-sky hover:bg-brand-sky-dark text-white font-semibold px-5 py-3 transition-colors text-sm"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface border-t border-divider">
          <div className="max-w-3xl mx-auto px-6 py-12">
            <p className="text-charcoal font-bold text-lg mb-4">Zobacz też</p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <li key={p.path}>
                  <Link
                    href={p.path}
                    className="group flex items-center justify-between gap-4 bg-white border border-divider p-5 hover:border-brand-sky transition-colors"
                  >
                    <span className="text-charcoal font-semibold">
                      {p.label}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-brand-sky shrink-0 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
