import "../styles.css"


const Message = ({sender,text,time}) => {
  return (

      <div className={`message ${sender}`}>
          <p className="content">{text}</p>
          <p className="time">{time}</p>
        </div>

  )
}

export default Message