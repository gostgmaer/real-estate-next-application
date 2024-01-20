import React, { useState } from "react";
import { useFormik } from "formik";

import { useParams, useRouter } from "next/navigation";
import { patch, post } from "@/lib/helper/network";
import { notifySuccess, notifyerror, notifyinfo } from "@/lib/notify/notice";

import { registerValidationSchema } from "@/lib/validation";
import Input from "@/components/global/fields/input";
import Link from "next/link";
export const SignUpForm = ({ props }) => {

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAgreed: "false",
    },
    // validationSchema: propertySchema,
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit();
    },
  });
  const handleSubmit = async (values) => {
    try {
      const res = await post("/authentication/user/register", values);
      if ((res.status = "OK")) {
        router.push("/auth/signin");
      }
    } catch (error) {
      notifyerror(error.message);
      // console.log(error);
    }
  };


  return (
    <div className=" bg-white max-w-7xl m-auto rounded-xl dark:bg-gray-700 p-5">
      <form
        onSubmit={formik.handleSubmit}
        className=" mx-auto p-5 bg-gray-50 dark:bg-gray-900 grid rounded-lg"
      >
        <div className="  w-full mx-auto my-5 grid  gap-5 sm:grid-cols-2 col-span-full">
          <div className="sm:col-span-1">
            <Input
              label={"first Name"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("firstName"),
                placeholder: "Kishor",
              }}
              classes={undefined}
              icon={undefined}
              id={"firstName"}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <div className="text-red-500 text-sm">
                {formik.errors.firstName}
              </div>
            )}
          </div>

          <div className="sm:col-span-1">
            <Input
              label={"lastName"}
              type={"text"}
              additionalAttrs={{
                ...formik.getFieldProps("lastName"),
                placeholder: "Sarkar",
              }}
              classes={undefined}
              icon={undefined}
              id={"lastName"}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <div className="text-red-500 text-sm">
                {formik.errors.lastName}
              </div>
            )}
          </div>

          <div className="col-span-full">
            <Input
              label={"email"}
              type={"email"}
              additionalAttrs={{
                ...formik.getFieldProps("email"),
                placeholder: "info@mail.com",
              }}
              classes={undefined}
              icon={undefined}
              id={"email"}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div className="sm:col-span-1">
            <Input
              label={"Password"}
              type={"password"}
              additionalAttrs={{
                ...formik.getFieldProps("password"),
                placeholder: "Password",
              }}
              classes={undefined}
              icon={undefined}
              id={"password"}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="sm:col-span-1">
            <Input
              label={"Confirm password"}
              type={"password"}
              additionalAttrs={{
                ...formik.getFieldProps("confirmPassword"),
                placeholder: "confirmPassword",
              }}
              classes={undefined}
              icon={undefined}
              id={"confirmPassword"}
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <div className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>

          <div className=" col-span-full">
          <div className="col-span-2 flex items-start ">
          <div className="rizzui-checkbox-root flex flex-col [&amp;>label>span]:font-medium [&amp;>label]:items-start">
            <label className="rizzui-checkbox-container flex flex-row items-center">
              <span className="relative leading-none ">
                <input
                  className="rizzui-checkbox-input peer disabled:bg-gray-50 disabled:border-gray-200 h-5 w-5 rounded bg-transparent border border-gray-300 checked:!bg-gray-1000 focus:ring-gray-900/30 checked:!border-gray-1000 hover:enabled:border-gray-1000"
                  type="checkbox"
                  name="isAgreed"
                  value={formik.values.isAgreed}
                  onChange={formik.handleChange}
                />
              </span>
              <span className="rizzui-checkbox-label text-sm ml-1.5 rtl:mr-1.5">
                By signing up you have agreed to our{" "}
                <Link
                  className="font-medium text-blue transition-colors hover:underline"
                  href="/"
                >
                  Terms
                </Link>
                &amp;{" "}
                <Link
                  className="font-medium text-blue transition-colors hover:underline"
                  href="/"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
            {formik.errors.isAgreed && formik.touched.isAgreed && (
              <div className="text-red-500 text-sm">
                {formik.errors.isAgreed}
              </div>
            )}
          </div>
        </div>
          </div>
        </div>

        <div className="col-span-full  w-2/6 mx-auto mt-20">
          <button
            type="submit"
            disabled={!formik.isValid}
            className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-500"
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};
