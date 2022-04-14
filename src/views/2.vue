<template>
    <div class="mainp" style="position: fixed;height:100%;width: 100%;overflow:scroll;">
        <div class="header1">
            <div class="first" style=";margin:0 auto;padding:0;clear:both;">
                <div class="inline" style="margin-right: 30px;width: 300px">
                    <p style="float: left;margin-right: 20px;margin-top: 5px"> 情感对象</p>
                    <div style="text-align: center;width: 195px;height:32px;
                    float: left;border: 1px solid;background-color: white">
                        <input typeof="search" placeholder="  search" type="text"
                               style="border: none;width: 150px;float: left;height:30px;">
                        <div style="width: 10px;float: right;margin-right: 20px;margin-top: 5px">
                            <Icon type="ios-search"/>
                        </div>
                    </div>
                </div>
                <div class="inline" style="height: 32px">
                    <p style="text-align: center;float: left;margin-right: 20px;margin-top: 5px"> 方面类别</p>
                    <div style="text-align: center;float: left;margin-top: 5px">
                        <label><input class="choice" type="radio" value="" style="margin-left: 10px;"/>政治</label>
                        <label><input class="choice" type="radio" value=""/>经济</label>
                        <label><input class="choice" type="radio" value=""/>外交</label>
                    </div>
                </div>
            </div>
            <div class="second" style="padding:0;clear:both; margin-top: 20px;height: 47px; ">
                <div class="inline" style="float: left;margin-right: 30px;border: 1px solid black;
                width: 270px;background-color: white;height: 40px;margin-top: 3px;">
                    <div style="float:left;margin-left: 10px;margin-top: 8px">
                        <Icon type="md-calendar"/>
                    </div>
                    <div style="float: left;margin-left: 10px">
                        <input type="text" id="from" name="from" class="time_choice" style="margin: 3px 3px">
                        <label for="to">到</label>
                        <input type="text" id="to" name="to" class="time_choice">
                    </div>
                </div>
                <div class="inline" style="text-align:center;height: 45px;float: left;margin-left: 50px">
                    <button>搜索</button>
                </div>
            </div>
        </div>

        <div >
            <div ref="echarts" style="width: 600px;height:400px;"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: '2',
}
</script>
<script>
import * as echarts from 'echarts'

export default {
    data() {
        return {
            chart: null,
            option: {
                title: {
                    text: '   观点数量变化图'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['正向', '中立', '负向']
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar', 'stack']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data: ['1月', '2月', '3月', '4月', '5月', '6月']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '正向',
                        type: 'bar',
                        barGap: 0,
                        color: 'orange',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [1000, 1332, 2401, 1024, 1490, 1140]
                    },
                    {
                        name: '中立',
                        type: 'bar',
                        color: 'blue',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [1500, 1102, 2001, 1634, 1100, 1360]
                    },
                    {
                        name: '负向',
                        type: 'bar',
                        color: 'red',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [1250, 1432, 1101, 1354, 1190, 1129]
                    },

                ]
            },
        }
    },
    mounted() {
        this.getPage()
    },
    methods: {
        getPage() {
            this.chart = echarts.init(this.$refs.echarts)
            // 使用指定的配置项和数据展示图表
            this.chart.setOption(this.option)
        },
    },
}
</script>

<style scoped>
.choice {
    width: 20px;
}

.time_choice {
    width: 100px;
    height: 30px;
    border: none;
    margin: 1px 1px;
}

.inline {
    margin: 0;
    width: 250px;
    padding: 0;
    display: inline-block;
    _display: inline;
    *display: inline;
    zoom: 1;
}

button {
    padding: 10px;
    color: black;
    border: 1px solid;
    cursor: pointer;
    background: white;
}

.header1 {
    padding: 50px;
}

.body {
    text-align: center;
    height: auto;
}

</style>
