"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { useTranslation } from "../../i18n/client";
import toast from "react-hot-toast";
import { api, setAcceptLanguage } from "../../lib/axios";
import { Button } from "flowbite-react";

const ContactForm = ({ lng }: { lng: string }) => {
  const { t: dataLang } = useTranslation(lng, "contact");

  const validationSchema = Yup.object({
    name: Yup.string().required(dataLang("form.validation.name")),
    email: Yup.string()
      .email(dataLang("form.validation.email.invalid"))
      .required(dataLang("form.validation.email.required")),
    address: Yup.string().required(dataLang("form.validation.address")),
    mobile: Yup.string().required(dataLang("form.validation.mobile")),
    title: Yup.string().required(dataLang("form.validation.title")),
    message: Yup.string().required(dataLang("form.validation.message")),
  });

  const initialValues = {
    name: "",
    email: "",
    address: "",
    mobile: "",
    title: "",
    message: "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const queryString = new URLSearchParams(values).toString();
      const url = `/contactus?${queryString}`;
      setAcceptLanguage(lng);
      const resp = await api.post(url);
      if (resp?.data?.status) {
        toast.success(resp.data.msg);
      } else {
        toast.error(resp.data.msg);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32 text-start">
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {dataLang("form.name")}
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {dataLang("form.email")}
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {dataLang("form.address")}
              </label>
              <Field
                type="text"
                id="address"
                name="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="mobile"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {dataLang("form.mobile")}
              </label>
              <Field
                type="text"
                id="mobile"
                name="mobile"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {dataLang("form.title")}
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {dataLang("form.message")}
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <Button
            type="submit"
            color="primary"
            className="w-full font-bold py-2 text-white bg-primary mt-4"
          >
            {dataLang("form.submit")}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
