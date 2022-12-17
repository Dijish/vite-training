import { createElem } from './createElem.js'

// createElem('h2', "Hia there I am Two")

let msg = 'Hi this is shared'

export default msg
export { createElem }

export let product = {
    name: 'car',
    spec: {
        engine: {
            fuel: {
                type: 'Petrol'
            }
        }
    }
}