import * as React from "react";
import './badge.less'
interface IProps {
    content?: string
}
export default class Badge extends React.Component<IProps, {}> {
    public render() {
        return (
            <div className="badge-container">
                <em className="badge">
                    {this.props.content}
                </em>
            </div>
        )
    }
}