import { PersonalReviews } from '@/modules';
import {
  Breadcrumbs,
  ColorSpot,
  Container,
  PageTitle,
  PageWrapper,
} from '@/shared/components';

export default function Reviews() {
  return (
    <PageWrapper>
      <ColorSpot />
      <Breadcrumbs
        containerClasses={'xl:mb-[98px]'}
        homeElement={<span>Головна</span>}
      />
      <Container>
        <PageTitle stylesPageTitle={'hidden xl:block'} name={'Відгуки'} />
        <PersonalReviews />
      </Container>
    </PageWrapper>
  );
}