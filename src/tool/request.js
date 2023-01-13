import axios from 'axios'
import { Toast } from 'vant'

// 异步请求次数
let ajaxNum = 0;
const request = obj => {
    // 请求加1
    ajaxNum++;
    // 定义一个公共的url
    const banseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
    return new Promise((resolve, reject) => {
        // 开启loading
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner',
            duration: 0
        });
        axios({
            ...obj,
            url:banseUrl+obj.url
        }).then(res=>{
            resolve(res.data.message);
            // 请求次数减一
            ajaxNum--;
            // 判断请求是否都成功
            if(ajaxNum==0){
                // 关闭loading
                Toast.clear();
            }
        }).catch(err=>{
            reject(err)
        })
    })
}

export {
    request
}