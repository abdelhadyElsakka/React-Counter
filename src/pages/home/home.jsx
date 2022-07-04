import './homeStyle.css';
const myPic=new URL("../../assets/bg-image.png",import.meta.url)

export default function home() {
  return (
    <div className="bg">
      <div className='aboutText text-light'>
        <h1 className='text  '>Abdelhady ELSakka</h1>
        <p>Front-End Engineer </p>
      </div>
    </div>
    
  )
}
