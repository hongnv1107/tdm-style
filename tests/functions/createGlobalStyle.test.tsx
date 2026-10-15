import { createGlobalStyle, ThemeProvider } from '@tdm-design/style';
import { render } from '@testing-library/react';

describe('createGlobalStyle', () => {
  it('全局样式', async () => {
    const Global = createGlobalStyle`
      .some-class {
        color: rgb(255, 192, 203);
      }
    `;

    const { findByTestId } = render(
      <div data-testid={'content'}>
        <div className="some-class">pink txt</div>
        <Global />
      </div>,
    );

    const item = await findByTestId('content');

    expect(item.firstChild).toHaveStyle({ color: 'rgb(255, 192, 203)' });
  });

  it('包裹 ThemeProvider 后可以获取主题样式', async () => {
    const Global = createGlobalStyle`
      .some-class {
        color: ${(p) => p.theme.colorPrimary};
      }
    `;

    const { findByTestId } = render(
      <div data-testid={'content'}>
        <div className="some-class">pink txt</div>
        <Global />
      </div>,
      { wrapper: ThemeProvider },
    );

    const item = await findByTestId('content');

    expect(item.firstChild).toHaveStyle({ color: '#1868DB' });
  });

  it('不包裹 ThemeProvider 也能获得 token', async () => {
    const Global = createGlobalStyle`
      .some-class {
        color: ${(p) => p.theme.colorPrimary};
      }
    `;

    const { findByTestId } = render(
      <div data-testid={'content'}>
        <div className="some-class">pink txt</div>
        <Global />
      </div>,
    );

    const item = await findByTestId('content');

    expect(item.firstChild).toHaveStyle({ color: '#1868DB' });
  });
});
