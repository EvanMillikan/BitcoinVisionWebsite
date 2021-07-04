<template>
    <div>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
export default {
    name: "FeatureRegression",
    data() {
        return {
            items: [
                {
                    Category: "input",
                    "Column Name": "miners-revenue",
                    description:
                        "The total size of the blockchain minus database indexes in megabytes.",
                },
                {
                    Category: "input",
                    "Column Name": "estimated-transaction-volume-usd",
                    description:
                        "The total estimated value in USD of transactions on the blockchain. This does not include coins returned as change.",
                },
                {
                    Category: "input",
                    "Column Name": "cost-per-transaction",
                    description:
                        "A chart showing miners revenue divided by the number of transactions",
                },
                {
                    Category: "input",
                    "Column Name": "difficulty",
                    description:
                        "A relative measure of how difficult it is to mine a new block for the blockchain.",
                },
                {
                    Category: "input",
                    "Column Name": "hash-rate",
                    description:
                        "The estimated number of terahashes per second the bitcoin network is performing in the last 24 hours.",
                },
                {
                    Category: "input",
                    "Column Name": "blocks-size",
                    description:
                        "The total size of the blockchain minus database indexes in megabytes.",
                },
                {
                    Category: "input",
                    "Column Name": "n-transactions-total",
                    description:
                        "The total number of transactions on the blockchain.",
                },
                {
                    Category: "input",
                    "Column Name": "my-wallet-n-users",
                    description:
                        "The total number of unique Blockchain.com wallets created.",
                },
                {
                    Category: "input",
                    "Column Name": "Volume_(Currency)",
                    description:
                        "Volume of corresponding currency transacted in this window",
                },
                {
                    Category: "Target",
                    "Column Name": "Weighted_Price",
                    description: "VWAP- Volume Weighted Average Price",
                },
            ],
        };
    },
};
</script>

<style>
</style>