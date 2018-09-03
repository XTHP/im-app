import * as React from 'react'
import './msg-send.less'
interface IProps {
    wrap: any
}
export default class MsgSend extends React.Component<IProps, {}> {
    public render() {
        return (
            <div className='msg-send-wrap'>
                <div className="msg-send-emoil">
                    <button className="button-icon">
                        <i className="material-icons icon-color">tag_faces</i>
                    </button>
                </div>
                <div className="msg-send-input-wrap">
                    <input type="text" placeholder="请输入信息" />
                </div>
                <div className="msg-send-send">
                    <button className="button-icon">
                        <i className="material-icons icon-color">send</i>
                        {/* <i className="material-icons icon-color">add</i> */}
                    </button>
                </div>
            </div>
        )
    }
}
