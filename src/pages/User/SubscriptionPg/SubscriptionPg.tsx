

const SubscriptionPg = () => {
  
  // const SelectPack = ["Select Package", "Starter Package", "Growth Package", "Premium Package"]

  return (
    <div>
      <div className="container">
        <h2>INVESTMENT</h2>
        <div className="w-full md:w-1/2 mx-auto flex flex-col gap-1 items-center text-center">
          <h3>Get Started with your Investment</h3>
          <p>An investment has never been easy but with Deep Margins, we have made it simple with mega returns</p>
        </div>
        <div className="shadow-md rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 justify-start items-start mt-8 px-4 py-8">
           <div className="col-span-2">
            <h4>Investment Plan</h4>
            <div className="mr-16 ">
             <select name="" id="" className="w-full py-2 rounded">
              <option value="">Select package</option>
              <option value="">Starter Package</option>
            </select> 
            </div>
            <div>
              <h3>Select from quick amount</h3>
              <div className="flex flex-row gap-2 py-2">
                <button className="py-1 px-2 rounded-md shadow font-[500]">$100</button>
                <button>$100</button>
                <button>$100</button>
                <button>$100</button>
                <button>$100</button>
              </div>
            </div>
           </div>
           <div>
            <h3>Checkout</h3>
            <div className="py-3">
             <hr /> 
            </div>
            
            <div className="grid grid-cols-2 justify-start items-center pb-4">
            <div>
              <h4>Investment Plan</h4>
              <p>Basic Plan</p>
            </div>
            <div>
              <h4>Duration</h4>
              <p>2 Days</p>
            </div>
            </div>
            <div className="grid grid-cols-2 justify-start items-center pb-4">
            <div>
              <h4>Investment Plan</h4>
              <p>Basic Plan</p>
            </div>
            <div>
              <h4>Duration</h4>
              <p>2 Days</p>
            </div>
            </div>
            <div className="grid grid-cols-2 justify-start items-center pb-4">
            <div>
              <h4>Investment Plan</h4>
              <p>Basic Plan</p>
            </div>
            <div>
              <h4>Duration</h4>
              <p>2 Days</p>
            </div>
            </div>
            <div className="py-3">
             <hr /> 
            </div>
            <div className="grid grid-cols-2 justify-between items-end pb-4">
            <div>
              <h4>Investment Plan</h4>
              <p>Basic Plan</p>
            </div>
            <div>
              <h4>Duration</h4>
              <p>2 Days</p>
            </div>
            </div>
           </div>
           
        </div>
        
      </div>
      <div className="py-3">
        <div className="container">
            <p>2025 © Deep Margins</p>
        </div>
          
           </div>
    </div>
  )
}

export default SubscriptionPg