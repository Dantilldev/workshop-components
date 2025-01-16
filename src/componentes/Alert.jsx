import React from 'react';
import {Alert} from 'flowbite-react';
import {FaExclamationCircle, FaCheckCircle, FaInfoCircle} from 'react-icons/fa';

const alerts = {
  colors: {
    error: 'failure',
    success: 'success',
    info: 'info',
  },
  icons: {
    error: <FaExclamationCircle />,
    success: <FaCheckCircle />,
    info: <FaInfoCircle />,
  },
};

export default function AlertComponent({color, message, icon}) {
  const colorClassname = alerts.colors[color];
  const iconClassname = alerts.icons[icon];

  return (
    <Alert color={colorClassname}>
      <div className="flex items-center gap-2">
        {iconClassname}
        {message}
      </div>
    </Alert>
  );
}
