// 获取轮播图 
export default { 
    methods: { 
        getShufflingImg() { 
            const Vm = this 
            Vm.$store.dispatch('getShufflingImg') 
                .then(res => { 
                    if (res.data.status === 1000) { 
                        console.log(res.data.result) 
                        Vm.$store.commit('SET_shufflingImg', res.data.result) 
                        Vm.keepTime = res.data.result[0].keepTime * 1000 
                    } else { 
                        console.log(res.data.msg) 
                    } 
                }) 
            } 
        } 
    }

