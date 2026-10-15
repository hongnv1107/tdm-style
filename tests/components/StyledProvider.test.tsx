import { StyleManager, styleManager, StyleProvider } from '@tdm-design/style';
import { render } from '@testing-library/react';

describe('StyledProvider', () => {
  it('设置不同的 prefix', () => {
    let emotion = {} as StyleManager;
    const App = () => {
      return (
        <StyleProvider prefix={'test'} getStyleManager={(e: StyleManager) => (emotion = e)}>
          123
        </StyleProvider>
      );
    };

    render(<App />);

    // @tdm-design/style 默认的 前缀为 tcss
    expect(styleManager.sheet.key).toEqual('tcss');
    expect(styleManager.sheet.isSpeedy).toEqual(false);

    expect(emotion.sheet.key).toEqual('test');
    expect(emotion.sheet.isSpeedy).toEqual(false);
  });

  it('设置 speedy 属性', () => {
    let emotion = {} as StyleManager;
    const App = () => {
      return (
        <StyleProvider prefix={'a'} speedy getStyleManager={(e: StyleManager) => (emotion = e)}>
          123
        </StyleProvider>
      );
    };
    render(<App />);

    expect(emotion.sheet.isSpeedy).toEqual(true);
  });
});
