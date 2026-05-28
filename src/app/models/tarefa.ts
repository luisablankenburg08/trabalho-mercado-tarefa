export type Tarefa = {
  id:number,
  titulo: string,
  concluida: boolean,
  prioridade: 'baixa' | 'media' | 'alta'
  dataCriacao: Date
}
