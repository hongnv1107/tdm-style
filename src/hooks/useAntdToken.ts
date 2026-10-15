import { theme } from '@tdm-design/ui';

import { AntdToken } from '@/types';

export const useAntdToken = (): AntdToken => {
  const { token } = theme.useToken();

  return token;
};
