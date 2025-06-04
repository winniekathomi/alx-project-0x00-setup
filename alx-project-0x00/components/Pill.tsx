// alx-project-0x00/components/Pill.tsx
import React from 'react';

type PillProps = {
  label: string;
  color?: string;
};

const Pill: React.FC<PillProps> = ({ label, color = 'gray' }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        padding: '4px 12px',
        borderRadius: '20px',
        color: 'white',
        fontSize: '0.875rem',
      }}
    >
      {label}
    </span>
  );
};

export default Pill;
