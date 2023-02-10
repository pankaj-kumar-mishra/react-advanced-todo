import { HttpAdapter } from '../../adapters/HttpAdapter'
import { TodoService } from '../../services/TodoService'
import { TodosContainer } from './TodosContainer'

const httpAdapter = new HttpAdapter({ baseUrl: 'http://localhost:3001' })
const todoService = new TodoService(httpAdapter)

const container = {
  DITodoService: todoService,
} as any

const WithDependency = (Component: any, dependencies: any) => {
  const props = {} as any

  Object.keys(dependencies).forEach((propName) => {
    const dependencyKey = dependencies[propName] //"DITodoService"
    const dependency = container[dependencyKey] // todoService

    props[propName] = dependency
  })

  return () => <Component {...props} />
}

// PK "DITodoService" is the key of todoService
export default WithDependency(TodosContainer, {
  todoService: 'DITodoService',
})
