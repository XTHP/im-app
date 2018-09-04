import * as React from 'react'
import './main.less'
import { connect } from 'react-redux'
import PaneChat from '@/pages/pane-chat-list/pane-chat-list'
import PaneBody from '@/pages/pane-body/pane-body'
import Information from '@/pages/information/information'
import { change_right } from '@/redux/action/status'
interface IProps {
    right_state: boolean
}
class Main extends React.Component<IProps> {
    public render() {
        return (
            <div className="main-wrap">
                <div className={`layout-container ${this.props.right_state ? 'show-pane' : ''}`}>
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
            </div >
        )
    }
}
// 映射修改state方法
const mapDispatchToProps = {
    change_right
}
// 映射state
function mapStateToProps(state: any, ownProps: any): object {
    const statusReducer = state.statusReducer
    return {
        right_state: statusReducer.right_information
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)

