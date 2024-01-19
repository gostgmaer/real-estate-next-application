

import { post } from "@/lib/helper/network";
import { notifyerror } from "@/lib/notify/notice";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const ConfirmForm = ({userData}) => {
  // const { handleLoginAuth, user, userId } = useAuthContext();
  // const router = useRouter();
  // const [axios, spinner] = useAxios();

  console.log(userData);
  const param = useSearchParams();

  const confirmAccountAction = async (e) => {
    if (!param.getAll("token")[0]) {
    } else {
      try {
        const confirm = await post(
          `/user/auth/confirm-account/${param.getAll("token")[0]}`
        );
      
      } catch (error) {
       // console.log(error.message);
        notifyerror(error.message,2000);
      }
    }
  };



  return (
    <div className=" flex items-center justify-center ">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md ">
        <h1 className="text-2xl font-semibold text-center mb-4">
          {userData && userData.message}
          {/* Account Confirmed! */}
        </h1>
        <p className="text-gray-700 dark:text-gray-400 text-center mb-6">
          Thank you for confirming your account. You can now access our
          services.
        </p>
      </div>

    </div>
  );
};

export default ConfirmForm;
