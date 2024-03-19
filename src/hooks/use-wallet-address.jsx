import { useAddress } from "@thirdweb-dev/react";
import { useEffect } from "react";
import userStore from "#/stores/user.store";
import { api } from "#/api";

function useWalletAddress() {
  const address = useAddress();
  const { setUser, user } = userStore();
  useEffect(() => {
    console.log({ address });
    if (address?.length) {
      if (!user) {
        (async function () {
          try {
            const { data } = await api.get(
              "/auth/fetch-user-by-address/" + address
            );
            console.log({ data });
            if (data?.status === "success") {
              setUser(data.user);
              localStorage.setItem("accessToken", data.accessToken);
            }
          } catch (err) {
            console.log(err);
          }
        })();
      } else {
        (async function () {
          try {
            const res = await api.post("/auth/attach-wallet", {
              walletAddress: address,
            });
            console.log({ res });
          } catch (err) {
            console.log({ err });
          }
        })();
      }
    }
  }, [address, setUser, user]);
}

export default useWalletAddress;
