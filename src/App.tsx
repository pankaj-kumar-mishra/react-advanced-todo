import './styles/general.scss'
import { Header } from './partials/Header/Header'
import { TodosContainer } from './containers/TodosContainer/TodosContainer'

function App() {
  return (
    <>
      <Header />
      <div className="ml-auto mr-auto" style={{ width: '500px' }}>
        <TodosContainer />
      </div>
    </>
  )
}

export default App
