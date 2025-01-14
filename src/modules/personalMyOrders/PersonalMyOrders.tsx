'use client';
import ScreenSize from '@/shared/hooks/useMediaQuery';
import {
  Container,
  PersonalDynamicSidebar,
  Section,
} from '@/shared/components';
import MyOrderProfile from './components/MyOrderProfile';

export default function PersonalMyOrders() {
  const { isOnMobile, isOnTablet } = ScreenSize();
  return (
    <Section className="pt-0 xl:pt-0 md:pt-0 pb-[80px] md:pb-[104px] xl:pb-[164px]">
      <Container>
        {(isOnMobile && (
          <PersonalDynamicSidebar
            activeOrders="active"
            childOrders={<MyOrderProfile />}
          />
        )) ||
          (isOnTablet && (
            <PersonalDynamicSidebar
              activeOrders="active"
              childOrders={<MyOrderProfile />}
            />
          )) || (
            <div className="flex items-start gap-6">
              <div className="basis-1/3 max-w-[302px]">
                <PersonalDynamicSidebar activeOrders="active" />
              </div>
              <div className="basis-3/4">
                <MyOrderProfile />
              </div>
            </div>
          )}
      </Container>
    </Section>
  );
}
