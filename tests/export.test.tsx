describe('export', () => {
  it('should work', async () => {
    const all = await import('@tdm-design/style');

    expect(Object.keys(all)).toMatchSnapshot();
  });
});
