import { dependencies } from '../../dependencies'
import { withDependencies } from '../../hoc/withDependencies'
import { EditTodoContainer } from './EditTodoContainer'

export default withDependencies(EditTodoContainer, {
  todoService: dependencies.TodoService,
})
