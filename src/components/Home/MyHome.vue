<template>
<!-- 顶部导航栏 -->
    <div>
        <div class="header">
            <div class="top">
                <p>全部商品分类</p>
                <p>服装城</p>
                <p>美妆馆</p>
                <p>商品汇超市</p>
                <p>全球购</p>
                <p>闪购</p>
                <p>团购</p>
                <p>有趣</p>
                <p>秒杀</p>
            </div>
        </div>
         <!-- 中间横向三栏 -->
         <div class="main">
            <div class="main1">
                <a href="#">图像、音响、数字商品</a>
                <a href="#">家用电器</a>
                <a href="#">手机、数码、充值</a>
                <a href="#">电脑、办公</a>
                <a href="#">家居、家具、家装、厨具</a>
                <a href="#">服饰内衣</a>
                <a href="#">个护化妆</a>
                <a href="#">运动健康</a>
                <a href="#">汽车用品</a>
                <a href="#">彩票、旅行</a>
                <a href="#">理财、众筹</a>
                <a href="#">母婴、玩具</a>
                <a href="#">箱包</a>
                <a href="#">运动户外</a>
            </div>
            <div class="main2">
                <button @click="prev" id="btnleft">←</button>
                <img :src="imgArr[index].src" alt="">
                <button @click="next" id="btnright">→</button>
            </div>
            <div class="main3">
                <div class="box1">
                    <p>商品汇快报</p>
                    <p>更多>></p>
                </div>
                <div class="box2">
                    <p>【特惠】备战开学季 全民半价购数码</p>
                    <p>【公告】备战开学季 全民半价购数码</p>
                    <p>【特惠】备战开学季 全民半价购数码</p>
                    <p>【公告】备战开学季 全民半价购数码</p>
                    <p>【特惠】备战开学季 全民半价购数码</p>
                </div>
                <div class="box3">
                    <table border="1" rules="all">
                        <tr>
                            <td><img src="./image/phone.jpg" alt=""></td>
                            <td><img src="./image/airplance.jpg" alt=""></td>
                            <td><img src="./image/movie.jpg" alt=""></td>
                            <td><img src="./image/game.jpg" alt=""></td>
                        </tr>
                        <tr>
                            <td>话费</td>
                            <td>机票</td>
                            <td>电影票</td>
                            <td>游戏</td>
                        </tr>
                        <tr>
                            <td><img src="./image/ticket.jpg" alt=""></td>
                            <td><img src="./image/oil.jpg" alt=""></td>
                            <td><img src="./image/home.jpg" alt=""></td>
                            <td><img src="./image/car.jpg" alt=""></td>
                        </tr>
                        <tr>
                            <td>彩票</td>
                            <td>加油站</td>
                            <td>酒店</td>
                            <td>车票</td>
                        </tr>
                        <tr>
                            <td><img src="./image/zongcou.jpg" alt=""></td>
                            <td><img src="./image/licai.jpg" alt=""></td>
                            <td><img src="./image/gift.jpg" alt=""></td>
                            <td><img src="./image/baitiao.jpg" alt=""></td>
                        </tr>
                        <tr>
                            <td>众筹</td>
                            <td>理财</td>
                            <td>礼品卡</td>
                            <td>白条</td>
                        </tr>
                    </table>
                </div>
                <div class="box4">
                    <img src="./image/ad1.png"/>
                </div>
            </div>
         </div>
         <!-- 今日推荐 -->
         <div class="today">
            <div id="title"><p id="title1">💝💘🤎💛今日推荐💚💙💜💖</p></div>
            <span id="todayimg1"><img src="./image/timeclock.jpg" alt=""></span>
            <span><img src="./image/today01.png" alt=""></span>
            <span><img src="./image/today02.png" alt=""></span>
            <span><img src="./image/today04.png" alt=""></span>
         </div>
         <!-- 热卖排行 -->
         <div class="hot">
            <div class="hotheader">
                <div>🔥🔥🔥🔥🔥</div>
                <div>热卖排行</div>
            </div>
            <div class="hotfoot">
                <img src="./image/1.jpg" alt=""/>
                <img src="./image/1.jpg" alt=""/>
                <img src="./image/1.jpg" alt=""/>
                <img src="./image/1.jpg" alt=""/>
                <table>
                    <tr>
                        <td>【官网直降1100】Apple iPhone 8 Plus 256GB 银色 移动 联通电信4G手机</td>
                        <td>【官网直降1100】Apple iPhone 8 Plus 256GB 银色 移动 联通电信4G手机</td>
                        <td>【官网直降1100】Apple iPhone 8 Plus 256GB 银色 移动 联通电信4G手机</td>
                        <td>【官网直降1100】Apple iPhone 8 Plus 256GB 银色 移动 联通电信4G手机</td>
                    </tr>

                    <tr id="money">
                        <td>定金: ￥100.00</td>
                        <td>定金: ￥100.00</td>
                        <td>定金: ￥100.00</td>
                        <td>定金: ￥100.00</td>
                    </tr>
                </table>
            </div>
         </div>
         <!-- 为你推荐 -->
         <div class="goods">
            <div id="goodstitle">『 为你推荐 』</div>
            <table border="1" rules="all" id="goodstb">
                <tr id="tr1">
                    <td><img src="./image/goods1.jpg" alt=""></td>
                    <td><img src="./image/goods2.jpg" alt=""></td>
                    <td><img src="./image/goods3.jpg" alt=""></td>
                    <td><img src="./image/goods4.jpg" alt=""></td>
                    <td><img src="./image/goods5.jpg" alt=""></td>
                </tr>
                <tr id="tr2">
                    <td>【300 减210】百草味 卤味大礼包510g 荤素集结鸭脖鸭翅鸭锁骨熟食整箱MJ 经典版</td>
                    <td>【300 减210】百草味 带籽鱿鱼仔180g 即食墨鱼仔休闲零食海鲜小吃特产 MJ 香辣味</td>
                    <td>【300 减210】百草味 手撕鱿鱼条80g 鱿鱼丝海鲜零食即食小鱿鱼干散装特产小吃 MJ 鱿鱼条</td>
                    <td>【300 减210】百草味 手撕蟹味棒120g 海鲜小包装蟹肉蟹柳肉干网红零食小吃MJ 香辣味</td>
                    <td>【300 减210】百草味 开心果100g 每日坚果干果炒货休闲零食 原色大颗粒 无漂白 MJ</td>
                </tr>
                <tr id="tr3">
                    <td>￥105.00</td>
                    <td>￥52.10</td>
                    <td>￥36.80</td>
                    <td>￥30.80</td>
                    <td>￥39.80</td>
                </tr>
                 <tr id="tr1">
                    <td><img src="./image/goods6.jpg" alt=""></td>
                    <td><img src="./image/goods7.jpg" alt=""></td>
                    <td><img src="./image/goods8.jpg" alt=""></td>
                    <td><img src="./image/goods9.jpg" alt=""></td>
                    <td><img src="./image/goods10.jpg" alt=""></td>
                </tr>
                <tr id="tr2">
                    <td>联想ThinkPad E14 酷睿版 英特尔酷睿i5 14英寸轻薄笔记本电脑(酷睿i5 8G 512G FHD)黑 win11</td>
                    <td>联想ThinkBook 14 锐龙版笔记本电脑 14英寸商务轻薄本 高色域屏 R5 16G 512G EYCD 预装office</td>
                    <td>【2022新款】蓝牙耳机适用于华为手机真无线入耳式运动降噪超长续航荣耀苹果VIVO小米oppo固质 白色升级版</td>
                    <td>67W大功率丨索盈充电宝超级快充大容量20000mAh毫安便携式超薄小巧适用华为苹果安卓手机移动电源</td>
                    <td>洛斐(LOFREE)孔雀无线蓝牙机械键盘青轴苹果Mac电脑办公笔记本iPad手机女生键盘</td>
                </tr>
                <tr id="tr3">
                    <td>￥3699.00</td>
                    <td>￥4099.00</td>
                    <td>￥57.80</td>
                    <td>￥68.80</td>
                    <td>￥699.00</td>
                </tr>
                 <tr id="tr1">
                    <td><img src="./image/goods11.jpg" alt=""></td>
                    <td><img src="./image/goods12.jpg" alt=""></td>
                    <td><img src="./image/goods13.jpg" alt=""></td>
                    <td><img src="./image/goods14.jpg" alt=""></td>
                    <td><img src="./image/goods15.jpg" alt=""></td>
                </tr>
                <tr id="tr2">
                    <td>苏泊尔(SUPOR)电饼铛迷你双面独立加热家用煎烤机薄饼锅烙饼机电饼档三明治机金色 JJ30A848</td>
                    <td>小熊(Bear)多士炉 烤面包机馒头片机家用全自动不锈钢2片吐司加热机 绿色-DSL-C02W1</td>
                    <td>荣事达(Royalstar)榨汁机 便携式无线迷你榨汁杯家用小型搅拌杯料理机果汁机 RZ-68V7A</td>
                    <td>米家 小米扫地机器人扫拖一体3C 拖地机擦地机 激光导航 4000Pa超大吸力 小爱同学&米家APP互联</td>
                    <td>法诗缇(Fastee) 家用无烟烤肉锅 家庭室内电烧烤炉韩式不沾电烤炉烧烤架烤肉盘电烤盘烤肉机煎肉锅 拉菲红</td>
                </tr>
                <tr id="tr3">
                    <td>￥229.00</td>
                    <td>￥99.00</td>
                    <td>￥49.00</td>
                    <td>￥1299.00</td>
                    <td>￥489.00</td>
                </tr>
            </table>
         </div>
    </div>
