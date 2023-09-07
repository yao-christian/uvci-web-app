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
  // {
  //   title: 'Colis',
  //   subMenus: [
  //     { title: 'Liste colis', url: '/parcels/parcel-list' },
  //     { title: 'Ajouter un colis', url: '/parcels/add-parcel' },
  //   ],
  // },
  {
    title: "Habitants",
    subMenus: [
      { title: "Liste habitants", url: "/admin/habitants/liste-habitants" },
      {
        title: "Ajouter un habitant",
        url: "/admin/habitants/nouveau-habitant",
      },
    ],
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
