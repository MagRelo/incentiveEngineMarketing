import React from 'react';

export function YieldTokenGraphic() {
  return (
    <svg
      viewBox='0 0 400 300'
      className='w-full h-auto max-w-xs mx-auto md:max-w-none'
      aria-hidden='true'>
      {/* Placeholder graphic for YieldToken */}
      <rect
        x='50'
        y='50'
        width='300'
        height='200'
        rx='8'
        fill='none'
        stroke='#10b981'
        strokeWidth='3'
        strokeDasharray='8 4'
      />
      <circle cx='200' cy='150' r='40' fill='#10b981' opacity='0.2' />
      <circle cx='200' cy='150' r='20' fill='#10b981' />
      <text
        x='200'
        y='180'
        textAnchor='middle'
        className='text-sm fill-emerald-600'
        fontSize='14'
        fontFamily='system-ui, sans-serif'>
        YieldToken
      </text>
    </svg>
  );
}

