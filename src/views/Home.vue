<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <b-list-group>
                    <span class="title">Models</span>
                    <b-list-group-item
                        button
                        @click="setRFReg"
                        :class="{
                            'active-list': currentGraphComponent == 'rf-reg',
                        }"
                    >
                        Random Forest Regression
                    </b-list-group-item>
                    <b-list-group-item
                        button
                        @click="setLSTMReg"
                        :class="{
                            'active-list': currentGraphComponent == 'lstm-reg',
                        }"
                    >
                        LSTM Regression
                    </b-list-group-item>
                    <b-list-group-item
                        button
                        @click="setRFClass"
                        :class="{
                            'active-list': currentGraphComponent == 'rf-class',
                        }"
                    >
                        Random Forest Classification
                    </b-list-group-item>
                    <b-list-group-item
                        button
                        @click="setLSTMClass"
                        :class="{
                            'active-list':
                                currentGraphComponent == 'lstm-class',
                        }"
                    >
                        LSTM Classification
                    </b-list-group-item>
                </b-list-group>
            </div>
            <div class="col">
                <div>
                    <component :is="currentGraphComponent"> </component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import BarChart from "../chartjs/BarChart.js";
import RfReg from "../chartjs/RfReg.js";
import LstmReg from "../chartjs/LstmReg.js";
import RfClass from "../chartjs/RfClass.js";
import LstmClass from "../chartjs/LstmClass.js";
export default {
    name: "Home",
    components: {
        RfReg,
        LstmReg,
        RfClass,
        LstmClass,
    },
    data: () => ({
        currentGraphComponent: "rf-reg",
    }),
    methods: {
        setRFReg() {
            this.currentGraphComponent = "rf-reg";
        },
        setLSTMReg() {
            this.currentGraphComponent = "lstm-reg";
        },
        setRFClass() {
            this.currentGraphComponent = "rf-class";
        },
        setLSTMClass() {
            this.currentGraphComponent = "lstm-class";
        },
    },
};
</script>

<style>
.list-group-item {
    border: 0;
}

.list-group-item {
    font-size: 15px;
}
</style>