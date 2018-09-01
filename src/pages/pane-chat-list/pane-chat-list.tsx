import * as React from 'react'
import './pane-chat-list.less'
import Appbar from '@/components/appbar/appbar'
import ScrollWrap from '@/components/scroll/scroll'
import Avatar from '@/components/avatar/avatar'
import ListItem from '@/components/list-item/list-item'
import avatarSrc from '@/assets/image/avatartest.jpg'
export default class PaneChatList extends React.Component {
    public render() {
        return (
            <div className="pane-chat-wrap">
                <Appbar>
                    <Avatar slot="left" src={avatarSrc} />
                    <span slot="body" />
                    <div slot="right">
                        <button type="button" className="button-icon">
                            <i className="material-icons icon-color">people</i>
                        </button>
                        <button className="button-icon">
                            <i className="material-icons icon-color">more_vert</i>
                        </button>
                        <button className="button-icon">
                            <i className="material-icons icon-color">close</i>
                        </button>
                    </div>
                </Appbar>
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