'use client';

import Select from 'react-select';
import { twMerge } from 'tailwind-merge';

type Props = {
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  id: string;
  dropdownName?: string;
  wrapperClassName?: string;
  controlClassName?: string;
  optionClassName?: string;
  menuClassName?: string;
  dropdownIndicatorClassName?: string;
  onChange: any;
};

export default function Dropdown({
  options,
  placeholder,
  id,
  dropdownName,
  wrapperClassName,
  controlClassName,
  optionClassName,
  menuClassName,
  dropdownIndicatorClassName,
  onChange,
}: Props) {
  return (
    <div className={twMerge('flex flex-col gap-4 mt-0', wrapperClassName)}>
      <label htmlFor={id}>{dropdownName}</label>
      <div className="px-4 py-1 border-[1px] border-slate-300 rounded-default bg-white ">
        <Select
          classNames={{
            control: () => {
              return twMerge('font-lato', controlClassName);
            },
            menu: () => {
              return twMerge(
                'w-full min-w-[300px] mt-[14px] bg-neutral-50 border-x-[1px] border-b-[1px] border-slate-300 rounded-default overflow-hidden bg-red-500 absolute -left-[15px] xl:overflow-auto',
                menuClassName
              );
            },
            option: () => {
              return twMerge(
                'px-5 py-2 bg-neutral-50 font-lato border-b-[1px] border-slate-300 last-of-type:border-b-0',
                optionClassName
              );
            },

            dropdownIndicator: () => {
              return twMerge(
                'text-[#212121] font-thin',
                dropdownIndicatorClassName
              );
            },
          }}
          unstyled={true}
          options={options}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
