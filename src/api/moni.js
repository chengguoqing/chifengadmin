import Mock from 'mockjs';
class Myding {
    constructor () {
        let xdderr = Mock.mock({
            'data|10': [
                {
                    dfsdfddfa: '待发货',
                    dfsdfddfb: '追踪',
                    dfsdfddfc: '详情',
                    dfsdfddfd: '评价',
                    dfsdfddfe: '理赔',
                    dfsdfddff: '@date(yyyy-MM-dd)',
                    dfsdfddfg: '@integer(100000000000, 900000000000)',
                    dfsdfddfh: '@county(true)',
                    dfsdfddfi: '@csentence(5)',
                    dfsdfddfj: '@integer(10, 100)',
                    dfsdfddfk: '@integer(10, 100)',
                    dfsdfddfl: '@integer(10, 100)',
                    dfsdfddfq: '@cname',
                    dfsdfddfw: '@integer(13000000000, 18000000000)',
                    dfsdfddfr: '@county(true)',
                    dfsdfddft: '@csentence(5)'
                }
            ]
        })
        this.data = xdderr.data
    }
}

export {
    Myding
}
