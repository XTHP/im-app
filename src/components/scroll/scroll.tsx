import * as React from 'react'
import './scroll.less'
interface IProps {
    wrap: any
}
export default class Scroll extends React.Component<IProps, {}> {
    public scrollWrap: HTMLDivElement
    // public componentDidMount() {
    //     console.log(this.scrollWrap)
    // }
    // 滚动到底部
    public scrollBottom(callback: () => any) {
        requestAnimationFrame(() => {
            const scrollWrap = this.scrollWrap
            const scrollHeight = scrollWrap.scrollHeight
            const offsetHeight = scrollWrap.offsetHeight
            const distance = scrollHeight - offsetHeight
            for (let i = 0; i < 60; i++) {
                setTimeout(() => {
                    scrollWrap.scrollTop = scrollWrap.scrollTop + distance * (i / 60)
                    if (i === 60 && typeof callback === 'function') {
                        callback()
                    }
                }, 500 * (i / 60))
            }

        })
    }
    public render() {
        return (
            <div ref={(ref: HTMLDivElement) => this.scrollWrap = ref} className='scroll-wrap'>
                {this.props.children}
                {/* <div className="srcoll-element-y" /> */}
            </div>
        )
    }
}
