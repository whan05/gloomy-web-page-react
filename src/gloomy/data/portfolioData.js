import { projectCover } from "../../assets/images";

export const portfolioCategoryIds = [
  "all",
  "branding",
  "design",
  "marketing",
  "strategy",
  "websites",
];

export const getPortfolioItems = (t) => [
  {
    id: 1,
    title: t("portfolio.items.digitalMarketing.title"),
    description: t("portfolio.items.digitalMarketing.description"),
    category: "marketing",
    image: projectCover,
  },
  {
    id: 2,
    title: t("portfolio.items.bookMockup.title"),
    description: t("portfolio.items.bookMockup.description"),
    category: "design",
    image: projectCover,
  },
  {
    id: 3,
    title: t("portfolio.items.ecommerceWebsite.title"),
    description: t("portfolio.items.ecommerceWebsite.description"),
    category: "websites",
    image: projectCover,
  },
  {
    id: 4,
    title: t("portfolio.items.brandIdentity.title"),
    description: t("portfolio.items.brandIdentity.description"),
    category: "branding",
    image: projectCover,
  },
  {
    id: 5,
    title: t("portfolio.items.uxStrategy.title"),
    description: t("portfolio.items.uxStrategy.description"),
    category: "strategy",
    image: projectCover,
  },
];
