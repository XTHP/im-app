import { self } from '../constants/index'
interface IStates {
    self: object
}
const states: IStates = {
    self: {}
}
export default function SelfReducer(state = states, action: any): object {
    const { type, info } = action
    switch (type) {
        case self.SELF_USER:
            return {
                ...state,
                self: info
            }
        default:
            return state
    }
}