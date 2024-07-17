import { FC } from 'react';

import { cn } from '@/utils/utils';

interface Props {
  className?: string;
}

const Skeleton: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative -z-20 animate-pulse rounded-xl bg-gray-100',
        className
      )}
    />
  );
};

export default Skeleton;
