export interface User {
  id: number,
  name: string,
  email: string,
}

export interface Tasks {
  id: number,
  idUser: number,
  task: string,
  done: boolean
}
