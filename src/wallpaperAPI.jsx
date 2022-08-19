
import { useEffect, useState } from "react";


function useUnsplashAPI() {
  const [wallpaperData, setWallpaperData] = useState(null);

  
  useEffect(() => {
    setInterval(() => {
      // UNSPLASH_API_KEY
      fetch("https://api.unsplash.com/photos/random/?client_id=Miuk1bBL-OKdtg_AllyccHi6Opk5_C1KuqCbjrPGftM&orientation=landscape")
        .then(res => res.json())
        .then(data => setWallpaperData(data))
    }, 144000)
  }, [])

  return {wallpaperData, setWallpaperData}
}

export default useUnsplashAPI