import { useState, useEffect } from 'react'

import { ModyApiResponse, ModyoImage } from '../@types'
import { NUMBER_OF_UNIQUE_CARDS } from '../utils/constans'
import { request } from '../utils/request'

const getAdaptedData = ({ entries }: ModyApiResponse): ModyoImage[] => {
  return entries.map(({ fields }) => fields.image)
}

export const useFetchModyoImages = () => {
  const [images, setImages] = useState<ModyoImage[]>([])
  const [isFetching, setIsFetchig] = useState(false)

  useEffect(() => {
    request<ModyApiResponse>(
      `/content/spaces/animals/types/game/entries?per_page=${NUMBER_OF_UNIQUE_CARDS}`
    )
      .then((data) => {
        setImages(getAdaptedData(data))
      })
      .catch((e: Error) => {
        console.log(e)
      })
      .finally(() => {
        setIsFetchig(false)
      })
  }, [])

  return {
    images,
    isFetching
  }
}
