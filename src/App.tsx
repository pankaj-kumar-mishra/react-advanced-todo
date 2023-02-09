import './styles/general.scss'
import { Header } from './partials/Header/Header'
import TodosContainerHoc from './containers/TodosContainer'

function App() {
  return (
    <>
      <Header />
      <div className="ml-auto mr-auto" style={{ width: '500px' }}>
        <TodosContainerHoc />
      </div>
    </>
  )
}

export default App
