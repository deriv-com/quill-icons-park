import { QuillIllustrationComponent } from '@deriv/quill-icons';
import { TQuillIconComponent } from '@deriv/types';
import { getIllustrationDisplaySize } from '@deriv/utils';
import { useState } from 'react';

type TIllustrationIcon = {
  Icon: TQuillIconComponent;
  id?: string;
  maxSize: number;
};

export const IllustrationIcon = ({ Icon, id, maxSize }: TIllustrationIcon) => {
  const [dimensions, setDimensions] = useState<{ height: number; width: number }>();
  const Illustration = Icon as QuillIllustrationComponent;
  const displaySize = dimensions ? getIllustrationDisplaySize(dimensions, maxSize) : undefined;

  return (
    <Illustration
      id={id}
      className='block object-contain'
      onLoad={(event) => {
        const image = event.currentTarget as HTMLImageElement;
        setDimensions({ height: image.naturalHeight, width: image.naturalWidth });
      }}
      style={
        displaySize
          ? { height: displaySize.height, width: displaySize.width }
          : { maxHeight: maxSize, maxWidth: maxSize }
      }
    />
  );
};
