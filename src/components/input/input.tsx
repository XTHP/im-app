import * as React from 'react'
import Email from '../../assets/image/email.svg'
import EmailError from '../../assets/image/emailError.svg'
import Pwd from '../../assets/image/pwd.svg'
import PwdError from '../../assets/image/pwdError.svg'
import './input.less'
const labelList = {
    Email, EmailError, Pwd, PwdError
}
interface IProps {
    icon: string,
    error: string,
    onChange: () => void,
    onFocus: () => void,
    type: string,
    placeholder: string,
}
class Input extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.state = {

        }

    }
    public render() {
        const props = this.props
        return (
            <div className="input-wrap">
                <div className="input-icon">
                    <img src={labelList[this.props.icon]} alt="." />
                </div>
                <input className={props.error ? "input-error" : ''}
                    onChange={this.props.onChange}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onFocus}
                    type={this.props.type}
                    placeholder={this.props.placeholder} />
            </div>
        )
    }
}

export default Input