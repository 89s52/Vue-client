/** 
 * 本模块主要用于运动健身微服务端提供数据交互功能 
 * 创建时间： 2018-02-09
 */

import { ajax } from './ajax.js' 

/** 
 * 获取上线的轮播图
 */

async function getShufflingImg() { 
    let shufflingImgList = await ajax.post('/user/getTrueShuffling') 
    return shufflingImgList 
} 

export default { 
    getShufflingImg, 
}