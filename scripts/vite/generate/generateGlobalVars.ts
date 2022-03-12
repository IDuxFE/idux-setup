/**
 * 这里用来设置全局 less 变量
 */
export function generateGlobalVars(): Record<string, string> {
  return {
    hack: 'true; @import (reference) "@/theme/variable/global.less";',
  }
}
