import ScreenSize from '@/shared/hooks/useMediaQuery';

import FormPersonalData from './FormPersonalData';
import FormLoginPassword from './FormLoginPassword';

export default function FormikProfile() {
  const { isOnMobile, isOnTablet } = ScreenSize();

  return (
    <>
      {(isOnMobile && (
        <div className="flex flex-col gap-6 pb-8 pt-8">
          <FormPersonalData />
          <FormLoginPassword />
        </div>
      )) ||
        (isOnTablet && (
          <div className="flex md:gap-4 pb-10 pt-10 items-start ">
            <div className="basis-1/2 max-w-[344px]">
              <FormPersonalData />
            </div>
            <div className="basis-1/2">
              <FormLoginPassword />
            </div>
          </div>
        )) || (
          <div className="flex w-full xl:gap-[132px] ">
            <div className="basis-1/2">
              <FormPersonalData />
            </div>
            <div className="basis-1/2">
              <FormLoginPassword />
            </div>
          </div>
        )}
    </>
  );
}
