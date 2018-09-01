import * as React from 'react'
import './list-item.less'
import Avatar from '@/components/avatar/avatar'
import Badge from '@/components/badge/badge'
interface IProps {
    avatar: string,
    title: string,
    content: string,
    time: string,
    num: number
}
export default class ListItem extends React.Component<IProps> {
    public render() {
        const { avatar, title, content, time, num } = this.props
        return (
            <div className="list-item">
                <div className="list-item-left">
                    <Avatar src={avatar} size={45} />
                </div>
                <div className="list-item-body">
                    <div className="item-body-title">
                        {title}
                    </div>
                    <div className="item-body-content">
                        <span>
                            {content}
                        </span>
                    </div>
                </div>
                <div className="list-item-right">
                    <span>
                        {time}
                    </span>
                    {num ?
                        <span>
                            <Badge content={num} />
                        </span>
                        : ''}
                </div>
            </div>
        )
    }
}