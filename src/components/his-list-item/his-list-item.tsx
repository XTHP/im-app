import * as React from 'react'
import './his-list-item.less'
import Avatar from '@/components/avatar/avatar'
import Popover from '@/components/popover/popover'
interface IProps {
    avatar: string,
    title: string,
    content: string,
    time: string,
    isLeft: boolean
}
interface IStates {
    open: boolean,
    trigger: HTMLSpanElement | null
}
export default class HisItem extends React.Component<IProps, IStates> {
    public state = {
        open: false,
        trigger: null
    }
    private popover: HTMLSpanElement
    constructor(props: IProps) {
        super(props)
    }
    public componentDidMount() {
        this.setState({
            trigger: this.popover
        })
    }
    public toggleClick = (e: any) => {
        this.setState({
            open: !this.state.open
        })
    }
    public close = (): void => {
        this.setState({
            open: false
        })
    }
    public render() {
        const { avatar, isLeft, title, content } = this.props
        return (
            <div className='his-item-wrap'>
                <div className="his-item-left">
                    <Avatar src={avatar} size={45} />
                </div>
                <div className={"his-content his-content-" + (isLeft ? "left" : "right")}>
                    <div className="content-title">
                        <span>{title}</span>
                        <span>11:30</span>
                    </div>
                    <div className="content-body">
                        <span className="content">{content}
                            <span ref={((ref: HTMLSpanElement) => this.popover = ref)} onClick={this.toggleClick} className="more">
                                <i className="material-icons icon-color">more_horiz</i>
                            </span>
                        </span>
                        <Popover open={this.state.open}
                            close={this.close}
                            trigger={this.state.trigger} />
                    </div>
                </div>
            </div >
        )
    }
}
