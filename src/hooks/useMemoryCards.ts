import { useEffect, useState } from 'react'
import { useFetchModyoImages } from './useFetchModyoImages'
import { ModyoImage, TCard } from '../@types/types'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  total: number
}

const getTransformedData = (images: ModyoImage[]): TCard[] => {
  return images.map((image) => ({
    id: uuidv4(),
    url: image.url,
    uuid: image.uuid,
    title: image.title
  }))
}

export const useMemoryCards = ({ total }: Props) => {
  const [cards, setCards] = useState<TCard[]>([])
  const { images, isFetching } = useFetchModyoImages({
    imagePerPage: total / 2
  })

  useEffect(() => {
    if (images.length > 0) {
      const cardsDuplicated = [...images, ...images]
      const cardsFormatted = getTransformedData(cardsDuplicated)
      const cardsRandomized = cardsFormatted.sort(() => Math.random() - 0.5)
      setCards(cardsRandomized)
    }
  }, [images])

  return {
    isFetching,
    cards
  }
}
