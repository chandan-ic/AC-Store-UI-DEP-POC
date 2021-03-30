import React from "react";

const TestRideBanner = () => {

  return (
    <section className="sm:block hidden bg-test-ridepgBg bg-center p-2 h-56">
      <div class="container p-16 space-y-1" >
        <div className="w-3/5 text-black bg-white bg-opacity-10 p-12" >
          <h1 className="dpTRH1">
            Request a Test Ride
                     </h1>
          <p className="dpTRP px-4 flex-row">
            <div className="p-1">
              <span className="p-1"> {'>'}Your Desired Bike</span>
              <span className="p-1"> {'>'}Your Desired Time</span>
              <span className="p-1">{'>'}Your Desired Location</span>
            </div>
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestRideBanner;
