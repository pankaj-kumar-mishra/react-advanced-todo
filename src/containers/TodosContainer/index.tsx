import { HttpAdapter } from '../../adapters/HttpAdapter'
import { TodoService } from '../../services/TodoService'
import { TodosContainer } from './TodosContainer'

const WithDependencyOfTodoService = (Component: any) => {
  const httpAdapter = new HttpAdapter({ baseUrl: 'http://localhost:3001' })
  const todoService = new TodoService(httpAdapter)

  return () => <Component todoService={todoService} />
}

// const TodosContainerWithDependencyOfTodoService =
//   WithDependencyOfTodoService(TodosContainer)
// export default TodosContainerWithDependencyOfTodoService

const TodosContainerHoc = WithDependencyOfTodoService(TodosContainer)

export default TodosContainerHoc
