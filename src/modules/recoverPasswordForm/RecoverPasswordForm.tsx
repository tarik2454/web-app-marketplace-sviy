'use client';
import { FormInput, OrangeButton } from '@/shared/components';
import { useFormik } from 'formik';
import { MouseEventHandler, useState } from 'react';
import * as Yup from 'yup';
import Modal from '@/shared/components/Modal/Modal';
import PasswordChanged from '@/shared/components/ModalPassChanged/PassChanged';

type Props = {
  recoverPassword: 'page' | 'burger';
  signinClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function RecoverPasswordForm({
  recoverPassword,
  signinClick,
}: Props) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    setShowModal(true);
    setIsFormSubmitted(true);
  };

  const formik = useFormik({
    initialValues: {
      number: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      number: Yup.number().required('Потрібен код підтвердження'),
      password: Yup.string()
        .min(8, 'Пароль повинен мати довжину не менше 8 символів')
        .required('Потрібен пароль'),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <>
      <form
        className="flex flex-col justify-center max-w-[400px] mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <div className="pb-2">
          <FormInput
            formik={formik}
            id="number"
            label={'Код підтвердження'}
            inputType="text"
          />
        </div>

        <button className="flex justify-start text-sm leading-tight text-blue-90 pl-5 pb-5">
          Надіслати повторно
        </button>

        <div className="pb-2 d">
          <FormInput
            formik={formik}
            id="password"
            label={'Ведіть новий пароль'}
            inputType="password"
          />
        </div>

        <p className="text-xs leading-none text-blue-900">
          Пароль повинен мати мінімум 8 символів. Для надійності пароля додайте
          великі, малі літери та цифри.
        </p>

        <div className="w-28 mt-10 mx-auto pb-6 flex justify-center">
          <OrangeButton onClick={() => {}} type="submit">
            Підтвердити
          </OrangeButton>
        </div>
      </form>
      {isFormSubmitted && showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <PasswordChanged signinClick={signinClick} />
        </Modal>
      )}
    </>
  );
}
