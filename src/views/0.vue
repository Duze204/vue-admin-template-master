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
                <div class="inline" style="float: left;margin-right: 30px;
                width: 270px;height: 40px;margin-top: 3px;">
                </div>
                <div class="inline" style="text-align:center;height: 45px;float: left;margin-left: 50px">
                    <button>搜索</button>
                </div>
            </div>
        </div>

        <div style="margin-left: 50px;margin-bottom: 100px;">
            <div class="first" style=";margin:0 auto;padding:0;clear:both;margin-top: 20px;">
                <div class="inline" style="margin-right: 30px;width: 700px">
                    <p style="float: left;margin-top: 5px"> 整体极性：</p>
                    <div style="text-align: center;width: 350px;height:32px;float: left;margin-left: 20px;">
                        <p class="words-lr" style="float: left;margin-right: 20px;margin-top: 5px">正向</p>
                        <div class="tc" style="float: left;margin-right: 20px;margin-top: 5px">
                            <div>
                                <div class="circles-wrap" style="position: relative; display: inline-block;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="200">
                                        <rect rx="0" ry="0" width="200" height="20"
                                              style="fill: #409eff;"></rect>
                                        <rect rx="0" ry="0" width="40" height="20" style="fill: orange;"></rect>
                                    </svg>
                                    <div class="circles-text" style="position: absolute; top: 0px; left: 0px;
                                    text-align: center; width: 100%; font-size: 20px; height: 20px; line-height: 20px;
                                    color: rgb(0, 0, 0);">
                                        <span class="circles-integer">20</span></div>
                                </div>
                            </div>
                        </div>
                        <p class="words-lr" style="float: left;margin-right: 20px;margin-top: 5px">负向</p>
                    </div>
                    <div style="text-align: center;float: left;margin-top: 3px">
                        <Icon type="ios-sad-outline" size="24"/>
                        <p class="words-lr" style="float: right;margin-left: 10px;">负向</p>
                    </div>
                </div>
                <div style="margin-left: 140px;margin-top: 10px;width: 200px">
                    <p class="tag">情感极性：MCC协议</p>
                    <p class="tag">时间：2022年2月</p>
                    <p class="tag">观点持有者：环球时报</p>
                </div>
            </div>
            <div class="first" style=";margin:0 auto;padding:0;clear:both;margin-top: 20px;">
                <div class="inline" style="margin-right: 30px;width: 700px">
                    <p style="float: left;margin-top: 5px;width:70px">观点1：</p>
                    <div style="text-align: center;width: 350px;height:32px;float: left;margin-left: 20px;">
                        <p class="words-lr" style="float: left;margin-right: 20px;margin-top: 5px">正向</p>
                        <div class="tc" style="float: left;margin-right: 20px;margin-top: 5px">
                            <div>
                                <div class="circles-wrap" style="position: relative; display: inline-block;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="200">
                                        <rect rx="0" ry="0" width="200" height="20"
                                              style="fill: #409eff;"></rect>
                                        <rect rx="0" ry="0" width="120" height="20" style="fill: orange;"></rect>
                                    </svg>
                                    <div class="circles-text" style="position: absolute; top: 0px; left: 0px;
                                    text-align: center; width: 100%; font-size: 20px; height: 20px; line-height: 20px;
                                    color: rgb(0, 0, 0);">
                                        <span class="circles-integer">60</span></div>
                                </div>
                            </div>
                        </div>
                        <p class="words-lr" style="float: left;margin-right: 20px;margin-top: 5px">负向</p>
                    </div>
                    <div style="text-align: center;float: left;margin-top: 3px">
                        <Icon type="ios-happy-outline" size="24"/>
                        <p class="words-lr" style="float: right;margin-left: 10px;">正向</p>
                    </div>
                </div>
                <div style="margin-left: 140px;margin-top: 10px;width: 300px">
                    <p class="tag">情感极性：MCC协议</p>
                    <p class="tag">时间：2022年2月</p>
                    <p class="tag">观点持有者：尼泊尔</p>
                    <p class="tag">情感词：批准、有利、社会发展、质疑、示威</p>
                </div>
            </div>
            <div class="first" style=";margin:0 auto;padding:0;clear:both;margin-top: 20px;">
                <div class="inline" style="margin-right: 30px;width: 700px">
                    <p style="float: left;margin-top: 5px;width: 70px">观点2：</p>
                    <div style="text-align: center;width: 350px;height:32px;float: left;margin-left: 20px;">
                        <p class="words-lr" style="float: left;margin-right: 20px;margin-top: 5px">正向</p>
                        <div class="tc" style="float: left;margin-right: 20px;margin-top: 5px">
                            <div>
                                <div class="circles-wrap" style="position: relative; display: inline-block;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="200">
                                        <rect rx="0" ry="0" width="200" height="20"
                                              style="fill: #409eff;"></rect>
                                        <rect rx="0" ry="0" width="200" height="20" style="fill: orange;"></rect>
                                    </svg>
                                    <div class="circles-text" style="position: absolute; top: 0px; left: 0px;
                                    text-align: center; width: 100%; font-size: 20px; height: 20px; line-height: 20px;
                                    color: rgb(0, 0, 0);">
                                        <span class="circles-integer">100</span></div>
                                </div>
                            </div>
                        </div>
                        <p class="words-lr" style="float: left;margin-right: 20px;margin-top: 5px">负向</p>
                    </div>
                    <div style="text-align: center;float: left;margin-top: 3px">
                        <Icon type="ios-happy-outline" size="24"/>
                        <p class="words-lr" style="float: right;margin-left: 10px;">正向</p>
                    </div>
                </div>
                <div style="margin-left: 140px;margin-top: 10px;">
                    <p class="tag">情感极性：MCC协议</p>
                    <p class="tag">时间：2022年2月</p>
                    <p class="tag">观点持有者：美国</p>
                    <p class="tag">情感词：礼物、赞许、就业机会、更低成本、可靠电力供应</p>
                </div>
            </div>
            <div class="first" style=";margin:0 auto;padding:0;clear:both;margin-top: 20px;">
                <div class="inline" style="margin-right: 30px;width: 700px">
                    <p style="float: left;margin-top: 5px;width: 70px">观点3：</p>
                    <div style="text-align: center;width: 350px;height:32px;float: left;margin-left: 20px;">
                        <p class="words-lr" style="float: left;margin-right: 20px;margin-top: 5px">正向</p>
                        <div class="tc" style="float: left;margin-right: 20px;margin-top: 5px">
                            <div>
                                <div class="circles-wrap" style="position: relative; display: inline-block;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="200">
                                        <rect rx="0" ry="0" width="200" height="20"
                                              style="fill: #409eff;"></rect>
                                        <rect rx="0" ry="0" width="0" height="20" style="fill: orange;"></rect>
                                    </svg>
                                    <div class="circles-text" style="position: absolute; top: 0px; left: 0px;
                                    text-align: center; width: 100%; font-size: 20px; height: 20px; line-height: 20px;
                                    color: rgb(0, 0, 0);">
                                        <span class="circles-integer">0</span></div>
                                </div>
                            </div>
                        </div>
                        <p class="words-lr" style="float: left;margin-right: 20px;margin-top: 5px">负向</p>
                    </div>
                    <div style="text-align: center;float: left;margin-top: 3px">
                        <Icon type="ios-sad-outline" size="24"/>
                        <p class="words-lr" style="float: right;margin-left: 10px;">负向</p>
                    </div>
                </div>
                <div style="margin-left: 140px;margin-top: 10px;">
                    <p class="tag">情感极性：MCC协议</p>
                    <p class="tag">时间：2022年2月</p>
                    <p class="tag">观点持有者：中国</p>
                    <p class="tag">情感词：胁迫、干涉、损害、驳斥、最后通牒</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: '0',
}
</script>


<style scoped>

.tag{
    margin-top: 3px;
}
.words-lr {
    float: left;
}

.choice {
    width: 20px;
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
    margin: 50px 50px 20px 50px;
}


.mainp {
    width: 100%;
}
</style>
