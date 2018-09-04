import io from '@/io'
// import toast from '@/components/toast/toast'
import { self } from '../constants'
// 修改信息
export function loginSelfAction(info: any) {
    return {
        info,
        type: self.SELF_USER
    }
}
// 登录
export function loginSelf(info: object) {
    return (dispatch: any) => {
        io.emit('login', { ...info, device: '安卓' }, (data: any) => {
            const code = data.code
            if (code) {
                localStorage.setItem('token', data.token)
                dispatch(loginSelfAction(data.msg))
            } else {
                // toast.showToast(data.msg)
            }
        })
    }
}