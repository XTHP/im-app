import * as React from 'react'
import './pane-body.less'
import { connect } from 'react-redux'
import Appbar from '@/components/appbar/appbar'
import ScrollWrap from '@/components/scroll/scroll'
import MsgSend from '@/components/msg-send/msg-send'
import Avatar from '@/components/avatar/avatar'
import HisItem from '@/components/his-list-item/his-list-item'
import Popover from '@/components/popover/popover'
import avatarSrc from '@/assets/image/avatartest.jpg'
import { change_right } from '@/redux/action/status'
interface IProps{
    change_right:(a:boolean)=>void,
    right_state: boolean
}
class PaneBody extends React.Component<IProps,{}> {
    public moreRef: HTMLButtonElement
    public state = {
        moreRef: HTMLButtonElement,
        open: false
    }
    private scroll: any
    public componentDidMount() {
        this.scroll.scrollBottom()
        this.setState({
            moreRef: this.moreRef
        })
    }
    public moreClick = (e: any) => {
        this.setState({
            open: !this.state.open
        })
    }
    public changeRight=(e:any)=>{
        console.log(this.props.right_state)
        this.props.change_right(!this.props.right_state)
    }
    public render() {
        return (
            <div className="pane-body-wrap">
                <Appbar>
                    <Avatar slot="left" src={avatarSrc} />
                    <span slot="body">XTHP</span>
                    <div slot="right">
                        <button type="button"
                            className="button-icon">
                            <i className="material-icons icon-color">search</i>
                        </button>
                        <button className="button-icon"
                            ref={(ref: HTMLButtonElement) => this.moreRef = ref}
                            onClick={this.moreClick}>
                            <i className="material-icons icon-color">more_vert</i>
                        </button>
                        <Popover open={this.state.open} trigger={this.state.moreRef}>
                            <ul>
                                <li onClick={this.changeRight}>群组信息</li>
                                <li>退出聊天</li>
                            </ul>
                        </Popover>
                    </div>
                </Appbar>
                <ScrollWrap ref={(ref: any) => this.scroll = ref}>
                    <>
                        <section>
                            <HisItem avatar={avatarSrc}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0}
                                isLeft={true} />
                            <HisItem avatar={avatarSrc}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0}
                                isLeft={true} />
                            <HisItem avatar={avatarSrc}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0}
                                isLeft={true} />
                            <HisItem avatar={avatarSrc}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0}
                                isLeft={false} />
                        </section>
                    </>
                </ScrollWrap>
                <MsgSend />
            </div>
        )
    }
}
// 映射修改state方法
const mapDispatchToProps = {
    change_right
}
// 映射state
function mapStateToProps(state: any, ownProps: any): object {
    const statusReducer = state.statusReducer
    return {
        right_state: statusReducer.right_information
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PaneBody)