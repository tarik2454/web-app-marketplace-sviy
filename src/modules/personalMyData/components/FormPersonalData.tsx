import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/auth/authSlice';
import { updateProfileThunk } from '@/redux/auth/operations';

import validationSchemaFormikProfile from '../helpers/validationSchemaFormikProfile';
import phoneFormattingBeforeSending from '@/shared/helpers/phoneFormattingBeforeSending';

import { FormInput } from '@/shared/components';
import ButtonProfile from './ButtonProfile';

type FormPersonalDataValues = {
  full_name: string | undefined;
  lastName: string;
  address: string | undefined;
  phone: string | undefined;
};

export default function FormPersonalData() {
  const { full_name, phone, address } = useAppSelector(selectAuth);

  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState('');
  const [remainingNames, setRemainingNames] = useState('');

  useEffect(() => {
    if (full_name) {
      const nameParts = full_name.split(' ');
      if (nameParts.length > 0) {
        setFirstName(nameParts[0]);
        setRemainingNames(nameParts.slice(1).join(' '));
      }
    }
  }, [full_name]);

  const initialValues: FormPersonalDataValues = {
    full_name: firstName,
    lastName: remainingNames,
    address: address || '',
    phone: phone || '',
  };

  const handleSubmit = (values: FormPersonalDataValues) => {
    const { full_name, lastName, ...formData } = values;

    const combinedFullName = `${full_name} ${lastName}`.trim();

    formData.phone = phoneFormattingBeforeSending(formData, 'phone');

    const dataToSubmit = { ...formData, full_name: combinedFullName };

    dispatch(updateProfileThunk(dataToSubmit))
      .unwrap()
      .then(() => {
        toast.success('toast.success');
      })
      .catch(error => {
        toast.error(error);
      });
  };

  const formik = useFormik<FormPersonalDataValues>({
    initialValues,
    validationSchema: validationSchemaFormikProfile,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return (
    <>
      <h3 className="text-2xl xl:mb-7 md:mb-10 mb-6">Персональные данные</h3>

      <form className="flex flex-col gap-10" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-6">
          <FormInput
            formik={formik}
            name="full_name"
            label={'Имя'}
            classNameLogin="mb-2 ml-0"
            placeholder={'Имя'}
            inputType="text"
          />
          <FormInput
            formik={formik}
            name="lastName"
            label={'Фамилия'}
            classNameLogin="mb-2 ml-0"
            placeholder={'Фамилия'}
            inputType="text"
          />
          <FormInput
            formik={formik}
            name="address"
            label={'Адрес'}
            classNameLogin="mb-2 ml-0"
            placeholder={'Адрес'}
            inputType="text"
          />
          <FormInput
            formik={formik}
            name="phone"
            label={'Телефон'}
            classNameLogin="mb-2 ml-0"
            inputType="tel"
          />
        </div>

        <ButtonProfile />
      </form>
    </>
  );
}
