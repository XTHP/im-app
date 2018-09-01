import * as React from 'react'
import './avatar.less'
interface IProps {
    src: any,
    size: number
}
export default class Avatar extends React.Component<IProps> {
    public render() {
        const { src, size = 40 } = this.props
        return (
            <div className="avatar-wrap" style={
                {
                    height: size + "px",
                    width: size + "px"
                }
            }>
                <img src={src} alt="avatar" />
            </div>
        )
    }
}
