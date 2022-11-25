import { useRouter } from "next/router";

const useRouterToCheckPath = (path: string) => {
  const router = useRouter();
  if (router.asPath === path) {
    return true;
  }
  return false;
};

export default useRouterToCheckPath;
