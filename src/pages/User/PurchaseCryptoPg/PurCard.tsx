import { Link } from "react-router-dom"

interface Purcrtypes {
    name: String,
    link: any,
    color: String,
    img: string
}

const PurCard = ({name, link, color, img}: Purcrtypes) => {
  return (
    <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 dark:bg-[#2a3042]">
        <img src={img} alt="" className="w-full h-48 rounded-lg"/>
        <div className="flex flex-row justify-center items-center pt-2">
            <Link to={link} target="_blank">
            <button className={`bg-[${color}] rounded-full shadow px-4 py-2 text-sm font-[500]`}>Purchase from {name}</button>
            </Link>
            
        </div>
    </div>
  )
}

export default PurCard