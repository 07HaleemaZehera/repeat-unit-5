import React from 'react'

const Sorting = ({handleStar,handleCash}) => {
  return (
    <div>
      <div >
                <div >
                    <div className=""><h2>Rating</h2></div>
                    <div>
                        <button onClick={() => handleStar(1)}>1 Star</button>
                        <button onClick={() => handleStar(2)}>2 Star</button>
                        <button onClick={() => handleStar(3)}>3 Star</button>
                        <button onClick={() => handleStar(4)}>4 Star</button>
                    </div>
                </div>
                <div >
                    <div className=""><h2>Payment Method</h2></div>
                    <div>
                        <button onClick={() => handleCash('cash')}>Cash</button>
                        <button onClick={() => handleCash('card')}>Card</button>
                        <button onClick={() => handleCash('both')}>Both Cash and Card</button>
                    </div>
                    
                </div>
             
            </div>
    </div>
  )
}

export default Sorting
