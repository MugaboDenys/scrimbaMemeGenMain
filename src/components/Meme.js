import React, { useState } from "react"
import memesData from "../memesData.js"

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImg : "http://i.imgflip.com/1bij.jpg"
    })
    const [allImgs, setAllImgs] = useState(memesData)

    function getMemeImage() {
        const memesArray = allImgs.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(meme=>({...meme, randomImg : url}))
    }
    
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
                <div className="meme">
                    <img className="meme--image" src={meme.randomImg} alt="" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    )
}