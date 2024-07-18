'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { ComponentProps, FC, ImgHTMLAttributes } from 'react';

interface HTMLImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  next?: false;
}

interface NextImageProps extends ComponentProps<typeof Image> {
  next: true;
}

type Props = HTMLImageProps | NextImageProps;

const CustomImage: FC<Props> = (props) => {
  const pathname = usePathname();
  console.log(pathname);

  const baseUrl = pathname.split('/').includes('website-demo')
    ? 'website-demo'
    : '';

  if (props.next) {
    return <Image {...props} alt={props.alt} src={`${baseUrl}${props.src}`} />;
  }
  return <img {...props} alt={props.alt} src={`${baseUrl}${props.src}`} />;
};

export default CustomImage;
