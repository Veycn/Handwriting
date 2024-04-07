/**
 * 请求并发控制
 * @param {} urls 
 * @param {*} concurrent 
 * @returns 
 */
export function concurrentRequest(urls, concurrent = 3) {
  if (!urls.length) return Promise.resolve([]);
  return new Promise((resolve) => {
    let index = 0;
    const result = [];
    async function _request() {
      const i = index;
      const url = urls[index];
      try {
        const resp = await fetch(url);
        result[i] = resp;
      } catch (err) {
        result[i] = err;
      } finally {
        if (result.length === urls.length) {
          resolve(result);
        }
        if (index < urls.length) {
          _request();
        }
      }
    }

    for (let i = 0; i < Math.min(urls.length, concurrent); i++) {
      _request();
    }
  });
}
