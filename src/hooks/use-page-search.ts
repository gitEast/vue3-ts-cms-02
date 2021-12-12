/*
 * @Author: your name
 * @Date: 2021-12-12 15:32:24
 * @LastEditTime: 2021-12-12 15:38:53
 * @LastEditors: Please set LastEditors
 * @Description: 抽取 page-search 与 page-content 的联动
 * @FilePath: \vue3-ts-cms-02\src\hooks\use-page-search.ts
 */
import { ref } from 'vue'

import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}
