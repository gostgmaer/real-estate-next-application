"use client";
import PasswordField from "@/components/global/fields/PasswordField";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { loginValidationSchema } from "@/lib/validation";
import Input from "@/components/global/fields/input";

const LoginForm = () => {

  const route = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
    
     // handleLoginAuth(values)

      const res = await signIn("credentials", {
        redirect: false,
        ...values,
      });
      if (res.ok) {
        if (res.url) {
          const parsedUrl = new URL(res.url);
          const callbackUrlParam = parsedUrl.searchParams.get("callbackUrl");
          const decodedCallbackUrl = callbackUrlParam
            ? decodeURIComponent(callbackUrlParam)
            : "/";

          route.push(decodedCallbackUrl);
        } else {
          route.push("/home");
        }
      }
    },
  });

  const handleLogin = async () => {};

  // useEffect(() => {
  //   if (userId) {
  //     route.push("/my-account/" + userId["user_id"]);
  //   }
  // }, [userId]);

  return (
    <>
     <div className=" bg-white max-w-7xl m-auto rounded-xl dark:bg-gray-700 p-5">
      <form
        onSubmit={formik.handleSubmit}
        className=" mx-auto p-5 bg-gray-50 dark:bg-gray-900 grid rounded-lg"
      >
        <div className="  w-full mx-auto my-5 grid  gap-5 sm:grid-cols-2 col-span-full">
       

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
          <div className="col-span-full">
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
         

          <div className=" col-span-full mt-10">
          <div className="flex items-center justify-between pb-1">
            <div className="rizzui-checkbox-root flex flex-col [&amp;>label>span]:font-medium">
              <label className="rizzui-checkbox-container flex flex-row items-center">
                <span className="relative leading-none">
                  <input
                    type="checkbox"
                    className="rizzui-checkbox-input peer disabled:bg-gray-50 disabled:border-gray-200 h-5 w-5 rounded bg-transparent border border-gray-300 checked:!bg-gray-1000 focus:ring-gray-900/30 checked:!border-gray-1000 hover:enabled:border-gray-1000"
                    name="isRememberMe"
                  />
                </span>
                <span className="rizzui-checkbox-label text-sm ml-1.5 rtl:mr-1.5">
                  Remember Me
                </span>
              </label>
            </div>
            <Link
              className="h-auto p-0 text-sm font-semibold text-gray-500 underline transition-colors hover:text-primary hover:no-underline"
              href="/auth/forget-password"
            >
              Forgot Password?
            </Link>
          </div>
          </div>
        </div>

        <div className="col-span-full w-full  mx-auto mt-20">
          <button
            type="submit"
            disabled={!formik.isValid}
            className="bg-blue-500 text-white w-full px-4 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300  disabled:bg-gray-500"
          >
            Signin
          </button>
        </div>
      </form>
    </div>
     
    </>
  );
};

export default LoginForm;



