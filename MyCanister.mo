module MyCanister {
  import Array "mo:base/Array";

  type MyCanister = record {
    owner : Principal;
  };

  public func init() : async MyCanister {
    return { owner = caller };
  };

  public query func getOwner() : async Principal {
    return (await myCanister).owner;
  };

  public func transferOwnership(newOwner : Principal) : async () {
    assert (caller == (await myCanister).owner, "Unauthorized: Only the owner can transfer ownership.");
    (await myCanister).owner := newOwner;
  };

  let myCanister = init();
};
