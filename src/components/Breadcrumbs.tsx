import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/lib/site";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? `${SITE.url}${c.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#555] mb-8">
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={11} className="text-[#333]" />}
            {crumb.href && i < crumbs.length - 1 ? (
              <Link href={crumb.href} className="hover:text-[#C9A84C] transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className={i === crumbs.length - 1 ? "text-[#999]" : ""}>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
