import * as React from 'react'
import './index.less'

export interface IProps {
    type: string;
    onClick: any;
    name: string;
    disabled: boolean;
}
class Button extends React.Component<IProps, {}> {
    public render() {
        return (
            <div className="button-wrap">
                <button
                    type={this.props.type}
                    className="btn"
                    disabled={this.props.disabled}
                    onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        )
    }
}
export default Button