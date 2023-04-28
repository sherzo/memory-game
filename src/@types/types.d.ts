export enum Steps {
  Welcome = 'welcome',
  Game = 'playing',
  End = 'end'
}

export type ModyApiResponse = {
  entries: ModyoAnimalEntry[]
}

export type ModyoAnimalEntry = {
  meta: {
    name: string
    uuid: string
    // TODO: tipado
  }
  fields: {
    image: ModyoImage
  }
}

export type ModyoImage = {
  url: string
  uuid: string
  title: string
  descrption: string | null
  alt_text: string | null
  content_type: string
}

export type TCard = {
  id: string
  url: string
  uuid: string
  title: string
}

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}

export type CardSelected = Pick<TCard, 'uuid' | 'id'>
