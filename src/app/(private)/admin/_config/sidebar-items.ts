type SidebarItem = {
  title: string;
  url?: string;
};

export type SidebarMenu = SidebarItem & {
  subMenus?: SidebarItem[];
};

export const SIDEBAR_MENUS: SidebarMenu[] = [
  {
    title: "Tableau de bord",
    url: "/",
  },
  {
    title: "Habitants",
    url: "/admin/residents",
  },
  {
    title: "Maladies",
    url: "/admin/diseases",
  },
  {
    title: "Epidemies",
    url: "/admin/epidemics",
  },
  {
    title: "Centres de santé",
    url: "/admin/health-centers",
  },
  {
    title: "Métiers",
    url: "/admin/professions",
  },
  {
    title: "Projets",
    url: "/admin/projects",
  },
  {
    title: "Promoteurs",
    url: "/admin/promoters",
  },
  {
    title: "Services medicaux",
    url: "/admin/medical-services",
  },
  {
    title: "Pharmacies",
    url: "/admin/pharmacies",
  },
  {
    title: "Informations",
    url: "/admin/infos",
  },
];
