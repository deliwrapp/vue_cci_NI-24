<script>
export default {
    name: "MyComponent",
    props: {
        msg: {
            type: [String, Number],
            default: () => 1
        }
    },
    data() {
        return {
            test: true,
            information : null,
            cssColor: null
        }
    },
    computed: {
        testMsg() {
            if (typeof this.msg == 'string') {
                this.cssColor = "green"
                this.setInformation('La valeur est de type String')
                return true
            } else {
                this.cssColor = "red"
                this.setInformation('le message n\'est pas une chaine de caractère')
                return false
            }            
        },
    },
    methods: {
        toggleTest() {
            this.test = !this.test
        },
        setInformation(value) {
            this.information = value
        },
        setCssColor(value) {
            this.information = value
        }
    },
}
</script>

<template>
    <div v-if="msg == 1">
        <p>Je suis égale à 1</p>
    </div>
    <div v-else-if="msg === 2">
        <p>Je suis égale à 2</p>
    </div>
    <div v-else>
        <p>Je ne suis pas égale à 1 ou 2</p>
    </div>
    <p>Le message : {{ msg }}</p>

    <div :class="cssColor">
        <p v-if="testMsg">
           {{ information }}
        </p>
        <p v-else>
            {{ information }}
        </p>

    </div>
</template>

<style scoped>
    p {
        font-size: 2rem;
        font-weight: bold;
    }

</style>