import type { Networks, Network } from "../../lib/types/network";

const networks: Networks = {
  11155111: {
    token: "0x040e06f1f3a1EB023370F7efaf831D57A399E8fb",
  },
};

export const getNetwork = (chainId?: number): Network => {
  if (chainId === undefined || !networks[chainId]) {
    return networks[11155111];
  }
  return networks[chainId];
};
