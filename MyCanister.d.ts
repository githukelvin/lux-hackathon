// MyCanister.d.ts

interface MyCanister {
    owner: () => Promise<string>;
    transferOwnership: (newOwner: string) => Promise<void>;
}

export default MyCanister;
