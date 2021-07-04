<template>
    <div class="about-page container">
        <div class="row">
            <div class="col-4">
                <b-list-group>
                    <b-list-group-item
                        button
                        @click="setGeneral"
                        :class="[
                            'about-page__list',
                            {
                                'active-list': currentComponent == 'general',
                            },
                        ]"
                    >
                        General
                    </b-list-group-item>
                    <b-list-group-item
                        button
                        @click="setFeatureRegression"
                        :class="[
                            'about-page__list',
                            {
                                'active-list':
                                    currentComponent == 'feature-regression' ||
                                    currentComponent ==
                                        'feature-classification',
                            },
                        ]"
                    >
                        <span> Features Used </span>
                    </b-list-group-item>
                    <transition name="slide-down-fade">
                        <b-list-group
                            v-if="
                                currentComponent == 'feature-regression' ||
                                currentComponent == 'feature-classification'
                            "
                        >
                            <b-list-group-item
                                button
                                @click="setFeatureRegression"
                                :class="{
                                    'active-sublist':
                                        currentComponent ==
                                        'feature-regression',
                                }"
                            >
                                Regression
                            </b-list-group-item>
                            <b-list-group-item
                                button
                                @click="setFeatureClassification"
                                :class="{
                                    'active-sublist':
                                        currentComponent ==
                                        'feature-classification',
                                }"
                            >
                                Classification
                            </b-list-group-item>
                        </b-list-group>
                    </transition>
                    <b-list-group-item
                        button
                        @click="setProfit"
                        :class="[
                            'about-page__list',
                            {
                                'active-list':
                                    currentComponent ==
                                    'profitability-analysis',
                            },
                        ]"
                    >
                        Profitability Analysis
                    </b-list-group-item>
                </b-list-group>
            </div>
            <div class="col">
                <transition name="fadeView" mode="out-in" appear>
                    <component :is="currentComponent" />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import General from "../components/General.vue";
import FeatureRegression from "../components/FeatureRegression.vue";
import FeatureClassification from "../components/FeatureClassification.vue";
import ProfitabilityAnalysis from "../components/ProfitabilityAnalysis.vue";
export default {
    name: "About",
    components: {
        General,
        FeatureRegression,
        FeatureClassification,
        ProfitabilityAnalysis,
    },
    data: () => ({
        currentComponent: "general",
    }),
    methods: {
        setGeneral() {
            this.currentComponent = "general";
        },
        setFeatureRegression() {
            this.currentComponent = "feature-regression";
            console.log(this.currentComponent);
        },
        setFeatureClassification() {
            console.log("ha");
            this.currentComponent = "feature-classification";
            console.log(this.currentComponent);
        },
        setProfit() {
            this.currentComponent = "profitability-analysis";
        },
    },
};
</script>

<style>
</style>