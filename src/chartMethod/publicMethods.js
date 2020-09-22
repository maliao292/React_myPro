let install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $publicMethods: {
            get() {
                return {
                    period(e) {
                        // 清除"数字"和"."以外的字符
                        e.target.value = e.target.value.replace(/[^\d\.]/g, '')
                        // 验证第一个字符是数字
                        e.target.value = e.target.value.replace(/^\./g, '')
                        // 只保留第一个, 清除多余的
                        e.target.value = e.target.value.replace(/\.{2,}/g, '.')
                        e.target.value = e.target.value
                            .replace('.', '$#$')
                            .replace(/\./g, '')
                            .replace('$#$', '.')
                        // 只能输入两个小数
                        e.target.value = e.target.value.replace(
                            /^(\-)*(\d+)\.(\d\d).*$/,
                            '$1$2.$3'
                        )
                    },
                    getMonthNum(year, month, arr) {
                        // 获取整月数组
                        let monthData = new Date(
                            year,
                            month,
                            0
                        ).getDate()
                        for (let i = 1; i <= monthData; i++) {
                            arr.push(i > 9 ? i : '0' + i)
                        }


                    },
                    getMinuteForX(intervalOfMinute = 60, beginTime = '0:00') {
                        // 默认一小时
                        // intervalOfMinute 以分钟为单位的间隔 
                        let xAxisData = [];
                        let beginArr = beginTime.split(':') // ['0','00']
                        let minus = beginArr[0] * 60 + Number(beginArr[1]) // 转换成  总分钟数
                        // let hour = Number(beginArr[0]);// 0
                        while (minus < (23 * 60 + 59)) {


                            let h = Math.floor(minus / 60);
                            let m = minus - h * 60;
                            h = h > 9 ? h : '0' + h
                            m = m > 9 ? m : '0' + m
                            xAxisData.push(h + ':' + m)
                            minus += intervalOfMinute
                        }
                        return xAxisData
                    },
                    getInterVal({ begin = '00:00', end }) {
                        let b = begin.split(':');
                        let e = end.split(':');
                        return e[0] * 60 + 1*e[1] - b[0] * 60 + 1*b[1]
                    }
                }
            },
        }
    })
}
export default { install }