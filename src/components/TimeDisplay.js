const TimeDisplay = ({secondsCount}) => {
    const seconds = secondsCount % 60;
    const minutesCount = (secondsCount - seconds) / 60;
    const minutes = minutesCount % 60;
    const hours = (minutesCount - minutes) / 60;
  
    const twoDigits = (num) => String(num).padStart(2, '0');
    return (
        <div>
            <label>Time Counter</label>
            <span>{`${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`}</span>
        </div>
    )
}

export default TimeDisplay;