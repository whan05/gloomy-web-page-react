export const portfolioCategoryIds = [
  "all",
  "branding",
  "design",
  "websites",
];

const projectImages = {
  bookMockup: {
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    galleryPrimary:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    gallerySecondary:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
  },
  ecommerceWebsite: {
    cover:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    galleryPrimary:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
    gallerySecondary:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
  },
  brandIdentity: {
    cover:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    galleryPrimary:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=80",
    gallerySecondary:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
  },
};

export const getPortfolioItems = (t) => [
  {
    id: 1,
    slug: "book-mockup",
    route: "/our-work/book-mockup",
    title: t("portfolio.items.bookMockup.title"),
    description: t("portfolio.items.bookMockup.description"),
    summary: t("portfolio.items.bookMockup.summary"),
    briefLead: t("portfolio.items.bookMockup.briefLead"),
    briefBody: t("portfolio.items.bookMockup.briefBody"),
    date: t("portfolio.items.bookMockup.date"),
    client: t("portfolio.items.bookMockup.client"),
    servicesLabel: t("portfolio.items.bookMockup.servicesLabel"),
    artDirector: t("portfolio.items.bookMockup.artDirector"),
    websiteUrl: "https://example.com/book-mockup",
    category: "design",
    image: projectImages.bookMockup.cover,
    galleryPrimary: projectImages.bookMockup.galleryPrimary,
    gallerySecondary: projectImages.bookMockup.gallerySecondary,
  },
  {
    id: 2,
    slug: "ecommerce-website",
    route: "/our-work/ecommerce-website",
    title: t("portfolio.items.ecommerceWebsite.title"),
    description: t("portfolio.items.ecommerceWebsite.description"),
    summary: t("portfolio.items.ecommerceWebsite.summary"),
    briefLead: t("portfolio.items.ecommerceWebsite.briefLead"),
    briefBody: t("portfolio.items.ecommerceWebsite.briefBody"),
    date: t("portfolio.items.ecommerceWebsite.date"),
    client: t("portfolio.items.ecommerceWebsite.client"),
    servicesLabel: t("portfolio.items.ecommerceWebsite.servicesLabel"),
    artDirector: t("portfolio.items.ecommerceWebsite.artDirector"),
    websiteUrl: "https://example.com/ecommerce-website",
    category: "websites",
    image: projectImages.ecommerceWebsite.cover,
    galleryPrimary: projectImages.ecommerceWebsite.galleryPrimary,
    gallerySecondary: projectImages.ecommerceWebsite.gallerySecondary,
  },
  {
    id: 3,
    slug: "brand-identity",
    route: "/our-work/brand-identity",
    title: t("portfolio.items.brandIdentity.title"),
    description: t("portfolio.items.brandIdentity.description"),
    summary: t("portfolio.items.brandIdentity.summary"),
    briefLead: t("portfolio.items.brandIdentity.briefLead"),
    briefBody: t("portfolio.items.brandIdentity.briefBody"),
    date: t("portfolio.items.brandIdentity.date"),
    client: t("portfolio.items.brandIdentity.client"),
    servicesLabel: t("portfolio.items.brandIdentity.servicesLabel"),
    artDirector: t("portfolio.items.brandIdentity.artDirector"),
    websiteUrl: "https://example.com/brand-identity",
    category: "branding",
    image: projectImages.brandIdentity.cover,
    galleryPrimary: projectImages.brandIdentity.galleryPrimary,
    gallerySecondary: projectImages.brandIdentity.gallerySecondary,
  },
];

export const getPortfolioItemBySlug = (t, slug) =>
  getPortfolioItems(t).find((item) => item.slug === slug);
