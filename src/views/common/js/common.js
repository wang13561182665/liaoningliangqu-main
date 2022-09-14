// common为公共方法
export default {
    get_current_time(format) {
        let date = new Date();
        let year = date.getFullYear(); //获取当前年份
        let mon = this.zeroFilling(date.getMonth() + 1); //获取当前月份
        let da = this.zeroFilling(date.getDate()); //获取当前日
        let h = this.zeroFilling(date.getHours()); //获取小时
        let m = this.zeroFilling(date.getMinutes()); //获取分钟
        let s = this.zeroFilling(date.getSeconds()); //获取秒
        if (!format) {
            return [year, mon, da, h, m, s];
        } else if (format === "yyyy-MM-dd HH:mm:ss") {
            return `${year}-${mon}-${da} ${h}:${m}:${s}`;
        } else if (format === "yyyy-MM-dd") {
            return `${year}-${mon}-${da}`;
        }
    },
    zeroFilling(time) {
        return time = time < 10 ? '0' + time : time;
    },
}
