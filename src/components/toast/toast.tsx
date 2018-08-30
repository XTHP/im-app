import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './toast.less'
interface IProps {
    showToast: boolean,
    content: string
}
class Toast extends React.Component<IProps, {}>{
    public state = {
        content: '',
        showToast: false
    }
    public show({showToast=true,content = '您好' }) {
        this.setState({
            content,
            showToast: true
        })
    }
    public render() {
        return (
            <div className='hi-toast'>
                {this.state.content}
            </div>
        )
    }
}

const toast = (properties: IProps) => {
    const { ...props } = properties || {}
    const div: any = document.createElement('div')
    document.body.appendChild(div)
    const notification = ReactDOM.render(<Toast {...props} />, div)
    return {
        showToast() {
            notification.show({ showToast: true, content: "dasd" });
        }
    }
}

export default toast