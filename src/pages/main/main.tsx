import Appbar from '@/components/appbar/appbar'
import ScrollWrap from '@/components/scroll/scroll'
import * as React from 'react'
import './main.less'
export default class Main extends React.Component {
    public render() {
        return (
            <div className="main-wrap">
                <div className="layout-container">
                    <div className="pane-left">
                        <Appbar />
                        <ScrollWrap />
                    </div>
                </div>
            </div>
        )
    }
}

