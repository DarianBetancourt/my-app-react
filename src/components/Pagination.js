import React from 'react'

const Pagination = ({prev,next,onPrevious,onNext}) => {
    
    const handlePrevious = () => {
        console.log("prev")
        onPrevious();
    }

    const handleNext = () => {
        console.log("next")
        onNext();
    }
    
  return (
    <nav className="justify-content-center w-100 text-center">
        <div className="btn-group btn-group-lg mb-5 shadow" role="group" aria-label="Basic mixed styles example">
            {   prev ? 
                    <button type="button" className="btn btn-info bg-gradient text-black-50 fw-bold" onClick={handlePrevious}>Previous</button>
                : <button type="button" className="btn btn-info bg-gradient text-white-50 fw-bold" disabled>Previous</button>  
            }
            {   next ? 
                    <button type="button" className="btn btn-info bg-gradient text-black-50 fw-bold" onClick={handleNext}>Next</button>
                :   <button type="button" className="btn btn-info bg-gradient text-white-50  fw-bold" disabled>Next</button>
            }
        </div>
    </nav>
  )
}

export default Pagination