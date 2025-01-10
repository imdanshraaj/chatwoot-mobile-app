import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { IconProps } from '../../types';

type WarningIconProps = IconProps & {
  renderSecondTick?: boolean;
};

export const WarningIcon = ({
  stroke = '#800',
  renderSecondTick = true,
}: WarningIconProps): JSX.Element => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 24">
      <Path
        fill={stroke}
        d="M13 17a.999.999 0 1 0-1.998 0a.999.999 0 0 0 1.997 0m-.26-7.853a.75.75 0 0 0-1.493.103l.004 4.501l.007.102a.75.75 0 0 0 1.493-.103l-.004-4.502zm1.23-5.488c-.857-1.548-3.082-1.548-3.938 0L2.286 17.66c-.83 1.5.255 3.34 1.97 3.34h15.49c1.714 0 2.799-1.84 1.969-3.34zm-2.626.726a.75.75 0 0 1 1.313 0l7.746 14.002a.75.75 0 0 1-.657 1.113H4.256a.75.75 0 0 1-.657-1.113z"></Path>
    </Svg>
  );
};