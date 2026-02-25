import {Aside} from '../components/Aside/Aside.jsx'
import {Chat} from '../components/Chat/Chat.jsx'
import './styles.css'


function HomePage() {

  return (
    <>
      <div className="home-page">
        <Aside />
        <Chat />
      </div>
    </>
  )
}

export { HomePage }
