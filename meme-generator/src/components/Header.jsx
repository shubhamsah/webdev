import '../css/header.css'
export default function Header() {
    return(
        <header className="header">
            <img 
                src="./public/images/troll-face.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project - Meme Generator</h4>
        </header>
    )
}