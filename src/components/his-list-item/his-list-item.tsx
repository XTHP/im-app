import * as React from 'react'
import './his-list-item.less'
import Avatar from '@/components/avatar/avatar'
interface IProps {
    avatar: string,
    title: string,
    content: string,
    time: string,
    num: number
}
export default class HisItem extends React.Component<IProps, {}> {
    public render() {
        const { avatar } = this.props
        return (
            <div className='his-item-wrap'>
                <div className="his-item-left">
                    <Avatar src={avatar} size={45} />
                </div>
                <div className="his-content">
                    <div className="content-title">
                        <span>刘海平</span>
                    </div>
                    <div className="content-body">
                        <span>是的范德萨发多少解放ID设计费我解放is第几集覅见覅绝对是覅决定书地方贾斯丁见覅及飞是见覅及覅是的覅打飞机风景</span>
                    </div>
                </div>
            </div>
        )
    }
}
