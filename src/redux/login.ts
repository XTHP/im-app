const SELF_USER = 'SELF_USER'
interface IStates {
    self: object
}
const states: IStates = {
    self: {}
}
export function SelfReducer(state = states, action: any): object {
    const { type, info } = action
    switch (type) {
        case SELF_USER:
            return {
                ...state,
                self: info
            }
        default:
            return state
    }
}
// 修改信息
export function initSelf(info: any) {
    return {
        info,
        type: SELF_USER
    }
}
// 修改change
export function changeSelf(info: object) {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(initSelf(info))
        }, 9000)
    }

}