import * as React from 'react'
import './pane-body.less'
import Appbar from '@/components/appbar/appbar'
import ScrollWrap from '@/components/scroll/scroll'
import Search from '@/components/search/search'
import Avatar from '@/components/avatar/avatar'
import HisItem from '@/components/his-list-item/his-list-item'
import avatarSrc from '@/assets/image/avatartest.jpg'
export default class PaneBody extends React.Component {
    public render() {
        return (
            <div className="pane-body-wrap">
                <Appbar>
                    <Avatar slot="left" src={avatarSrc} />
                    <span slot="body">XTHP</span>
                    <div slot="right">
                        <button type="button" className="button-icon">
                            <i className="material-icons icon-color">search</i>
                        </button>
                        <button className="button-icon">
                            <i className="material-icons icon-color">more_vert</i>
                        </button>
                    </div>
                </Appbar>
                <ScrollWrap>
                    <>
                        <HisItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={0} />
                        <HisItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={0} /><HisItem avatar={avatarSrc}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0} />
                        <HisItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={0} /><HisItem avatar={avatarSrc}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0} />
                        <HisItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={0} /><HisItem avatar={avatarSrc}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0} />
                        <HisItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={0} /><HisItem avatar={avatarSrc}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0} />
                        <HisItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={0} /><HisItem avatar={avatarSrc}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0} />
                        <HisItem avatar={avatarSrc}
                            title="XTHP"
                            content="你好呀"
                            time="11:30"
                            num={0} />
                    </>
                </ScrollWrap>
                <Search />
            </div>
        )
    }
}