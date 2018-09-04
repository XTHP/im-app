import { status } from '../constants'
const { RIGHT_INFORMATION } = status
// 修改状态
export function change_right(info: boolean) {
    return {
        info,
        type: RIGHT_INFORMATION
    }
}