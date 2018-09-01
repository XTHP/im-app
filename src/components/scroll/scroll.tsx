import * as React from 'react'
import './scroll.less'
interface IProps {
    wrap: any
}
export default class Scroll extends React.Component<IProps, {}> {
    public render() {
        return (
            <div className='scroll-wrap'>
                {this.props.children}
                <div className="srcoll-element-y" />
            </div>
        )
    }
}
