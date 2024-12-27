// 'use client';

import Form from '@app/ui/form/Form';
import Input from '@app/ui/form/Input';
import Section from '@app/ui/form/Section';
import { useActionState } from 'react';
// import { createTrial } from './actions';
import { initCreateTrial } from '../consts';

const Page = () => {
  // const [state, formAction, isPading] = useActionState(
  //   createTrial,
  //   initCreateTrial
  // );

  return (
    // <Form buttonState={isPading} action={formAction}>
    <Form>
      <Section
        title="Заполните, пожалуйста, анкету для участия в соревнованиях, которые пройдут 31 декабря 2025г."
        description="Введите персональные данные"
      >
        <Input name="name" label="Название соревнования" />
        {/* {state?.errors?.name} */}
        <Input name="start_at" label="Начало в" />
        {/* {state?.errors?.start_at} */}
        <Input name="ends_on" label="Конец" />
        {/* {state?.errors?.ends_on} */}
        <Input name="judge_id" label="Имя судьи" />
        {/* {state?.errors?.judge_id} */}
        <Input name="description" label="Описание" />
        {/* {state?.errors?.description} */}
      </Section>
      {/* {state?.message && (
        <p className="mt-2 text-sm text-red-500">{state.message}</p>
      )} */}
    </Form>
  );
};

export default Page;
