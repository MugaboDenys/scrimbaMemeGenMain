import React, { useState } from "react"
import memesData from "../memesData.js"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = useState({
        topText : "",
        Bottom : "",
        randomImg : "http://i.imgflip.com/1bij.jpg"
    })
    const [allImgs, setAllImgs] = useState(memesData)
    function getMemeImage() {
        const memesArray = allImgs.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(meme=>({...meme, randomImg : url}))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
                <img className="meme--image" src={meme.randomImg} alt="" />
        </main>
    )
}