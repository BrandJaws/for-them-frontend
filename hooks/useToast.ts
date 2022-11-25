import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useToast = (message: string) => {
    const router = useRouter();

    return toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => {
          router.push('/dashboard')
        }
    });
};

export default useToast;
