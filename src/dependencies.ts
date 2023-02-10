import { HttpAdapter } from './adapters/HttpAdapter'
import { TodoService } from './services/TodoService'

const httpAdapter = new HttpAdapter({ baseUrl: 'http://localhost:3001' })
const todoService = new TodoService(httpAdapter)

class DependencyContainer {
  private _dependencies = {}

  add<T>(key: symbol, dependency: T) {
    // this._dependencies[key] = dependency
    // NOTE to define we can use below approach
    Object.defineProperty(this._dependencies, key, {
      value: dependency,
    })
  }

  get<T>(key: symbol): T {
    return Object.getOwnPropertyDescriptor(this._dependencies, key)?.value
  }
}

const dependencies = {
  TodoService: Symbol('TodoService'),
}

const container = new DependencyContainer()
container.add(dependencies.TodoService, todoService)

export { dependencies, container }

// // NOTE  container contains all services with key {key: service}
// export const container = {
//   DITodoService: todoService,
// } as any
