import React from 'react';
import { YieldTokenGraphic } from './assets/YieldTokenGraphic';
import { ReferralTreeGraphic } from './assets/ReferralTreeGraphic';

function App() {
  return (
    <div className='min-h-screen'>
      {/* Title Section - Content responsive with padding */}
      <section className='flex items-center justify-center bg-gray-100 px-4 sm:px-6 py-16 sm:py-20 md:py-24'>
        <div className='text-center max-w-4xl w-full'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6'>
            <span className='text-red-600'>Incentive</span>Engine
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 px-2'>
            Smart contract toolkit that turns users into your growth team
          </p>
          <blockquote className='border-l-4 border-blue-500 px-4 sm:px-6 py-4 sm:py-5 bg-white rounded shadow-md mx-auto w-full max-w-[calc(100%-2rem)] sm:max-w-md md:max-w-lg'>
            <p className='text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed'>
              "First time founders are obsessed with product.
              <br />
              Second time founders are obsessed with{' '}
              <span className='text-red-600'>distribution</span>."
            </p>
            <cite className='text-xs sm:text-sm text-gray-500 block mt-3 sm:mt-4'>
              — Justin Kan
            </cite>
            {/* <a href="https://x.com/justinkan/status/1059989657218248704?lang=en" className="text-blue-500 hover:underline block mt-2">View on X</a> */}
          </blockquote>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className='py-10 sm:py-12 md:py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row-reverse md:items-center md:gap-8 lg:gap-12'>
            {/* SVG Graphic */}
            <div className='shrink-0 mb-6 md:mb-0 md:w-1/2 lg:w-2/5'>
              <YieldTokenGraphic />
            </div>
            {/* Text Content */}
            <div className='md:w-1/2 lg:w-3/5'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 mb-4 sm:mb-6 md:mb-8'>
                YieldToken
              </h2>
              <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed'>
                YieldToken allows you to{' '}
                <span className='text-red-600'>
                  create tokens with built-in economic incentives
                </span>
                . Plug into a variety of yield protocols to encourage users to
                hold and use your token. Adjust the token's velocity with
                concepts such as staking rewards, demurrage, and more.
                <br />
                <br /> Use in conjunction with{' '}
                <span className='font-bold text-blue-600'>ReferralTree</span> to
                create a positive feedback loop that aligns token holders with
                long-term project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 */}
      <section className='py-10 sm:py-12 md:py-16 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row-reverse md:items-center md:gap-8 lg:gap-12'>
            {/* SVG Graphic */}
            <div className='shrink-0 mb-6 md:mb-0 md:w-1/2 lg:w-2/5'>
              <ReferralTreeGraphic />
            </div>
            {/* Text Content */}
            <div className='md:w-1/2 lg:w-3/5'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 sm:mb-6 md:mb-8'>
                ReferralTree
              </h2>
              <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed'>
                ReferralTree implements a{' '}
                <span className='text-red-600'>
                  {' '}
                  multi-level referral program
                </span>{' '}
                with automated reward distribution. Unlock viral growth by
                incentivizing your users to refer new users to your product.
                Users can build multi-level networks where referrers earn
                commissions on their network's activity, creating sustainable
                growth incentives for decentralized applications.
                <br />
                <br /> Use in conjunction with{' '}
                <span className='font-bold text-green-600'>YieldToken</span> to
                create a positive feedback loop that aligns token holders with
                long-term project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3 */}
      {/* <section className='py-10 sm:py-12 md:py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8'>
            Governance
          </h2>
          <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed'>
            Governance provides decentralized decision-making tools for DAOs and
            crypto projects. It includes quadratic voting, proposal creation,
            and automated execution of approved changes, ensuring
            community-driven development with minimal overhead.
          </p>
        </div>
      </section> */}

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-6 sm:py-8'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-sm sm:text-base'>2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
