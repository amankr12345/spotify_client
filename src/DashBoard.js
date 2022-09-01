import useAuth from './useAuth'
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi=new SpotifyWebApi({
    clientId:'53faba11f00e406bbae4973063a93172'
})
const DashBoard=({code})=>{
    const [search,setSearch]=useState("")
    const [searchResult,setSearchResult]=useState([])
    const accessToken=useAuth(code)

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
        if(!accessToken) return
            spotifyApi.setAccessToken(accessToken)
    },[accessToken])

    useEffect(()=>{
        if(!search) return setSearchResult([])
        if(!accessToken) return

        spotifyApi.searchTracks(search).then(res=>{
            res.body.tracks.items.map(track=>{
                const smallestAlbumImage=track.album.images.reduce(smallest,
                    image
                )
                return(
                    artist:track.artists[0].name,
                    title:track.name,
                    uri:track.uri,
                    albumUrl:track.albumUrl.images
                )
            })
        })
    },[search,accessToken])
    return(
        <>
            <input type='text' placeholder='search songs/artists' value={search} onChange={handleChange}/>
        <div>
            songs
        </div>
        </>
    )
}
export default DashBoard