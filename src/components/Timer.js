const Timer = (props) => {

    const {label, hrs, mins} = props
    return <li><p>{label} due in {hrs}hrs and {mins}mins</p></li>

}

export default Timer