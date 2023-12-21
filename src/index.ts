// MyCanister.ts

import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as MyCanisterIdl, canisterId as MyCanisterCanisterId } from "./my_canister.did";
import MyCanister from "./my_canister.did.js";

async function main() {
    // Specify the URL of the Internet Computer replica.
    const replicaUrl = "http://localhost:37751";

    // Create an HTTP agent to connect to the Internet Computer.
    const agent = new HttpAgent({
        host: replicaUrl,
        // Add any additional options you need.
        // For example, you might set the identity and other options.
    });

    // Create an actor instance for your canister using the agent.
    const myCanister: MyCanister = Actor.createActor<MyCanister>(MyCanisterIdl, {
        agent,
        canisterId: MyCanisterCanisterId,
    });

    // Example: Get owner of the canister
    try {
        const owner = await myCanister.getOwner();
        console.log('Canister Owner:', owner);
    } catch (error) {
        console.error('Error:', error);
    }

    // Example: Transfer ownership
    const newOwner = 'your_principal_id'; // replace with the new owner's principal ID
    try {
        await myCanister.transferOwnership(newOwner);
        console.log('Ownership transferred successfully.');
    } catch (error) {
        console.error('Error transferring ownership:', error);
    }
}

// Run the main function
main();
