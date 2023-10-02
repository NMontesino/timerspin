import Timer from "./Timer"

const TimerContainer = (props) => {

    const {list} = props
    return <ul>{list.map((timer) => <Timer timer={timer}></Timer>)}</ul>

}

export default TimerContainer