export type WithoutId<T = any> = Omit<T, 'id'>

export interface WithId {
  id: any
  [key: string]: any
}
