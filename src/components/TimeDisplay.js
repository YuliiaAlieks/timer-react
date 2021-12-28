const TimeDisplay = ({ secondsCount }) => {
    const seconds = secondsCount % 60;
    const minutesCount = (secondsCount - seconds) / 60;
    const minutes = minutesCount % 60;
    const hours = (minutesCount - minutes) / 60;

    const twoDigits = (num) => String(num).padStart(2, '0');
    return (
        <div className="container">
            <h1 id="headline">Time Counter</h1>
            <div id="countdown">
                <ul>
                    <li><span id="hours">{twoDigits(hours)}</span>Hours</li>
                    <li><span id="minutes">{twoDigits(minutes)}</span>Minutes</li>
                    <li><span id="seconds">{twoDigits(seconds)}</span>Seconds</li>
                </ul>
            </div>
        </div>
    )
}

            export default TimeDisplay;