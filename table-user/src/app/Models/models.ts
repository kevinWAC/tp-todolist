export interface User {
  id: number,
  name: string,
  email: string,
}

export interface Tasks {
  id: number,
  idUser: number,
  task: string,
  done: boolean,
  category: {
    id: number,
    category: string,
    color: string
  }
}

export interface Category {
  id: number,
  category: string,
  color: string
}
