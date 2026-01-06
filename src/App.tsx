import React from 'react';
import { YieldTokenGraphic } from './assets/YieldTokenGraphic';
import { ReferralTreeGraphic } from './assets/ReferralTreeGraphic';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50'>
      {/* Title Section - Hero with gradient background */}
      <section className='relative flex items-center justify-center px-4 sm:px-6 py-20 sm:py-28 md:py-32 overflow-hidden'>
        {/* Background gradient with subtle pattern */}
        <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-slate-50' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]' />

        <div className='relative text-center max-w-5xl w-full z-10'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 tracking-tight'>
            <span className='bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent'>
              Distro
            </span>
            <span className='bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'>
              Engine
            </span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-8 sm:mb-12 px-2 font-medium leading-relaxed'>
            Crypto-incentive toolkit that turns users into your growth team
          </p>
          <blockquote className='relative border-l-4 border-indigo-500 px-6 sm:px-8 py-6 sm:py-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg shadow-indigo-100/50 mx-auto w-full max-w-2xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50'>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/50 to-transparent rounded-xl pointer-events-none' />
            <p className='relative text-slate-700 italic text-base sm:text-lg md:text-xl leading-relaxed font-medium'>
              "First time founders are obsessed with product.
              <span className='block h-4' />
              Second time founders are obsessed with{' '}
              <span className='text-red-600 font-semibold'>distribution</span>
              ."
            </p>
            <cite className='relative text-sm sm:text-base text-slate-500 block mt-4 sm:mt-6 font-normal not-italic'>
              — Justin Kan
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Content Section 1 - YieldToken */}
      <section className='relative py-16 sm:py-20 md:py-24 bg-white'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent' />
        <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row-reverse md:items-center md:gap-12 lg:gap-16'>
            {/* Title - Mobile: order-1, Desktop: part of text section */}
            <div className='order-1 md:order-2 md:hidden mb-6'>
              <div className='inline-flex items-center gap-2 mb-4'>
                <div className='h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full' />
                <span className='text-sm font-semibold text-emerald-600 uppercase tracking-wider'>
                  Product
                </span>
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                YieldToken
              </h2>
            </div>
            {/* SVG Graphic with enhanced styling */}
            <div className='shrink-0 mb-8 md:mb-0 w-1/2 mx-auto md:w-1/2 lg:w-2/5 md:mx-0 order-2 md:order-1'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl blur-2xl opacity-60 transform scale-110' />
                <div className='relative bg-gradient-to-br from-emerald-50 to-white p-4 md:p-8 rounded-2xl shadow-lg shadow-emerald-100/50 border border-emerald-100/50'>
                  <YieldTokenGraphic />
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div className='md:w-1/2 lg:w-3/5 order-3 md:order-2'>
              {/* Title - Desktop only */}
              <div className='hidden md:block mb-6 md:mb-8'>
                <div className='inline-flex items-center gap-2 mb-4'>
                  <div className='h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full' />
                  <span className='text-sm font-semibold text-emerald-600 uppercase tracking-wider'>
                    Product
                  </span>
                </div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                  YieldToken
                </h2>
              </div>
              <p className='text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed space-y-4'>
                <span>
                  YieldToken allows you to{' '}
                  <span className='font-semibold text-red-600 bg-red-50 px-1.5 py-0.5 rounded'>
                    create tokens with built-in economic incentives
                  </span>
                  . Plug into a variety of yield protocols to encourage users to
                  hold and use your token.
                </span>
                <span className='block'>
                  Adjust the token's velocity with concepts such as staking
                  rewards, demurrage, and more.
                </span>
                <span className='block pt-2'>
                  Use in conjunction with{' '}
                  <span className='font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded'>
                    ReferralTree
                  </span>{' '}
                  to create a positive feedback loop that aligns token holders
                  with long-term project success.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 - ReferralTree */}
      <section className='relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.05),transparent_50%)]' />
        <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16'>
            {/* Title - Mobile: order-1, Desktop: part of text section */}
            <div className='order-1 md:order-2 md:hidden mb-6'>
              <div className='inline-flex items-center gap-2 mb-4'>
                <div className='h-1 w-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full' />
                <span className='text-sm font-semibold text-indigo-600 uppercase tracking-wider'>
                  Product
                </span>
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent'>
                ReferralTree
              </h2>
            </div>
            {/* SVG Graphic with enhanced styling */}
            <div className='shrink-0 mb-8 md:mb-0 w-1/2 mx-auto md:w-1/2 lg:w-2/5 md:mx-0 order-2 md:order-1'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl blur-2xl opacity-60 transform scale-110' />
                <div className='relative bg-gradient-to-br from-indigo-50 to-white p-4 md:p-8 rounded-2xl shadow-lg shadow-indigo-100/50 border border-indigo-100/50'>
                  <ReferralTreeGraphic />
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div className='md:w-1/2 lg:w-3/5 order-3 md:order-2'>
              {/* Title - Desktop only */}
              <div className='hidden md:block mb-6 md:mb-8'>
                <div className='inline-flex items-center gap-2 mb-4'>
                  <div className='h-1 w-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full' />
                  <span className='text-sm font-semibold text-indigo-600 uppercase tracking-wider'>
                    Product
                  </span>
                </div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent'>
                  ReferralTree
                </h2>
              </div>
              <p className='text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed space-y-4'>
                <span>
                  ReferralTree implements a{' '}
                  <span className='font-semibold text-red-600 bg-red-50 px-1.5 py-0.5 rounded'>
                    multi-level referral program
                  </span>{' '}
                  with automated reward distribution.
                </span>
                <span className='block'>
                  Unlock viral growth by incentivizing your users to refer new
                  users to your product. Users can build multi-level networks
                  where referrers earn commissions on their network's activity,
                  creating sustainable growth incentives for decentralized
                  applications.
                </span>
                <span className='block pt-2'>
                  Use in conjunction with{' '}
                  <span className='font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded'>
                    YieldToken
                  </span>{' '}
                  to create a positive feedback loop that aligns token holders
                  with long-term project success.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-300 py-12 sm:py-16'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]' />
        <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-sm sm:text-base font-medium'>
            © 2026 IncentiveEngine
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
