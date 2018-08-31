import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './toast.less'
interface IStates {
    showToast: boolean,
    content: string
}
class Toast extends React.Component<{}, IStates>{
    public state = {
        content: '',
        showToast: false
    }
    public toggle({ showToast = true, content = '' }): void {
        if (!content) {
            this.setState({
                showToast
            })
        } else {
            this.setState({
                content,
                showToast
            })
        }

    }
    public render() {
        const toastClass = this.state.showToast ? 'show-toast' : 'hide-toast'
        return (
            <div className={'toast ' + toastClass} >
                {this.state.content}
            </div>
        )
    }
}

const toast = () => {
    const div: HTMLElement = document.createElement('div')
    document.body.appendChild(div)
    const notification = ReactDOM.render(React.createElement(Toast), div as HTMLElement)
    return {
        showToast(content: string) {
            notification.toggle({ showToast: true, content });
        },
        hideToast() {
            notification.toggle({ showToast: false });
        },
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }

    }
}

export default toast()