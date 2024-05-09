import algosdk from "algosdk";

const myaccount = algosdk.generateAccount();
console.log("Account created. Save address & Mnemonic!");
console.log("Account Address = " + myaccount.addr);

const account_mnemonic = "burden heavy mistake april govern cook melt response put deputy conduct entire blur wide foot future muscle daring reward dismiss final raw worth about sudden";
console.log("Account Mnemonic = " + account_mnemonic);

const recoveredAccount = algosdk.mnemonicToSecretKey(account_mnemonic);
console.log("Recovered Account Address = " + recoveredAccount.addr);