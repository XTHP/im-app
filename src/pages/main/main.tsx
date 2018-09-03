import * as React from 'react'
import './main.less'
import PaneChat from '@/pages/pane-chat-list/pane-chat-list'
import PaneBody from '@/pages/pane-body/pane-body'
import Information from '@/pages/information/information'
export default class Main extends React.Component {
    public render() {
        return (
            <div className="main-wrap">
                <div className="layout-container show-pane">
                    <div className="pane-left">
                        <PaneChat />
                    </div>
                    <div className="pane-body">
                        <PaneBody />
                    </div>
                    <div className="pane-right">
                        <Information />
                    </div>
                </div>
            </div>
        )
    }
}

