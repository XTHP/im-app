import * as React from 'react'
import Avatar from '../avatar/avatar'
import './appbar.less'
export default class Appbar extends React.Component {
    public render() {
        return (
            <div className='appbar-wrap'>
                <Avatar />
            </div>
        )
    }
}
