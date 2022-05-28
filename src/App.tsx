import './App.css'
import { Widgets } from './components/Widgets'


interface ButtonProps{
  text: string;
}
function Button(props: ButtonProps){
  return <button className="bg-violet-500 px-4 h-10 rounded shadow-md text-violet-100 hover:bg-violet-700 transition-colors">{props.text}</button>
}

function App() {

  return (
    <div className="App flex gap-2">
        <Widgets />
    </div>
  )
}

export default App
