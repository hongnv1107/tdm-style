import { renderHook } from '@testing-library/react';

import { useAntdToken } from 'tdm-style';

describe('useAntdToken', () => {
  it('can get colorPrimary', () => {
    const { result } = renderHook(useAntdToken);
    expect(result.current.colorPrimary.toLowerCase()).toEqual('#1868db');
  });
});
