import {Badge} from 'flowbite-react';
import {BsSignStop} from 'react-icons/bs';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';
import {IoWarningOutline} from 'react-icons/io5';

const badges = {
  colors: {
    failure: 'failure',
    success: 'success',
    warning: 'warning',
  },
  sizes: {
    small: 'text-xs p-2',
    medium: 'text-md p-4',
    large: 'text-xl p-6',
  },
  icons: {
    failure: <BsSignStop />,
    success: <IoMdCheckmarkCircleOutline />,
    warning: <IoWarningOutline />,
  },
};

export function BadgeObj({color, message, size, icon}) {
  const colorClassname = badges.colors[color];
  const sizeClassname = badges.sizes[size];
  const iconClassname = badges.icons[icon];

  return (
    <Badge color={colorClassname} className={sizeClassname}>
      <div className="flex gap-2 items-center ">
        {iconClassname}
        {message}
      </div>
    </Badge>
  );
}
