import { dependencies } from '../../dependencies'
import { withDependencies } from '../../hoc/withDependencies'
import { TodosContainer } from './TodosContainer'

// NOTE All dependency logic extracted in hoc/withDependencies
export default withDependencies(TodosContainer, {
  todoService: dependencies.TodoService,
})
