/*
 * @Author: East
 * @Date: 2021-12-01 08:40:52
 * @LastEditTime: 2021-12-04 13:27:54
 * @LastEditors: Please set LastEditors
 * @Description: 本地缓存
 * @FilePath: \vue3-ts-cms-02\src\utils\cache.ts
 */
class LocalCache {
  setCache(key: string, value: any) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string) {
    let value = localStorage.getItem(key)
    if (value) {
      value = JSON.parse(value)
    }
    return value
  }

  deleteCache(key: string) {
    localStorage.removeItem(key)
  }

  clearCache() {
    localStorage.clear()
  }
}

export default new LocalCache()
