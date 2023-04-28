import { useState, useEffect } from 'react'

import { ModyApiResponse, ModyoImage } from '../@types/types'
import { request } from '../utils/request'

const getAdaptedData = ({ entries }: ModyApiResponse): ModyoImage[] => {
  return entries.map(({ fields }) => fields.image)
}

type Reponse = {
  images: ModyoImage[]
  isFetching: boolean
}

type Props = {
  imagePerPage?: number
}

export const useFetchModyoImages = ({ imagePerPage = 20 }: Props): Reponse => {
  const [images, setImages] = useState<ModyoImage[]>([])
  const [isFetching, setIsFetchig] = useState(false)

  useEffect(() => {
    request<ModyApiResponse>(
      `/content/spaces/animals/types/game/entries?per_page=${imagePerPage}`
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
  }, [imagePerPage])

  return {
    images,
    isFetching
  }
}
