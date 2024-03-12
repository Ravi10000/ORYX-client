import { api, authApi } from "#/api";
// import { fetchUserDetails } from "#api/auth.req";
// import { getAuthToken } from "#api/index";
// import { clearIsFetching, setCurrentUser } from "#redux/user/user.actions";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import userStore from "#/stores/user.store";
import { useAddress } from "@thirdweb-dev/react";

const getAuthToken = () => localStorage.getItem("accessToken");
function useFetchUser(onSuccess) {
  const address = useAddress();
  const { setUser, setIsFetching } = userStore();

  const userQuery = useQuery({
    queryKey: ["user"],
    retry: 0,
    queryFn: async () => {
      console.log("fetching user");
      if (!getAuthToken() && !address) {
        setIsFetching(false);
        return null;
      }
      if (getAuthToken()) {
        const { data } = await authApi.get("/auth/fetch-user");
        if (data?.status === "success") {
          setUser(data.user);
          onSuccess?.(data.user);
          return data?.user;
        }
        return null;
      } else if (address) {
        const { data } = await api.get(
          "/auth/fetch-user-by-address/" + address
        );
        console.log({ data });
        if (data?.status === "success") {
          setUser(data.user);
          onSuccess?.(data.user);
          localStorage.setItem("accessToken", data.accessToken);
          return data?.user;
        }
        return null;
      }
    },
  });

  useEffect(() => {
    if (userQuery.isError) setIsFetching(false);
  }, [userQuery, setIsFetching]);
  return userQuery;
}

export default useFetchUser;
