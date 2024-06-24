import React from 'react'

const CircleStat = ({ days, color = '#BBA661' }) => {
  const radius = 60;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (days / 30) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
    >
      <circle
        stroke="#ddd"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16px"
        fill="#000"
      >
        {days} Hari
      </text>
    </svg>
  );
};

export default CircleStat;

