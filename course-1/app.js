const { createApp } = Vue
import SuperButton from './components/SuperButton.js'

createApp(
    {
        components: {
            SuperButton
        },
        data() {
            return {
                title: "Ma première APP",
                message: 'Hello Chewbaka!',
                count: 0,
                name: ''
            }
        },
        methods: {
            countBy2() {
                this.count = this.count + 2
            },
            reset() {
                this.count = 0
            }
        }
    }
).mount('#app')