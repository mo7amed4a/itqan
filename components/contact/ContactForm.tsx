"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { useTranslation } from "../../i18n/client";
import toast from "react-hot-toast";
import { api, setAcceptLanguage } from "../../lib/axios";
import {Textarea, TextInput } from "flowbite-react";
import { CiUser } from "react-icons/ci";
import { MdEmail, MdOutlineSubtitles } from "react-icons/md";
import { CgFlag } from "react-icons/cg";
import { BiPhone } from "react-icons/bi";
import { Button } from "../ui/button";

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
      <Form className="px-6 py-10 text-start">
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Field
                name="name"
                id="name"
                as={TextInput}
                rightIcon={lng === "ar" && CiUser}
                icon={lng === "en" && CiUser}
                placeholder={dataLang("form.name")}
                sizing="lg"
                className="[&>div>input]:!bg-white"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <Field
                name="email"
                as={TextInput}
                rightIcon={lng === "ar" && MdEmail}
                icon={lng === "en" && MdEmail}
                placeholder={dataLang("form.email")}
                sizing="lg"
                id="email"
                className="[&>div>input]:!bg-white"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <Field
                name="address"
                as={TextInput}
                rightIcon={lng === "ar" && CgFlag}
                icon={lng === "en" && CgFlag}
                placeholder={dataLang("form.address")}
                sizing="lg"
                className="[&>div>input]:!bg-white"
              />

              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <Field
                name="mobile"
                as={TextInput}
                rightIcon={lng === "ar" && BiPhone}
                icon={lng === "en" && BiPhone}
                placeholder={dataLang("form.mobile")}
                sizing="lg"
                className="[&>div>input]:!bg-white"
              />
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <Field
                as={TextInput}
                rightIcon={lng === "ar" && MdOutlineSubtitles}
                icon={lng === "en" && MdOutlineSubtitles}
                placeholder={dataLang("form.title")}
                sizing="lg"
                className="[&>div>input]:!bg-white"
                type="text"
                name="title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <Field
                name="message"
                as={Textarea}
                className="!bg-white"
                placeholder={dataLang("form.message")}
                rows={4}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <Button size="xl"
            type="submit"
            color="primary"
            className="w-full !text-base hover:!scale-x-100 font-bold text-white bg-primary hover:bg-secondary mt-4"
          >
            {dataLang("form.submit")}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
