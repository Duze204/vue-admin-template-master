<template>
    <div class="mainp" style="position: fixed;width:100%;height:100%;overflow:scroll;">
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

        <div>
            <table>
                <tr>
                    <th style="background-color: #a1a3a6">国家/地区</th>
                    <th style="background-color: #a1a3a6">政治层面</th>
                    <th style="background-color: #a1a3a6">经济层面</th>
                    <th style="background-color: #a1a3a6">外交层面</th>
                </tr>
                <tr>
                    <th>
                        <p>尼泊尔</p>
                        <div class="circles-wrap" style="position: relative; display: inline-block;">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="200">
                                <rect rx="0" ry="0" width="200" height="20"
                                      style="fill: #409eff;"></rect>
                                <rect rx="0" ry="0" width="120" height="20" style="fill: orange;"></rect>
                            </svg>
                            <div class="circles-text" style="position: absolute; top: 0px; left: 0px;
                                    text-align: center; width: 100%; font-size: 15px; height: 20px; line-height: 20px;
                                    color: rgb(0, 0, 0);">
                                <span class="circles-integer">正向：60%</span></div>
                        </div>
                    </th>
                    <td>
                        <p>尼仅在MCC问题上尊重美政策</p>
                        <p>美方在尼活动受到尼法律约束和监督</p>
                    </td>
                    <td>
                        <p>债务陷阱</p>
                        <p>支持经济发展</p>
                    </td>
                    <td>
                        <p>拉近尼泊尔和美国的关系，让处在中印之间的尼泊尔获得更多战略回旋空间</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>美国</p>
                        <div class="circles-wrap" style="position: relative; display: inline-block;">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="200">
                                <rect rx="0" ry="0" width="200" height="20"
                                      style="fill: #409eff;"></rect>
                                <rect rx="0" ry="0" width="200" height="20" style="fill: orange;"></rect>
                            </svg>
                            <div class="circles-text" style="position: absolute; top: 0px; left: 0px;
                                    text-align: center; width: 100%; font-size: 15px; height: 20px; line-height: 20px;
                                    color: rgb(0, 0, 0);">
                                <span class="circles-integer">正向：100%</span></div>
                        </div>
                    </th>
                    <td>
                        <p>MCC协议是美国”印太战略“的组成部分</p>
                    </td>
                    <td>
                        <p>更多就业机会、可靠的电力供应以及更低的运输成本</p>
                    </td>
                    <td>
                        <p>对尼泊尔议会的最新行动表示赞许</p>
                        <p>来自美国人民的礼物</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>中国</p>
                        <div class="circles-wrap" style="position: relative; display: inline-block;">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="200">
                                <rect rx="0" ry="0" width="200" height="20"
                                      style="fill: #409eff;"></rect>
                                <rect rx="0" ry="0" width="0" height="20" style="fill: orange;"></rect>
                            </svg>
                            <div class="circles-text" style="position: absolute; top: 0px; left: 0px;
                                    text-align: center; width: 100%; font-size: 15px; height: 10px; line-height: 20px;
                                    color: rgb(0, 0, 0);">
                                <span class="circles-integer">负向：100%</span></div>
                        </div>
                    </th>
                    <td>
                        <p>买下尼泊尔主权</p>
                    </td>
                    <td>
                        <p>债务陷阱</p>
                    </td>
                    <td>
                        <p>不可能对中尼关系产生什么影响</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: '1',
}
</script>


<style scoped>
table
{
    border-collapse:collapse;
    border: 1px solid black;
    margin-left: 10px;
}
th{
    border: 1px solid black;
    margin: 1px 1px 1px 1px;
    width: 200px;
    height: 80px;
    font-size:20px;
    color: black;
}
td
{
    border: 1px solid black;
    margin: 1px 1px 1px 1px;
    padding: 7px;
    vertical-align: top;
    color: black;
}

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


.mainp {
    width: 100%;
}
</style>
