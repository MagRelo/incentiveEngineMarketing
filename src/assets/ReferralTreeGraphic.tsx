import React from 'react';

export function ReferralTreeGraphic() {
  return (
    <svg
      viewBox='0 0 400 300'
      className='w-full h-auto max-w-xs mx-auto md:max-w-none'
      aria-hidden='true'>
      {/* Placeholder graphic for ReferralTree */}
      <rect
        x='50'
        y='50'
        width='300'
        height='200'
        rx='8'
        fill='none'
        stroke='#2563eb'
        strokeWidth='3'
        strokeDasharray='8 4'
      />
      {/* Simple tree structure */}
      <circle cx='200' cy='100' r='25' fill='#2563eb' opacity='0.3' />
      <circle cx='150' cy='150' r='20' fill='#2563eb' opacity='0.3' />
      <circle cx='250' cy='150' r='20' fill='#2563eb' opacity='0.3' />
      <circle cx='120' cy='200' r='15' fill='#2563eb' opacity='0.3' />
      <circle cx='180' cy='200' r='15' fill='#2563eb' opacity='0.3' />
      <circle cx='220' cy='200' r='15' fill='#2563eb' opacity='0.3' />
      <circle cx='280' cy='200' r='15' fill='#2563eb' opacity='0.3' />
      <line
        x1='200'
        y1='125'
        x2='150'
        y2='130'
        stroke='#2563eb'
        strokeWidth='2'
      />
      <line
        x1='200'
        y1='125'
        x2='250'
        y2='130'
        stroke='#2563eb'
        strokeWidth='2'
      />
      <line
        x1='150'
        y1='170'
        x2='120'
        y2='185'
        stroke='#2563eb'
        strokeWidth='2'
      />
      <line
        x1='150'
        y1='170'
        x2='180'
        y2='185'
        stroke='#2563eb'
        strokeWidth='2'
      />
      <line
        x1='250'
        y1='170'
        x2='220'
        y2='185'
        stroke='#2563eb'
        strokeWidth='2'
      />
      <line
        x1='250'
        y1='170'
        x2='280'
        y2='185'
        stroke='#2563eb'
        strokeWidth='2'
      />
      <text
        x='200'
        y='250'
        textAnchor='middle'
        className='text-sm fill-blue-600'
        fontSize='14'
        fontFamily='system-ui, sans-serif'>
        ReferralTree
      </text>
    </svg>
  );
}

