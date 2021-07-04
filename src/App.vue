<template>
    <div class="app">
        <div class="top-bar" />
        <div class="top-bar__nav">
            <span class="top-bar__nav--left"> BitcoinVision </span>
            <div class="top-bar__nav--right">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>
        </div>
        <transition name="fadeView" mode="out-in" appear>
            <router-view class="content" />
        </transition>
        <div class="bottom-bar">
            <div class="bottom-bar__image" />
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&family=Ubuntu:ital,wght@1,300&display=swap");
@import "./transition.scss";
@import "./App.scss";
</style>


