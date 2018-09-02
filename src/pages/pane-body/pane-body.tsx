import * as React from 'react'
import './pane-body.less'
import Appbar from '@/components/appbar/appbar'
import ScrollWrap from '@/components/scroll/scroll'
import Search from '@/components/search/search'
import Avatar from '@/components/avatar/avatar'
import HisItem from '@/components/his-list-item/his-list-item'
import Popover from '@/components/popover/popover'
import avatarSrc from '@/assets/image/avatartest.jpg'
export default class PaneBody extends React.Component {
    public searchRef: HTMLButtonElement
    public state = {
        open: false,
        searchRef: HTMLButtonElement
    }
    private scroll: any
    public componentDidMount() {
        this.scroll.scrollBottom()
        this.setState({
            searchRef: this.searchRef
        })
    }
    public test = () => {
        this.setState({
            open: !this.state.open
        })
    }
    public render() {
        return (
            <div className="pane-body-wrap">
                <Appbar>
                    <Avatar slot="left" src={avatarSrc} />
                    <span slot="body">XTHP</span>
                    <div slot="right">
                        <button type="button"
                            ref={(ref: HTMLButtonElement) => this.searchRef = ref}
                            onClick={this.test}
                            className="button-icon">
                            <i className="material-icons icon-color">search</i>
                        </button>
                        <Popover open={this.state.open} trigger={this.state.searchRef} />
                        <button className="button-icon">
                            <i className="material-icons icon-color">more_vert</i>
                        </button>
                    </div>
                </Appbar>
                <ScrollWrap ref={(ref: any) => this.scroll = ref}>
                    <>
                        <section>
                            <HisItem avatar={avatarSrc}
                                key={Math.random()}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0}
                                isLeft={true} />
                            <HisItem avatar={avatarSrc}
                                key={Math.random()}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0}
                                isLeft={true} />
                            <HisItem avatar={avatarSrc}
                                key={Math.random()}
                                title="XTHP"
                                content="你好呀"
                                time="11:30"
                                num={0}
                                isLeft={true} />
                        </section>
                    </>
                </ScrollWrap>
                <Search />
            </div>
        )
    }
}