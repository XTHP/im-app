import avatar from '@/assets/image/1.png'
import Button from "@/components/button";
import Input from '@/components/input/input'
import { loginSelf } from '@/redux/login'
import * as React from 'react'
import { connect } from 'react-redux'
import './login.less'
// import toast from '@/components/toast/toast'
interface IState {
    pwd: boolean,
    isLoading: boolean,
    email: string,
    password: string,
    matchEmail: boolean,
    matchPwd: boolean
}
interface IProps {
    self: object,
    loginSelf: (info: object) => void
}

class Login extends React.Component<IProps, IState> {
    public state = {
        email: '',
        isLoading: false,
        matchEmail: false,
        matchPwd: false,
        password: '',
        pwd: false,
    }
    private inputWrap: any
    constructor(props: IProps) {
        super(props)
    }
    public componentDidMount = () => {
        const loginDom = this.inputWrap
        loginDom.addEventListener('animationend', this.loading, false)
    }
    public componentWillUnmount = () => {
        // 组件销毁后，销毁监听事件
        this.inputWrap.addEventListener('animationend', this.loading, false)
    }
    public loading = (e: React.MouseEvent<HTMLElement>) => {
        const loginClass = this.inputWrap.classList
        if (this.state.isLoading) {
            loginClass.remove('login-in', 'login-out')
        } else {
            loginClass.remove('login-in', 'login-out', 'login-loading')
        }

    }
    public loginClick = (e: React.MouseEvent<HTMLElement>) => {
        const loading = !this.state.isLoading
        const loginClass = this.inputWrap.classList
        this.setState({
            isLoading: loading
        })
        if (loading) {
            loginClass.add('login-loading', "login-in")
        } else {
            loginClass.add('login-out');
        }
        this.props.loginSelf({ email: this.state.email, password: this.state.password })
    }
    public regisClick = (e: React.MouseEvent<HTMLElement>) => {
        // toast.hideToast()
    }
    public pwdFocus = (e: any) => {
        this.setState({
            pwd: !this.state.pwd
        })
    }
    public emailState = (e: any) => {
        const rex = /^([0-9a-zA-Z]+)@[0-9a-zA-Z]+((\.[0-9a-zA-Z]+)+)$/
        const value = e.target.value
        this.setState({
            email: value,
            matchEmail: !rex.test(value)
        })
    }
    public pwdState = (e: any) => {
        this.setState({
            password: e.target.value
        })
    }
    public render() {
        const state = this.state
        return (
            <div className="login">
                <div className="login-wrap-filter" />
                <div className={"login-wrap " + (this.state.pwd ? 'pwd' : '')}>
                    <div className="login-image">
                        <img src={avatar} alt="1" />
                    </div>
                    <div ref={(input) => { this.inputWrap = input }} className="login-input-wrap">
                        <Input
                            icon={state.matchEmail ? "EmailError" : 'Email'}
                            error={state.matchEmail}
                            onChange={this.emailState}
                            type="email"
                            placeholder="请输入邮箱" />
                        <Input
                            icon={state.matchPwd ? "PwdError" : 'Pwd'}
                            onChange={this.pwdState}
                            onFocus={this.pwdFocus}
                            type="password"
                            placeholder="请输入密码" />
                    </div>
                    <div className="login-buttons">
                        <Button onClick={this.regisClick} name="registered" />
                        <Button onClick={this.loginClick} disabled={state.isLoading} name="Login" />
                    </div>
                </div>

            </div>

        )
    }
}
// 映射修改state方法
const mapDispatchToProps = {
    loginSelf
}
// 映射state
function mapStateToProps(state: any, ownProps: any): object {
    const SelfReducer = state.SelfReducer
    return {
        self: SelfReducer.self
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)


