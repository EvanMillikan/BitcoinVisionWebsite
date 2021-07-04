<template>
    <div>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
export default {
    name: "ProfitabilityAnalysis",
    data() {
        return {
            items: [
                {
                    Result: "Initial Capital",
                    "Random Forest Regression": "$500,000",
                    "LSTM Regression": "$500,000",
                    "Random Forest Classification": "$500,000",
                    "LSTM Classification": "$500,000",
                    "Buy-and-Hold": "$500,000",
                },
                {
                    Result: "End Capital (Tax 0%)",
                    "Random Forest Regression": "$961,702.18",
                    "LSTM Regression": "$1,058,302.92",
                    "Random Forest Classification": "$1,523,323.74",
                    "LSTM Classification": "$2,343,778.68",
                    "Buy-and-Hold": "$1,706,090.54",
                },
                {
                    Result: "ROI (Tax 0%)",
                    "Random Forest Regression": "92.3%",
                    "LSTM Regression": "111.7%",
                    "Random Forest Classification": "204.7%",
                    "LSTM Classification": "368.8%",
                    "Buy-and-Hold": "241.2%",
                },
                {
                    Result: "End Capital (Tax 0.1%)",
                    "Random Forest Regression": "$920,304.69",
                    "LSTM Regression": "$1,047,115.78",
                    "Random Forest Classification": "$1,446,135.18",
                    "LSTM Classification": "$1,837,936.25",
                    "Buy-and-Hold": "$1,703,680.77",
                },
                {
                    Result: "ROI (Tax 0.1%)",
                    "Random Forest Regression": "84.1%",
                    "LSTM Regression": "109.4%",
                    "Random Forest Classification": "189.2%",
                    "LSTM Classification": "267.6%",
                    "Buy-and-Hold": "240.7%",
                },
                {
                    Result: "End Capital (Tax 0.5%)",
                    "Random Forest Regression": "$771,782.67",
                    "LSTM Regression": "$915,841.95",
                    "Random Forest Classification": "$1,174,558.64",
                    "LSTM Classification": "$1,142,381.67",
                    "Buy-and-Hold": "$1,694,089.64",
                },
                {
                    Result: "ROI (Tax 0.5%)",
                    "Random Forest Regression": "54.4%",
                    "LSTM Regression": "83.2%",
                    "Random Forest Classification": "134.9%",
                    "LSTM Classification": "128.5%",
                    "Buy-and-Hold": "238.8%",
                },
                {
                    Result: "End Capital (Tax 1%)",
                    "Random Forest Regression": "$619,362.14",
                    "LSTM Regression": "$599,942.09",
                    "Random Forest Classification": "$905,631.57",
                    "LSTM Classification": "$1,304,047.21",
                    "Buy-and-Hold": "$1,682,207.56",
                },
                {
                    Result: "ROI (Tax 1%)",
                    "Random Forest Regression": "23.9%",
                    "LSTM Regression": "20.0%",
                    "Random Forest Classification": "81.1%",
                    "LSTM Classification": "160.8%",
                    "Buy-and-Hold": "236.4%",
                },
                {
                    Result: "End Capital (Tax 2%)",
                    "Random Forest Regression": "$398,850.81",
                    "LSTM Regression": "$323,215.44",
                    "Random Forest Classification": "$538,351.23",
                    "LSTM Classification": "$879,357.93",
                    "Buy-and-Hold": "$1,658,792.87",
                },
                {
                    Result: "ROI (Tax 2%)",
                    "Random Forest Regression": "-20.2%",
                    "LSTM Regression": "-35.3%",
                    "Random Forest Classification": "7.7%",
                    "LSTM Classification": "75.8%",
                    "Buy-and-Hold": "231.8%",
                },
            ],
        };
    },
};
</script>

<style>
</style>