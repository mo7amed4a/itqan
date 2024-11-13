'use client';

import React from 'react';
import { Button, Card, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { useTranslation } from '../../../../i18n/client';

export default function TrackingPage({
    params,
}: {
    params: {
        lng: string
    }
}) {
    const { t: dataLang } = useTranslation(params.lng, "followup_request");


    const router = useRouter()
  const formik = useFormik({
    initialValues: {
      code: ''
    },
    validationSchema: Yup.object({
      code: Yup.string().required(dataLang('code_require'))
    }),
    onSubmit: (values) => {
      // توجيه المستخدم إلى صفحة الكود
      router.push(`followup_request/${values.code}`)
    }
  });

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">{dataLang('tracking_title')}</h2>
          <div>
            
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <TextInput
            type="text"
            placeholder={dataLang('enter_code')}
            name="code"
            className="mb-4"
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color={formik.errors.code && formik.touched.code ? "failure" : undefined}
          />
          {formik.errors.code && formik.touched.code ? (
            <p className="text-red-600 text-start text-sm pb-1">{formik.errors.code}</p>
          ) : null}
          <Button type="submit">{dataLang('submit_button')}</Button>
        </form>
      </Card>
    </div>
  );
};
