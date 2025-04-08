interface ExplTypes {
    title: String,
    img: string
}
const ExploreCard = ({title, img}: ExplTypes) => {
  return (
    <div className="bg-white rounded shadow p-4">
              <div className="bg-[#ededed] rounded p-4 flex flex-col gap-4">
                <div className="flex flex-row gap-4 items-center">
                <img src={img} alt="" className="w-12" />
                <p className="font-[500] text-2xl">{title}</p>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <p>4.5</p>
                <p>11</p>
              </div>
              <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quas id ex quidem! Eligendi excepturi nulla nostrum ex id iusto?</p>
              <div>
                <p className="font-[500]">Exchange:</p>
                <div className="flex flex-row items-center gap-1">
                  <p className="text-second font-[500] text-sm">EUR/USD,</p>
                  <p className="text-second font-[500] text-sm">USD/JPY,</p>
                  <p className="text-second font-[500] text-sm">GPB/USD,</p>
                  <p className="text-second font-[500] text-sm">ETC</p>
                </div>
                <p></p>
              </div>
              </div>
              
            </div>
  )
}

export default ExploreCard