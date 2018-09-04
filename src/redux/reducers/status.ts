import { status } from '../constants'
const { RIGHT_INFORMATION } = status
interface IStates {
    right_information: boolean
}
const states: IStates = {
    right_information: false
}
export default function statusReducer(state = states, action: any): object {
    const { type, info } = action
    switch (type) {
        case RIGHT_INFORMATION:
            return {
                ...state,
                right_information: info
            }
        default:
            return state
    }
}