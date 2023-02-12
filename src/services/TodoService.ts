import { HttpAdapter } from '../adapters/HttpAdapter'
import { Todo } from '../models/Todo'

export class TodoService {
  private readonly http: HttpAdapter

  constructor(httpAdapter: HttpAdapter) {
    this.http = httpAdapter
  }

  async getTodo(id: number) {
    return this.http.get<Todo>(`/todos/${id}`)
  }

  async getAllTodo() {
    return this.http.get<Todo[]>('/todos')
  }

  async addTodo(todo: string) {
    return this.http.post<{ todo: string }>('/todos', { todo })
  }

  async updateTodo(id: number, todo: Partial<Todo>) {
    return this.http.patch<Partial<Todo>>(`/todos/${id}`, todo)
  }

  async deleteTodo(id: number) {
    return this.http.delete<{ id: number }>('/todos', { id })
  }
}

// PK Before extract to Adapter
// export class TodoService {
//   private todosUrl = 'http://localhost:3001/todos'
//   private contentType = 'application/json'

//   async getAllTodo() {
//     return fetch(this.todosUrl)
//       .then((res) => res.json())
//       .then((data) => data)
//   }

//   async addTodo(todo: string) {
//     return fetch(this.todosUrl, {
//       method: 'POST',
//       body: JSON.stringify({ todo }),
//       headers: {
//         'Content-Type': this.contentType,
//       },
//     }).then((res) => res)
//   }

//   async deleteTodo(id: number) {
//     return fetch(this.todosUrl, {
//       method: 'DELETE',
//       body: JSON.stringify({ id }),
//       headers: {
//         'Content-Type': this.contentType,
//       },
//     }).then((res) => res)
//   }
// }
