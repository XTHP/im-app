import * as React from 'react'
import './pane-chat-list.less'
import Appbar from '@/components/appbar/appbar'
import Search from '@/components/search/search'
import ScrollWrap from '@/components/scroll/scroll'
import Avatar from '@/components/avatar/avatar'
import ListItem from '@/components/list-item/list-item'
import Popover from '@/components/popover/popover'
import avatarSrc from '@/assets/image/avatartest.jpg'
interface IStates {
    setUp: boolean,
    setUpRef: HTMLButtonElement | null
    more: boolean,
    moreRef: HTMLButtonElement | null
}
export default class PaneChatList extends React.Component<{}, IStates> {
    public state = {
        more: false,
        moreRef: null,
        setUp: false,
        setUpRef: null,

    }
    public setUp: HTMLButtonElement
    public more: HTMLButtonElement
    public componentDidMount() {
        this.setState({
            moreRef: this.more,
            setUpRef: this.setUp
        })
    }
    public setUpClick = (e: React.MouseEvent) => {
        this.setState({
            setUp: !this.state.setUp
        })
    }
    public moreClick = (e: React.MouseEvent) => {
        this.setState({
            more: !this.state.more
        })
    }
    public render() {
        return (
            <div className="pane-chat-wrap">
                <Appbar>
                    <Avatar slot="left" src={avatarSrc} />
                    <span slot="body" />
                    <div slot="right">
                        <button type="button"
                            ref={(ref: HTMLButtonElement) => this.setUp = ref}
                            onClick={this.setUpClick}
                            className="button-icon">
                            <i className="material-icons icon-color">people</i>
                        </button>
                        <Popover open={this.state.setUp} trigger={this.state.setUpRef}>
                            <ul>
                                <li>设置</li>
                                <li>更多</li>
                            </ul>
                        </Popover>
                        <button onClick={this.moreClick}
                            className="button-icon"
                            ref={(ref: HTMLButtonElement) => this.more = ref} >
                            <i className="material-icons icon-color">more_vert</i>
                        </button>
                        <Popover open={this.state.more} trigger={this.state.moreRef}>
                            <ul>
                                <li>设置</li>
                                <li>退出</li>
                            </ul>
                        </Popover>
                        <button className="button-icon">
                            <i className="material-icons icon-color">close</i>
                        </button>
                    </div>
                </Appbar>
                <Search />
                <ScrollWrap>
                    <>
                        <ListItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={0} />
                        <ListItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={12} />
                        <ListItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={12} />
                        <ListItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={12} />
                        <ListItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={12} />
                        <ListItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={12} />

                        <ListItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={12} />
                        <ListItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={12} />
                        <ListItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={12} />
                        <ListItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={12} />
                    </>
                </ScrollWrap>
            </div>
        )
    }
}