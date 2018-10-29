import api from '@/api' 

const actions = { 
    /** 
     * 获取上线轮播图
     */

    async getShufflingImg() { 
        let shufflingImgList = await api.getShufflingImg() 
        return shufflingImgList 
    }, 
} 
export default actio