import * as React from 'react'
import './appbar.less'
interface IProps {
    slotLeft: any,
    slotBody: any,
    slotRight: any,
    children: any
}
export default class Appbar extends React.Component<IProps, {}> {
    private slot = {
        body: "appbar-body",
        left: "appbar-left",
        right: "appbar-right"
    }
    public render() {
        return (
            <div className='appbar-wrap'>
                {this.props.children.map((item: any, index: number) => {
                    const slot = this.slot[item.props.slot]
                    return <div key={index} className={slot}>
                        {item}
                    </div>
                })}
            </div>
        )
    }
}
