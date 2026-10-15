/**
 * 固定的响应式断点映射（基于 @tdm-design/ui 默认 token 值）
 * 这些值是静态的，不依赖运行时 token
 */
const breakpoints = {
  xs: '@media (max-width: 319px)',
  sm: '@media (max-width: 767px)',
  md: '@media (max-width: 1023px)',
  lg: '@media (max-width: 1279px)',
  xl: '@media (max-width: 1919px)',
  xxl: '@media (min-width: 1920px)',
  xxxl: '@media (min-width: 2560px)',
} as const;

/**
 * 响应式断点映射，包含标准断点和设备别名
 */
export const responsive = {
  ...breakpoints,
  // 设备别名
  mobile: breakpoints.xs,
  tablet: breakpoints.md,
  laptop: breakpoints.lg,
  desktop: breakpoints.xxl,
} as const;

export type StaticResponsiveMap = typeof responsive;
