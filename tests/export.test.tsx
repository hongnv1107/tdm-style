describe('export', () => {
  it('should work', async () => {
    const all = await import('tdm-style');

    expect(Object.keys(all)).toMatchSnapshot();
  });
});
