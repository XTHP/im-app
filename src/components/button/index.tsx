import * as React from 'react'
import './index.less'

export interface IProps {
    type: string;
    onClick: any;
    name: string;
}
class Button extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
        this.state = {

        }
    }

    public render() {
        return (
            <div className="button-wrap">
                <button
                    type={this.props.type}
                    className="btn"
                    onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        )
    }
}
export default Button