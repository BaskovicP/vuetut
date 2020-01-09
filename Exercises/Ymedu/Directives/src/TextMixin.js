export const textMixin = {
    computed: {
        reversedText() {
         return this.sampleText.split("").reverse().join("");
        },
        strangeText() {
         return `${this.sampleText} {${this.sampleText.length}}`
        }
    },
}