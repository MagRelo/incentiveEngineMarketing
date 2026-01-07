import React from 'react';
import { YieldTokenGraphic } from './assets/YieldTokenGraphic';
import { ReferralTreeGraphic } from './assets/ReferralTreeGraphic';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'>
      {/* Title Section - Hero with gradient background */}
      <section className='relative flex items-center justify-center px-4 sm:px-6 pt-20 pb-16 sm:py-28 md:py-32 overflow-hidden'>
        {/* Background gradient with subtle pattern */}
        <div className='absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]' />

        <div className='relative text-center max-w-5xl w-full z-10'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-2 sm:mb-4 tracking-tight'>
            <span className='bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent'>
              Distro
            </span>
            <span className='bg-slate-400 bg-clip-text text-transparent'>
              Engine
            </span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300  px-2 font-medium leading-relaxed'>
            Incentive-Compatible Economic Toolkit
          </p>

          <p className='text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mt-2 sm:mt-4 md:mt-6 mb-8 sm:mb-12 md:mb-16 px-4 font-normal leading-relaxed'>
            A collection of crypto primitives for building massive networks of
            motivated humans & AI agents
          </p>
          {/* 
          <blockquote className='relative border-l-4 border-indigo-500 px-6 sm:px-8 py-6 sm:py-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg shadow-indigo-100/50 mx-auto w-full max-w-2xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50 mb-8'>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/50 to-transparent rounded-xl pointer-events-none' />
            <p className='relative text-slate-700 italic text-base sm:text-lg md:text-xl leading-relaxed font-medium'>
              "First time founders are obsessed with product.
              <span className='block h-4' />
              Second time founders are obsessed with{' '}
              <span className='bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent font-semibold'>
                distribution
              </span>
              ."
            </p>
            <cite className='relative text-sm sm:text-base text-slate-500 block mt-4 sm:mt-6 font-normal not-italic'>
              — Justin Kan
            </cite>
          </blockquote> */}
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
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3'>
                YieldToken
              </h2>
              <a
                href='https://github.com/MagRelo/referralTree'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 transition-colors'>
                <svg
                  className='w-4 h-4'
                  viewBox='0 0 24 24'
                  fill='currentColor'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
                <span>github.com/MagRelo/referralTree</span>
              </a>
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
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3'>
                  YieldToken
                </h2>
                <a
                  href='https://github.com/MagRelo/referralTree'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 transition-colors'>
                  <svg
                    className='w-4 h-4'
                    viewBox='0 0 24 24'
                    fill='currentColor'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                  <span>github.com/MagRelo/referralTree</span>
                </a>
              </div>
              <p className='text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed space-y-4'>
                <span>
                  YieldToken has{' '}
                  <span className='font-semibold text-red-600 bg-red-50 px-1.5 py-0.5 rounded'>
                    built-in economic incentives
                  </span>
                  to encourage users to hold and use your token. Plug into yield
                  protocols to reward token holders with interest income. Adjust
                  the token's velocity & inflation with staking rewards,
                  demurrage, and more.
                </span>
                <span className='block pt-3'>
                  Combine{' '}
                  <span className='font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded'>
                    YieldToken
                  </span>{' '}
                  &{' '}
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
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3'>
                ReferralTree
              </h2>
              <a
                href='https://github.com/MagRelo/referralTree'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors'>
                <svg
                  className='w-4 h-4'
                  viewBox='0 0 24 24'
                  fill='currentColor'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
                <span>github.com/MagRelo/referralTree</span>
              </a>
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
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3'>
                  ReferralTree
                </h2>
                <a
                  href='https://github.com/MagRelo/referralTree'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors'>
                  <svg
                    className='w-4 h-4'
                    viewBox='0 0 24 24'
                    fill='currentColor'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                  <span>github.com/MagRelo/referralTree</span>
                </a>
              </div>
              <p className='text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed space-y-4'>
                <span>
                  Build viral growth through{' '}
                  <span className='font-semibold text-red-600 bg-red-50 px-1.5 py-0.5 rounded'>
                    multi-level referral rewards
                  </span>
                  . When a user joins your platform, they can earn rewards not
                  just from their own referrals, but also from their referrer's
                  referrals, and their referrer's referrer's referrals -
                  creating a powerful incentive for your users to grow the
                  network.
                </span>
                <span className='block pt-3'>
                  Combine{' '}
                  <span className='font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded'>
                    ReferralTree
                  </span>{' '}
                  &{' '}
                  <span className='font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded'>
                    YieldToken
                  </span>{' '}
                  to super-charge network growth and attract valuable new users.
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
            © 2026 DistroEngine
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
