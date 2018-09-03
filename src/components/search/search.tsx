import * as React from 'react'
import './search.less'
interface IProps {
    wrap: any
}
export default class Search extends React.Component<IProps, {}> {
    public render() {
        return (
            <div className='search-wrap'>
                <span className="search-icon">
                    <i className="material-icons icon-color">search</i>
                </span>
                <input type="text" placeholder="搜索" />
            </div>
        )
    }
}
