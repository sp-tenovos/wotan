<template>
    <p>Bye {{name}}</p>
</template>

<script>
import Vue from "vue";
import {doStuff} from './utils'
export default Vue.extend({
    data() {
        return {
            name: 'foobar',
        }
    },
    methods: {
        async doStuff() {
            // JSDoc type annotations only work in JavaScript files
            /** @type {PromiseLike<string>} */
            let p = null;
            let v = null;
            await p;
            await v;
            await doStuff();
        }
    },
});
</script>

<style>
</style>
