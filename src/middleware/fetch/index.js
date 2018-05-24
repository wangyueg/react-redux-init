/*
 *action参数
 **type---redux，将要执行的动作
 **request---普通对象，存在ajax请求的参数
 **request参数
 ***url-----------ajax请求的地址
 ***type----------ajax请求类型
 ***contentType---ajax请求的"content-type"
 ***param---------ajax请求参数
*/
import Fetch from './fetch';

export default (store) => (next) => async (action) => {
  //通过request里面的URL是否存在，存在就执行fetch，否则执行下一个中间件
  if (action.request && action.request.url) {
    let {type, request} = action;

    try {
      let result = await Fetch(request);

      if (result && result.response) {
        result = result.response;
      }

      //成功之后
      if (result && result.code === 0) {
        store.dispatch({
          type: type,
          request: {
            data: result.data,
            message: result.message,
            code: result.code
          }
        })
      } else { //失败
        store.dispatch({
          type: `${type}_FAIL`,
          request: {
            message: result.message,
            code: result.code
          }
        });
      }
      // return result
    } catch (err) {
      console.log(`fetch catch:${err}`);
      // return store.getState()
    }
  } else {
    return next(action)
  }
}
