import io from '@/io'
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
// 登录
export function loginSelf(info: object) {
    return (dispatch: any) => {
        io.emit('login', { ...info, device: '安卓' }, function (data: any) {
            const code = data.code
            if (code) {
                localStorage.setItem('token',data.token)
                dispatch(initSelf(data.msg))
            } else {
                console.log(data)
            }
        })
    }

}