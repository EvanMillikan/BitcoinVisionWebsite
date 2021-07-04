<template>
    <div class="general">
        BitcoinVision is a FYP project created by Evan Millikan as a part of
        Asia Pacific University Graduation Requirement. BitcoinVision achieve to
        help Bitcoin investors in outperforming the market by using machine
        learning and deep learning architecture to predict the short-term price
        of bitcoin. 4 models are used in predicting the next-day price of
        bitcoin namely Random Forest Regression, Long Short Term Memory (LSTM)
        Regression, Random Forest Classification, and Long Short Term Memory
        (LSTM) Classification. The end results achieved are the models has
        proven to produce satisfactory result. Random Forest Regression achieved
        MAE of 1319 while LSTM Regression achieved MAE of 1348. Meanwhile,
        Random Forest Classification achieved accuracy of 80% and LSTM
        Clasiffication achieved accuracy of 86%. All model passed the
        persistence model testing proving it is capable of predicting beyond
        following the last day trend.
    </div>
</template>

<script>
export default {
    name: "General",
};
</script>

<style>
.general {
    font-size: 15px;
    letter-spacing: 1px;
    text-align: left;
}
</style>