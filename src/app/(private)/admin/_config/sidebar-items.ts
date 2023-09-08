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
    url: "/admin/maladies",
  },
  {
    title: "Epidemies",
    url: "/admin/epidemies",
  },
  {
    title: "Centres de santé",
    url: "/admin/centres-sante",
  },
  {
    title: "Métiers",
    url: "/admin/professions",
  },
  {
    title: "Projets",
    url: "/admin/projets",
  },
  {
    title: "Promoteurs",
    url: "/admin/promoteurs",
  },
  {
    title: "Services medicaux",
    url: "/services-medicaux",
  },
  {
    title: "Pharmacies",
    url: "/admin/pharmacies",
  },
  {
    title: "Informations",
    url: "/admin/informations",
  },
  {
    title: "Paramètres",
    url: "/admin/settings",
  },
];
