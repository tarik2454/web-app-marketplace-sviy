import { Breadcrumbs, ColorSpot, PageWrapper } from '@/shared/components';
import { CatalogueProducts } from '@/modules';

export default function Catalogue() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs homeElement={<span>Головна</span>} />
      <CatalogueProducts displayTitle="block" />
    </PageWrapper>
  );
}
