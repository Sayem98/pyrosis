export type Address = `0x${string}`;

export type Network = {
  token: Address;
};

export type Networks = Record<number, Network>;
