<template>
    <div>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
export default {
    name: "FeatureClassification",
    data() {
        return {
            items: [
                {
                    Category: "input",
                    "Column Name": "mvrv (market value to realised value)",
                    description:
                        "MVRV is calculated by dividing Market Value by Realised Value. In Realised Value, BTC prices are taken at the time they last moved, instead of the current price like in Market Value",
                },
                {
                    Category: "input",
                    "Column Name": "Low",
                    description: "Lowest price within time window",
                },
                {
                    Category: "input",
                    "Column Name": "High",
                    description: "Highest price within time window",
                },
                {
                    Category: "input",
                    "Column Name": "nvts (network value to transaction signal)",
                    description:
                        "NVTS is a more stable measure of NVT, with the denominator being the moving average over the last 90 days of NVT's denominator",
                },
                {
                    Category: "input",
                    "Column Name": "Close",
                    description: "Close price at end of time window",
                },
                {
                    Category: "input",
                    "Column Name": "Open",
                    description: "Open price at start time window",
                },
                {
                    Category: "Target",
                    "Column Name": "Label_Weighted_Price",
                    description:
                        "Label transformed Weighted_Price after differencing (1 if after differencing produces positive value, 0 if after differencing produces negative value)",
                },
            ],
        };
    },
};
</script>

<style>
</style>