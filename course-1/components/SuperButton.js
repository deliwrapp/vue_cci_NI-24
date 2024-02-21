import SuperChewbi from  "./SuperChewbi.js"

export default {
    components: {
        SuperChewbi
    },
    /* props: ['supercount'], */
    /* props : {
        supercount : Number
    }, */
    props : {
        supercount : {
            type: Number,
            /* required: true, */
            default: () => 1
        }
    },
    data() {
        return {
            chewbaka: "Yoda",
            test: true
        }
    },
    methods: {
        changeName() {
            if (this.test) {
                this.chewbaka = "Ian Solo"
            } else {
                this.chewbaka = "Yoda"
            }
            this.test = !this.test
        }
    },
    template: `
        <div>Super Button Said count is {{ supercount }}</div>
        <button @click="changeName"> Change Name </button>
        <super-chewbi :msg="chewbaka"></super-chewbi>
    `
}