import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './popover.less'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
interface IProps {
    close: () => void,
    trigger: HTMLElement
}
class PopoverWrap extends React.Component<IProps, {}> {
    public popover: HTMLDivElement
    public state = {
        stylePopover: {}
    }
    constructor(props: IProps) {
        super(props)
    }
    public componentDidMount() {
        this.calculation(this.props.trigger)
        document.body.addEventListener('click', this.close)
    }
    public close = (e: any) => {
        this.props.close()
    }
    public componentWillUnmount() {
        document.body.removeEventListener('click', this.close)
    }
    /**
     * 计算位置
     */
    public calculation(trigger: HTMLElement) {
        let top: number
        let left: number
        const pos = trigger.getBoundingClientRect()
        requestAnimationFrame(() => {
            const popoverHeight = this.popover.offsetHeight;
            const popoverWidth = this.popover.offsetWidth
            const screenHeight = window.innerHeight
            const screenWidth = window.innerWidth
            top = pos.bottom + 2
            left = pos.left + 2
            if (pos.bottom > screenHeight - popoverHeight - 20) {
                top = pos.top - popoverHeight - 2
            }
            if (pos.right > screenWidth - popoverWidth - 20) {
                left = pos.right - popoverWidth - 2
            }
            this.setState({
                stylePopover: {
                    left: left + "px",
                    top: top + "px"
                }
            })
        })
    }
    public render() {
        return ReactDOM.createPortal(
            <>
                <div className='popover-wrap'
                    ref={(ref: HTMLDivElement) => this.popover = ref}
                    style={this.state.stylePopover}
                >
                    <ul>
                        <li>你好</li>
                    </ul>
                </div>
            </>,
            document.body as HTMLElement
        )
    }
}
function Popover(props: any) {
    return (
        <ReactCSSTransitionGroup
            transitionName="popover"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
        >
            {props.open ? <PopoverWrap trigger={props.trigger}
                close={props.close} /> : ''}
        </ReactCSSTransitionGroup >
    )
}
export default Popover
