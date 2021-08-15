const db = require('../models');
class Functions {
    formatDate(date)  {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear()

        if (month.length < 2)
            month = '0' + month
        if (day.length < 2)
            day = '0' + day

        return `${year.toString().substr(-2)}${month}${day}`
    }
    padLeft(nr, n, str) {
        return Array(n - String(nr).length + 1).join(str || '0') + nr;
    }
    formatDocNo(id) {
        return `DOC${this.formatDate(new Date())}-${this.padLeft(id, 5)}`
    }
}
export default new Functions();