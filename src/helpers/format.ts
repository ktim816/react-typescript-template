import dayjs, { Dayjs } from 'dayjs'

export const formatDate = (date?: Dayjs | string, format = 'DD.MM.YYYY') => {
  return dayjs(date).format(format)
}
