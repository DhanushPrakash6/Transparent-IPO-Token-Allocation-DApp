"use client";

import { useState } from "react";

export default function Home() {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (typeof window === "undefined") return;

    try {
      const { web3Enable, web3Accounts } = await import("@polkadot/extension-dapp");

      const extensions = await web3Enable("Transparent IPO Token Allocation");
      if (extensions.length === 0) {
        alert("No Polkadot extension detected or access denied.");
        return;
      }

      const allAccounts = await web3Accounts();
      setAccounts(allAccounts);
      setIsConnected(true);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Transparent IPO Allocation dApp</h1>
      <button
        onClick={connectWallet}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Connect Wallet
      </button>
      <ul className="mt-4">
        {accounts.map((acc, i) => (
          <li key={i}>{acc.meta.name}: {acc.address}</li>
        ))}
      </ul>
    </main>
  );
}