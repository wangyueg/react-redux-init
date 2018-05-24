import * as __URL__ from '../../../config/index';
import * as Util from '../../util/index';

export default async (args) => {
  //判断当前环境
  const ENV = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost' || window.location.hostname.startsWith('192.168') ? 'development' : 'production';
  let params = args.type.toUpperCase() === 'GET' ? null : args.param;
  let url = args.type.toUpperCase() === 'GET' ? Util.createUrl(args) : args.url;
  let requestUrl = __URL__[ENV]['apiUrl'] + url

  return fetch(requestUrl, {
    credentials: 'include', // 请求带上cookies，是每次请求保持会话一直
    method: args.type.toUpperCase(),
    follow: 1,
    timeout: 10000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': args.contentType || 'application/json'
    },
    body: params ? JSON.stringify(params) : null
  }).then((response) => response.json());
}
