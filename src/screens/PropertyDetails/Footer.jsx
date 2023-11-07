import React from 'react'

const Footer = () => {
  return (
    <>
        <section className="my-16 mb-4">
        <h1 className="h1 text-3xl font-bold text-center mb-2 text-black">
          Developer & Property Manager
        </h1>

        <div className="grid md:grid-cols-2 gap-y-8 place-items-center my-14">
          <div className="center flex-col max-w-lg gap-4">
            <h1 className="text-2xl">
                <img src="https://oryx.maxocart.com/assets/dream2earn/titan.svg" alt="" />
            </h1>
            <h2 className="text-sm font-bold ">
              Developer: Titan Real Estate Corp.
            </h2>
            <p className="text-xs text-gray-400 text-center">
              This company is fictitious and for illustrative purposes only.
              Titan is a multinational real estate development company based in
              London, UK. The company operates internationally and provides real
              estate development and management services.
            </p>
          </div>
          <div className="center flex-col max-w-lg gap-4">
            <h1 className="text-2xl">
                <img src="https://oryx.maxocart.com/assets/dream2earn/chill.svg" alt="" />
            </h1>
            <h2 className="text-sm font-bold ">
              Property Manager: Ben & Chill
            </h2>
            <p className="text-xs text-gray-400 text-center">
              This company is fictitious and for illustrative purposes only.
              Founded in 2012, Bed & Chill specializes in full-service property
              management services. The company’s mission is to help landlords
              save time and turn their house or apartment into a profitable
              revenue stream.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer