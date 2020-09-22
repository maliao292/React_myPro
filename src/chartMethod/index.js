import echarts from 'echarts'
let install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    screenBacLine(id, title = '', legendArr = [], xArr = [], seriesArr = [], cb) {
                        var myChart = echarts.init(document.getElementById(id))
                        let option = {
                            color: ['#00e679', '#0ff', '#f0f', '#00f'],
                            title: {
                                text: title,
                                textStyle: {
                                    fontSize: 14,
                                    color: '#85e8f6'
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                // axisPointer: {
                                //     type: 'cross',
                                // }
                            },
                            legend: {
                                data: legendArr
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    boundaryGap: false,
                                    splitLine: {
                                        show: false,
                                    },
                                    axisLabel: {
                                        color: '#85e8f6'
                                    },
                                    data: xArr
                                }
                            ],
                            yAxis: [
                                {
                                    name: '单位：kWh',
                                    nameTextStyle: {
                                        color: '#aaa'
                                    },
                                    type: 'value',
                                    splitLine: {
                                        show: false,
                                    },
                                    axisLabel: {
                                        color: '#85e8f6'
                                    },
                                }
                            ],
                            series: seriesArr
                            // series: [
                            //     {
                            //         name: '邮件营销',
                            //         type: 'line',
                            //         stack: '总量',
                            //         areaStyle: {},
                            //         data: [120, 132, 101, 134, 90, 230, 210]
                            //     },
                            // ]
                        };
                        cb(myChart, option)
                        //myChart.setOption(option);
                    },
                    hzPie(id) {
                        var myChart = echarts.init(document.getElementById(id))
                        var data = [{
                            value: 100,
                            name: '路灯',
                            label: {
                                color: '#fff'
                            },
                            itemStyle: {

                            },
                            emphasis: {
                                itemStyle: {

                                }
                            }
                        },
                        {
                            value: 80,
                            name: '充电桩',
                            label: {
                                color: '#fff'
                            },
                            itemStyle: {

                            },
                            emphasis: {
                                itemStyle: {

                                }
                            }
                        },
                        {
                            value: 65,
                            name: '工业',
                            label: {
                                color: '#fff'
                            },
                            itemStyle: {

                            },
                            emphasis: {
                                itemStyle: {

                                }
                            }
                        },
                        {
                            value: 65,
                            name: '综合体',
                            label: {
                                color: '#fff'
                            },
                            itemStyle: {

                            },
                            emphasis: {
                                itemStyle: {

                                }
                            }
                        },
                        {
                            value: 60,
                            name: '小微园',
                            label: {
                                color: '#fff'
                            },
                            itemStyle: {

                            },
                            emphasis: {
                                itemStyle: {

                                }
                            }
                        },
                        {
                            value: 60,
                            name: '商贸',
                            label: {
                                color: '#fff'
                            },
                            itemStyle: {

                            },
                            emphasis: {
                                itemStyle: {

                                }
                            }
                        },
                        {
                            value: 60,
                            name: '物流',
                            label: {
                                color: '#fff'
                            },
                            itemStyle: {

                            },
                            emphasis: {
                                itemStyle: {

                                }
                            }
                        },
                        {
                            value: 60,
                            name: '5G',
                            label: {
                                color: '#fff'
                            },
                            itemStyle: {

                            },
                            emphasis: {
                                itemStyle: {

                                }
                            }
                        }
                        ];

                        function angleText(i, num) {
                            //每个元素的角度
                            var everyAngle = 360 / num;
                            //文字现在所在的角度
                            var currentAngle = i * everyAngle + everyAngle / 2;
                            //文字所在模块的所占角度
                            var currentArea = (i + 1) * everyAngle;

                            if (currentAngle <= 90) {
                                return -currentAngle;
                            } else if (currentAngle <= 180 && currentAngle > 90) {
                                return 180 - currentAngle;
                            } else if (currentAngle < 270 && currentAngle > 180) {
                                return 180 - currentAngle;
                            } else if (currentAngle < 360 && currentAngle >= 270) {
                                return 360 - currentAngle;
                            }
                        }

                        //有值的色图的正切处理
                        var data3 = [];
                        data3 = JSON.parse(JSON.stringify(data));
                        for (var i = 0; i < data3.length; i++) {
                            if (i === 0) {
                                data3[i]['label']['color'] = '#333';
                                data3[i]['itemStyle']['color'] = 'rgba(25, 255, 224)';
                                data3[i]['emphasis']['itemStyle']['color'] = 'rgba(25, 255, 224)';
                                data3[i]['label']['rotate'] = angleText(i, data3.length) + 'reg';
                            } else {
                                data3[i]['label']['color'] = '#fff';
                                data3[i]['itemStyle']['color'] = '#4169E1';
                                data3[i]['emphasis']['itemStyle']['color'] = '#6A5ACD';
                                data3[i]['label']['rotate'] = angleText(i, data3.length) + 'reg';;
                            }
                        }

                        //最外层大圈的数据
                        var data1 = [];

                        data1 = JSON.parse(JSON.stringify(data));
                        for (var i = 0; i < data1.length; i++) {
                            data1[i].value = 1;
                            data1[i]['label']['rotate'] = angleText(i, data1.length);
                            if (i === 0) {
                                data1[i]['label']['color'] = 'rgba(25, 255, 224)';
                            }
                        }

                        //透明饼图的数据
                        var data2 = [];

                        for (var i = 0; i < data.length; i++) {
                            if (i === 0) {
                                data2.push({
                                    value: 1,
                                    itemStyle: {
                                        color: 'rgba(25, 255, 224,0.05)',
                                    }
                                });
                            } else {
                                data2.push({
                                    value: 1,
                                    itemStyle: {
                                        color: 'transparent',
                                    }
                                });
                            }
                        }





                        var option = {
                            backgroundColor: 'rgba(0, 0, 0,0)',
                            grid: {},
                            polar: {},
                            angleAxis: {
                                show: false,
                                interval: 1,
                                type: 'category',
                                data: [],
                            },
                            //中间画圈圈的坐标轴
                            radiusAxis: {
                                show: false
                            },
                            series: [{
                                type: 'pie',
                                radius: ["68%", "90%"],
                                hoverAnimation: false,
                                itemStyle: {
                                    color: 'transparent'
                                },
                                labelLine: {
                                    normal: {
                                        show: false,
                                        length: 30,
                                        length2: 55
                                    },
                                },
                                label: {
                                    normal: {
                                        position: 'inside',
                                        align: 'right'
                                    }
                                },
                                name: "",
                                data: data1
                            }, {
                                stack: 'a',
                                type: 'pie',
                                radius: ['75%', '42%'],
                                roseType: 'area',
                                zlevel: 10,
                                itemStyle: {
                                    color: '#4169E1',
                                },
                                emphasis: {
                                    itemStyle: {
                                        color: '#6A5ACD'
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 14,
                                            color: '#fff'
                                        },
                                        position: 'inside',
                                        rotate: 60,
                                        align: 'right',
                                        fontWeight: 'bold',
                                        formatter: '{c}%'
                                    },
                                    emphasis: {
                                        show: true
                                    }
                                },
                                animation: false,
                                data: data3
                            }, {
                                type: 'pie',
                                zlevel: 99,
                                radius: ["15%", "90%"],
                                selectedOffset: 0,
                                animation: false,
                                hoverAnimation: false,
                                label: {
                                    normal: {
                                        show: false,
                                    }
                                },
                                data: data2
                            }]
                        };

                        myChart.setOption(option);


                        myChart.on('click', function (a) {
                            //最外层的字体颜色重置变色
                            for (var da1 = 0; da1 < option.series[0].data.length; da1++) {
                                option.series[0].data[da1].label.color = '#fff';
                            }

                            //色圈的字体颜色和选中颜色重置
                            for (var da2 = 0; da2 < option.series[1].data.length; da2++) {
                                option.series[1].data[da2].itemStyle.color = '#4169E1';
                                option.series[1].data[da2].label.color = '#fff';
                                //hover颜色重置
                                option.series[1].data[da2].emphasis.itemStyle.color = '#6A5ACD';

                            }

                            //背景的透明饼图的重置
                            for (var da3 = 0; da3 < option.series[2].data.length; da3++) {
                                option.series[2].data[da3].itemStyle.color = 'transparent';
                            }

                            option.series[1].data[a.dataIndex].itemStyle.color = 'rgba(25, 255, 224)';
                            option.series[1].data[a.dataIndex].label.color = '#333';
                            //hover 颜色改变
                            option.series[1].data[a.dataIndex].emphasis.itemStyle.color = 'rgba(25, 255, 224)';
                            option.series[0].data[a.dataIndex].label.color = 'rgba(25, 255, 224)';
                            option.series[2].data[a.dataIndex].itemStyle.color = 'rgba(25, 255, 224,0.1)';
                            //console.log(option)
                            myChart.setOption(option);
                        });

                        myChart.on('mouseover', function (a) {
                            myChart.dispatchAction({
                                type: 'highlight',
                                seriesIndex: 1,
                                dataIndex: a.dataIndex
                            });
                        });

                        myChart.on('mouseout', function (a) {
                            myChart.dispatchAction({
                                type: 'downplay',
                                seriesIndex: 1,
                                dataIndex: a.dataIndex
                            });
                        });
                    },
                    screenBar(id, thisyearArr = [], lastyearArr = []) {
                        var myChart = echarts.init(document.getElementById(id))
                        var option = {
                            backgroundColor: 'rgba(0, 0, 0,0)',
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            grid: {
                                left: '2%',
                                right: '4%',
                                bottom: '14%',
                                top: '16%',
                                containLabel: true
                            },
                            legend: {
                                textStyle: {
                                    color: '#ccc'
                                },
                                data: ['今年', '去年']
                            },
                            xAxis: {
                                type: 'category',
                                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                                axisLine: {
                                    lineStyle: {
                                        color: 'white'

                                    }
                                },
                                axisLabel: {
                                    // interval: 0,
                                    // rotate: 40,
                                    textStyle: {
                                        fontFamily: 'Microsoft YaHei'
                                    }
                                },
                            },

                            yAxis: {
                                type: 'value',
                                name: '万元',
                                axisLine: {
                                    show: false,
                                    lineStyle: {
                                        color: 'white'
                                    }
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        color: 'rgba(255,255,255,0.3)'
                                    }
                                },
                                axisLabel: {}
                            },

                            series: [{
                                name: '今年',
                                type: 'bar',
                                barWidth: '15%',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#096cc5'
                                        }, {
                                            offset: 1,
                                            color: '#3b9dc4'
                                        }]),
                                        barBorderRadius: 12,
                                    },
                                },
                                data: thisyearArr
                            },
                            {
                                name: '去年',
                                type: 'bar',
                                barWidth: '15%',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#43ec7f'
                                        }, {
                                            offset: 1,
                                            color: '#44f7d8'
                                        }]),
                                        barBorderRadius: 11,
                                    }

                                },
                                data: lastyearArr
                            }]
                        };
                        myChart.setOption(option);
                    },
                    screenLine(id, title, legendArr, xArr, seriesArr) {
                        if (myChart != null && myChart != "" && myChart != undefined) {
                            myChart.dispose();
                        }
                        var myChart = echarts.init(document.getElementById(id))
                        let option = {
                            color: ['#00e878', '#4bffff', '#0aa8fe', '#df017c', '#ff4612', '#8660f2', '#ffff40', '#ff9811', '#00e878'],
                            title: {
                                text: title,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                                itemWidth: 10,  // 设置宽度
                                itemHeight: 10, // 设置高度
                                data: legendArr,
                                textStyle: {
                                    color: '#b2bfc8'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },

                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                axisLine: {
                                    lineStyle: {
                                        color: '#b2bfc8'
                                    }
                                },
                                splitLine: {
                                    show: false
                                },
                                data: xArr
                            },
                            yAxis: {
                                type: 'value',
                                axisLine: {
                                    lineStyle: {
                                        color: '#b2bfc8'
                                    }
                                },
                                splitLine: {
                                    show: false
                                },
                            },
                            series: seriesArr
                            // series: [
                            //     {
                            //         name: '邮件营销',
                            //         type: 'line',
                            //         stack: '总量',
                            //         data: [120, 132, 101, 134, 90, 230, 210]
                            //     },
                            //     {
                            //         name: '联盟广告',
                            //         type: 'line',
                            //         stack: '总量',
                            //         data: [220, 182, 191, 234, 290, 330, 310]
                            //     },
                            //     {
                            //         name: '视频广告',
                            //         type: 'line',
                            //         stack: '总量',
                            //         data: [150, 232, 201, 154, 190, 330, 410]
                            //     },
                            //     {
                            //         name: '直接访问',
                            //         type: 'line',
                            //         stack: '总量',
                            //         data: [320, 332, 301, 334, 390, 330, 320]
                            //     },
                            //     {
                            //         name: '搜索引擎',
                            //         type: 'line',
                            //         stack: '总量',
                            //         data: [820, 932, 901, 934, 1290, 1330, 1320]
                            //     }
                            // ]
                        };
                        myChart.setOption(option);
                    },
                    onlyBar(id, title, xArr, seriesArr, cb) {
                        if (myChart != null && myChart != "" && myChart != undefined) {
                            myChart.dispose();
                        }
                        var myChart = echarts.init(document.getElementById(id))
                        let option = {
                            color: ['#3398DB'],
                            title: {
                                text: title,
                                textStyle: {
                                    fontSize: 14,
                                    color: '#85e8f6'
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: xArr,
                                    splitLine: {
                                        show: false,
                                    },
                                    axisLabel: {
                                        color: '#85e8f6'
                                    },
                                }
                            ],
                            yAxis: [
                                {
                                    name: '单位：元',
                                    nameTextStyle: {
                                        color: '#aaa'
                                    },
                                    type: 'value',
                                    splitLine: {
                                        show: false,
                                    },
                                    axisLabel: {
                                        color: '#85e8f6'
                                    },
                                }
                            ],
                            series: seriesArr,
                            // series: [
                            //     {
                            //         name: '直接访问',
                            //         type: 'bar',
                            //         barWidth: '60%',
                            //         data: [10, 52, 200, 334, 390, 330, 220]
                            //     }
                            // ]
                        };
                        cb(echarts, myChart, option)
                    },
                    crosswiseBar(containaerId, xingm = [], paiming = [], baifenbi = []) {
                        // var baifenbi = [0.30, 0.40, 0.00, 0.00, 0.00]; // 显示
                        // var grayBar = [1, 1, 1, 1, 1];

                        var grayBar = [];
                        for (let i = 0; i < xingm.length; i++) {
                            grayBar.push(1)
                        }
                        // var paiming = [6, 2, 3, 2, 1]; // 柱状图 
                        // var xingm = ['杏山子主所', '乔家湖主所', '车辆段', '路窝站', '杏山站'];
                        var colorList = [['#075be5', '#0cbaf8'], ['#91e266', '#10e2a9'], ['#ff574e', '#f9cc30']];
                        var myChart = echarts.init(document.getElementById(containaerId));
                        var option = {
                            // color: ['#61A8FF'], //进度条颜色
                            grid: {
                                // left: '-10%',  //如果离左边太远就用这个......
                                //right: '14%',
                                bottom: '3%',
                                top: '0',
                                containLabel: true
                            },
                            xAxis: [{
                                show: false,
                            },
                            //由于下边X轴已经是百分比刻度了,所以需要在顶部加一个X轴,刻度是金额,也隐藏掉
                            {
                                show: false,
                            }
                            ],
                            yAxis: {
                                type: 'category',
                                inverse: true,
                                axisLabel: {
                                    show: false, //让Y轴数据不显示
                                },
                                itemStyle: {

                                },
                                axisTick: {
                                    show: false, //隐藏Y轴刻度
                                },
                                axisLine: {
                                    show: false, //隐藏Y轴线段
                                },
                                data: xingm,
                            },
                            series: [{ // todo 柱状图背景、及尾部文字
                                show: true,
                                type: 'bar',
                                barGap: '-100%',
                                barWidth: '10', //统计条宽度 
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: 5,
                                        color: 'rgba(0,0,0,0.1)'
                                    },
                                },
                                z: 1,
                                data: grayBar,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            color: '#0ff', //百分比颜色
                                            fontSize: 18
                                        },
                                        position: ['90%', '-180%'],
                                        //百分比格式
                                        formatter: function (data) {
                                            // return (baifenbi[data.dataIndex] * 100).toFixed(1);
                                            return (baifenbi[data.dataIndex] + '%');

                                        },
                                    }
                                },
                            },
                            //数据条--------------------我是分割线君------------------------------//
                            {
                                show: true,
                                type: 'bar',
                                xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
                                barGap: '-100%',
                                barWidth: '10', //统计条宽度
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: 5,
                                        color: function (params) {
                                            return (new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                                offset: 0,
                                                color: colorList[params.dataIndex][0]
                                            }, {
                                                offset: 1,
                                                color: colorList[params.dataIndex][1]
                                            }], false))

                                        },
                                        // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        //     offset: 0,
                                        //     color: color[x] + ', 0.3)'
                                        // }, {
                                        //     offset: 1,
                                        //     color: color[x] + ', 1)'
                                        // }], false),
                                    },
                                },
                                label: {
                                    normal: {
                                        barBorderRadius: 5,
                                        show: true,
                                        // textStyle: {
                                        //     color: '#00f', //百分比颜色
                                        //     fontSize: 12
                                        // },
                                        //label 的position位置可以是top bottom left,right,也可以是固定值
                                        //在这里需要上下统一对齐,所以用固定值
                                        position: [-10, '-180%'],
                                        rich: { //富文本
                                            block: { //自定义颜色
                                                color: '#fff',
                                                fontSize: 14
                                            },
                                            rank: {
                                                fontSize: 14,
                                                paddingRight: 20
                                            }

                                        },
                                        formatter: function (data) {
                                            return '{block|' + xingm[data.dataIndex] + '}';

                                        },
                                    }
                                },
                                data: paiming
                            }

                            ]
                        };

                        myChart.setOption(option);
                    }
                }
            }
        }
    })
}
export default { install }
