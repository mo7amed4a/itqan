'use client'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextInput, Button } from "flowbite-react";
import * as Yup from "yup";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "../../i18n/client";
type FormValues = {
  name: string;
  email: string;
  whatsapp: string;
};

export default function FormBooking({lng}:{lng: string}) {
  const { t:dataLang } = useTranslation(lng, 'home')

  const validationSchema = Yup.object({
    name: Yup.string().required(dataLang('form_booking.name_required')),
    email: Yup.string()
      .email(dataLang('form_booking.email_invalid'))
      .required(dataLang('form_booking.email_required')),
    whatsapp: Yup.string()
      .required(dataLang('form_booking.whatsapp_required'))
      .matches(/^[0-9]{10,14}$/, dataLang('form_booking.whatsapp_invalid')),
  });

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    
    console.log(values);
    setSubmitting(true);
  };

  return (
      <Formik
          initialValues={{
            name: "",
            email: "",
            whatsapp: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <div className="flex flex-col space-y-10 items-center w-full">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-500">{dataLang('form_booking.title')}</h2>
              <Form className="grid grid-cols-1 gap-4 w-full p-6 bg-white shadow-lg rounded-lg">
              <div className="flex flex-col gap-4">
                <Field
                  name="name"
                  as={TextInput}
                  rightIcon={CiUser}
                  placeholder={dataLang('form_booking.name')}
                  sizing="lg"
                  className="text-right"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <Field
                  name="email"
                  as={TextInput}
                  rightIcon={MdEmail}
                  placeholder={dataLang('form_booking.email')}
                  sizing="lg"
                  className="text-right"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <Field
                  name="whatsapp"
                  as={TextInput}
                  rightIcon={FaWhatsapp}
                  placeholder={dataLang('form_booking.whatsapp')}
                  sizing="lg"
                  className="text-right"
                />
                <ErrorMessage
                  name="whatsapp"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="col-span-full flex justify-center">
                <Button
                  type="submit"
                  color="primary"
                  className="w-full font-bold py-3 text-white bg-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? dataLang('form_booking.loading')+"..." : dataLang('form_booking.submit')}
                </Button>
              </div>
            </Form>
            </div>
          )}
        </Formik>
  );
}
