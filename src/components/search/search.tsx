import * as React from 'react'
import './search.less'
interface IProps {
    wrap: any
}
export default class Search extends React.Component<IProps, {}> {
    public render() {
        return (
            <div className='search-wrap'>
                <div className="search-emoil">
                    <button className="button-icon">
                        <i className="material-icons icon-color">tag_faces</i>
                    </button>
                </div>
                <div className="search-input-wrap">
                    <input type="text" placeholder="请输入信息" />
                </div>
                <div className="search-send">
                    <button className="button-icon">
                        <i className="material-icons icon-color">send</i>
                        {/* <i className="material-icons icon-color">add</i> */}
                    </button>
                </div>
            </div>
        )
    }
}