</template>

<script>
export default {
    name:'MyHome',
    created() {
    //当程序进来的时候，打开定时器，令起自动轮播
        setInterval(() => {
        this.index++;
        if (this.index == 3) {
            this.index = 0;
        }
        }, 3000);
    },
    data() {
        return {
            imgArr:[
                    {src:require("./image/banner1.jpg")},
                    {src:require("./image/banner2.jpg")},
                    {src:require("./image/banner3.jpg")},
                    ],
            index:0,          
        }
    },
    methods: {
        prev(){
            if(this.index==0){
                this.index=0
            }else{
            this.index--
            }
        },
        next(){
            if(this.index==2){
                this.index=2
            }else{
                this.index++
            }
        }
    },
}
</script>

<style scoped>
.header{
    border-bottom: 1px solid rgb(255, 0, 0);
}
.top{
    width: 1200px;
    height: 40px;
    margin: 0 auto;
    overflow: hidden;
}
.top p:nth-child(1){
    background-color: red;
    color: white;
}
.top p{
    width: 131px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 1000;
    float: left;
    text-align: center;
    height: 100%;
}
.top p:hover{
    color: rgb(158, 158, 158);
    text-decoration: underline;
}
.main{
    width: 1200px;

    margin: 0 auto;
    overflow: hidden;
    display: flex;
    margin-top: 5px;
}
.main1{

    width: 230px;
    height: 470px;
    background-color: rgb(250, 250, 250);
}
.main1 a{
    display: block;
    text-decoration: none;
    color: black;
    height: 32px;
    line-height: 32px;
    padding-left: 15px;
    font-size: 14px;
}
.main1 a:hover{
    background-color: rgb(210, 210, 210);
    color: rgb(0, 100, 131);
    text-decoration: underline;
}
.main2{

    width: 700px;
    height: 470px;

}
.main2 img{
    width: 95%;
    height: 470px;
}
.main3{

    width: 260px;
    height: 470px;

}
.box1{

    display:inline-flex;
    height: 30px;
    line-height: 30px;
}
.box1 p:nth-child(1){
    margin-left: 10px;
    font-weight: 600;
}
.box1 p:nth-child(2){
    margin-left: 120px;
    font-size: 12px;
    line-height: 30px;
}
.box2{
    border: 1px solid black;
    font-size: 13px;

}
.box2 p{
    margin: 5px;
}
.box3{
    width: 100%;
}
table{
    width: 100%;
    text-align: center;
}
table td{
    width: 30px;
    height: 40px;
    font-size: 12px;
    font-weight: 600;
}
table img{
    width:24px;
}
.box4 img{
    width: 100%;
}
#btnleft{
    position: relative;
    left: 20px;
    top: -200px;
}
#btnright{
    position: relative;
    right: 20px;
    top: -200px;
}
.today{

    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
}
.today img{
    height: 210px;

}
#todayimg1 img{
    height: 180px;
    margin: 24px;
}
#title{
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    background-color: rgb(240, 240, 240);
    height: 50px;
    width: 1190px;
    line-height: 50px;
    margin-bottom: -15px;
    margin-top: 4px;
    
}
#title1{
    animation-name:test;
    animation-duration: 3s;
	animation-iteration-count: infinite;
    animation-direction: alternate;
	animation-timing-function: linear;  
}
@keyframes test{
    from{
        margin-left: -230px;
    }
    to{
        margin-left: 180px;			
    }
}
.hotheader{
    width: 1180px;
    margin: 0 auto;
    background-color: rgb(245, 245, 245);
    font-size: 30px;
    text-align: center;
}
.hotfoot{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.hotfoot img{
    width: 250px;
    margin: 25px;
}
#money{
    color: red;
}
.goods{
    border: 1px solid black;
    width: 1180px;
    margin:0 auto ;
}
#goodstitle{
    text-align: center;
    font-size: 30px;
    font-weight: 1000;
}
#goodstb{
    border: 1px solid black;
}
#goodstb img{
    width: 150px;
}
#tr1{
    height: 200px;
}
#tr1 td:hover{
    border:1px double red;
}
#tr2 td{
    font-size: 13px;
    font-weight: 350;
}
#tr3 td{
    color: red;
    font-size: 16px;
    text-align: left;
    padding-left: 10px;
}
</style>