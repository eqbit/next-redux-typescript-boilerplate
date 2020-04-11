declare namespace IBreadcrumbs {
  interface Item {
    label: string;
    path: string;
  }
  
  interface Props {
    breadcrumbs: Item[];
  }
  
  interface BreadcrumbItemProps {
    label: string;
    index: number;
    total: number;
    link: string;
  }
}

export { IBreadcrumbs };
