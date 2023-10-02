import { useState } from "react"

const AddTimer = (props) => {

    const [timerLabel, setTimerLabel] = useState('')
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const {add} = props

    const handleChange = (e, f) => {
        f(e.target.value)
    }

    const handleSubmit = (timer) => {
        add(timer)
    }

    return (
        <>
            <span>{timerLabel || '?'} due in {hours} hour{hours !== 1 ? 's' : ''} and {minutes} minute{minutes !== 1 ? 's' : ''}</span>
            <form onSubmit={() => handleSubmit({timerLabel, hours, minutes})}>
                <input type="submit" id="create-timer" name="create-timer" value="Create Timer"/>
                <div>
                    <span>Task</span>
                    <input type="text" id="label" name="label" value={timerLabel} onChange={e => handleChange(e, setTimerLabel)}/>
                </div>
                <span className="timeSpan">
                    <label htmlFor="hours">Hours</label>
                    <input type="number" id="hours" name="hours" min={0} max={23} value={hours} onChange={e => handleChange(e, setHours)}/>
                </span>
                <span className="timeSpan">
                    <label htmlFor="minutes">Minutes</label>
                    <input type="number" id="minutes" name="minutes" min={0} max={59} value={minutes} onChange={e => handleChange(e, setMinutes)}/>
                </span>
            </form>
        </>
    )

}

export default AddTimer