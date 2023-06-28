import youtubeLogo from '/src/assets/images/youtube-logo-hd-8.png'

export default function Logo(){
    return (
        <div className="logo">
          <img className="w-10" src={youtubeLogo} alt="Youtube Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Youtube <sup>PH</sup> 
          </span>
        </div>
    )
}