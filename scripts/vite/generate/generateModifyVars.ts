/**
 * 这里用来修改第三方库的主题变量
 */
export function generateModifyVars(): Record<string, string> {
  return {
    hack: 'true; @import (reference) "@/theme/variable/idux.less";',
  }
}
