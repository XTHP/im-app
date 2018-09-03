import * as React from 'react'
import './information.less'
import Appbar from '@/components/appbar/appbar'
import ScrollWrap from '@/components/scroll/scroll'
import Avatar from '@/components/avatar/avatar'
import Popover from '@/components/popover/popover'
import avatarSrc from '@/assets/image/avatartest.jpg'
export default class Information extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="information-wrap">
                <Appbar>
                    <Avatar slot="left" src={avatarSrc} />
                    <span slot="body" />
                    <div slot="right">
                        <button type="button"
                            className="button-icon">
                            <i className="material-icons icon-color">people</i>
                        </button>
                        <Popover>
                            <ul>
                                <li>设置</li>
                                <li>更多</li>
                            </ul>
                        </Popover>
                        <button
                            className="button-icon">
                            <i className="material-icons icon-color">more_vert</i>
                        </button>
                        <Popover>
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
                <ScrollWrap>
                    <>
                    </>
                </ScrollWrap>
            </div>
        )
    }
}