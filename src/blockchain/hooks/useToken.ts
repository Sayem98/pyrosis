import { useReadContract, useWriteContract } from "wagmi";
import type {
  UseWriteContractParameters,
  UseReadContractParameters,
  UseReadContractReturnType,
} from "wagmi";
import { tokenAbi } from "../abis/token";
import { useNetworkData } from "./useNetworkData";
import { Abi } from "viem";
import { wagmiAdapter } from "../config";

type UseMarketplaceReadParameters = Omit<
  UseReadContractParameters,
  "abi" | "address" | "functionName" | "args"
>;

export const useTokenRead = (
  functionName: string,
  args?: Array<unknown>,
  options?: UseMarketplaceReadParameters
): UseReadContractReturnType => {
  const { token } = useNetworkData();
  const result = useReadContract({
    abi: tokenAbi as Abi,
    address: token,
    functionName,
    args,
    ...options,
  });
  return result;
};

type UseMarketplaceWriteParameters = Pick<
  UseWriteContractParameters,
  "mutation"
>["mutation"];

export const useFactoryWrite = (
  functionName: string,
  options?: UseMarketplaceWriteParameters
) => {
  const { token } = useNetworkData();
  const { writeContractAsync, ...rest } = useWriteContract({
    config: wagmiAdapter.wagmiConfig,
    mutation: {
      onError: (e: unknown) => {
        console.log(e);
        window.alert(e);
      },
      onSuccess: () => {
        console.log("success");
      },
    },
    ...options,
  });

  const write = async (params: Array<unknown> = []) => {
    return writeContractAsync({
      abi: tokenAbi as Abi,
      address: token,
      functionName,
      args: params,
    });
  };
  return {
    write,
    ...rest,
  };
};
