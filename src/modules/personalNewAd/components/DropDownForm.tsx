'use client';

import Select from 'react-select';
import { twMerge } from 'tailwind-merge';
import { FormikProps} from 'formik';

type Props = {
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  id: string;
  name: string;
  dropdownName?: string;
  formik: FormikProps<any>;
  wrapperClassName?: string;
  stylesInput?: string;
  controlClassName?: string;
  optionClassName?: string;
  menuClassName?: string;
  dropdownIndicatorClassName?: string;
  onChange: (selectedOption: { value: string; label: string } | null) => void;
};

export default function DropDownForm({
  options,
  placeholder,
  id,
  name,
  formik,
  dropdownName,
  wrapperClassName,
  stylesInput,
  controlClassName,
  optionClassName,
  menuClassName,
  dropdownIndicatorClassName,
  onChange,
}: Props) {
  const error = formik.touched[name] && formik.errors[name];

  return (
    <div className={twMerge('flex flex-col gap-4 mt-0', wrapperClassName)}>
      {dropdownName ? <label htmlFor={id}>{dropdownName}</label> : null}

      <div
        className={twMerge(
          'px-4 py-1 border-[1px] border-slate-300 rounded-default bg-white',
          stylesInput
        )}
      >
        <Select
          classNames={{
            control: () => {
              return twMerge('font-lato', controlClassName);
            },
            menu: () => {
              return twMerge(
                'w-full mt-[14px] bg-neutral-50 border-x-[1px] border-b-[1px] border-slate-300 rounded-default overflow-hidden absolute -left-[16px] xl:overflow-auto',
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
          onChange={selectedOption => onChange(selectedOption)}
        />
      </div>
      {error && (
        <p className="text-[#C60000] text-end text-sm">{String(error)}</p>
      )}
    </div>
  );
}