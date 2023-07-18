import { useEffect, useState } from "react"

export const useMedia = (mediaQuery) => {
  const [match, setMatch] = useState(true)
  const setMatchValue = (matchEvent) => {
    setMatch(matchEvent.matches)
  }

  useEffect(() => {
    const mediaList = window.matchMedia(mediaQuery)
    setMatchValue(mediaList)
    const handler = (matchEvent) => setMatchValue(matchEvent)
    mediaList.addListener(handler)
    return () => mediaList.removeListener(handler)
  }, [mediaQuery])
  return match
}
