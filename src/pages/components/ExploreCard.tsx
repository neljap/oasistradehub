interface ExplTypes {
    title: String,
    img: string
    text: string
    pairs: any
}
const ExploreCard = ({title, img, text, pairs}: ExplTypes) => {
  return (
    <div className="bg-white dark:bg-black rounded shadow-lg p-4">
              <div className="bg-[#ededed] dark:bg-[#222736] rounded p-4 flex flex-col gap-4">
                <div className="flex flex-row gap-4 items-center">
                <img src={img} alt="" className="w-12" />
                <p className="font-[600] font-[Jost] text-2xl">{title}</p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <p>4.5</p>
                <p>11</p>
              </div>
              <p className="text-md">{text}</p>
              <div>
                <p className="font-[500]">Exchange:</p>
                <div className="flex flex-row items-center gap-1">
                  <p className="text-second font-[600] text-sm">{pairs[0]}</p>
                  <p className="text-second font-[600] text-sm">{pairs[1]}</p>
                  <p className="text-second font-[600] text-sm">{pairs[2]}</p>
                  <p className="text-second font-[600] text-sm">{pairs[3]}</p>
                </div>
                <p></p>
              </div>
              </div>
              
            </div>
  )
}

export default ExploreCard