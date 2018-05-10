SET NAMES UTF8;
DROP DATABASE IF EXISTS YYS;
CREATE DATABASE YYS CHARSET=UTF8;
USE YYS;
#小轮播图表
CREATE TABLE index_carousel(
	lid INT PRIMARY KEY ,
	pic VARCHAR(128) UNIQUE
);
INSERT INTO index_carousel values(1,"img/index/194.jpg");
INSERT INTO index_carousel values(2,"img/index/195.jpg");
INSERT INTO index_carousel values(3,"img/index/412.jpg");

#人物角色表
CREATE TABLE index_roles(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	pic VARCHAR(128) ,
	type VARCHAR(16)
);

#ssr人物(15)
INSERT INTO index_roles values(null,"数珠","img/index/200.png","ssr");
INSERT INTO index_roles values(null,"百目鬼","img/index/201.png","ssr");
INSERT INTO index_roles values(null,"书翁","img/index/202.png","ssr");
INSERT INTO index_roles values(null,"小松丸","img/index/203.png","ssr");
INSERT INTO index_roles values(null,"匣中少女","img/index/205.png","ssr");
INSERT INTO index_roles values(null,"以津真天","img/index/206.png","ssr");
INSERT INTO index_roles values(null,"玉藻田","img/index/207.png","ssr");
INSERT INTO index_roles values(null,"雪童子","img/index/208.png","ssr");
INSERT INTO index_roles values(null,"兔丸","img/index/209.png","ssr");
INSERT INTO index_roles values(null,"彼岸花","img/index/210.png","ssr");
INSERT INTO index_roles values(null,"鸩","img/index/211.png","ssr");
INSERT INTO index_roles values(null,"荒","img/index/212.png","ssr");
INSERT INTO index_roles values(null,"金鱼姬","img/index/213.png","ssr");
INSERT INTO index_roles values(null,"青坊主","img/index/214.png","ssr");
INSERT INTO index_roles values(null,"夜叉","img/index/215.png","ssr");
#sr人物(21)
INSERT INTO index_roles values(null,"白童子","img/index/216.png","sr");
INSERT INTO index_roles values(null,"烟烟罗","img/index/217.png","sr");
INSERT INTO index_roles values(null,"桃花妖","img/index/218.png","sr");
INSERT INTO index_roles values(null,"万年竹","img/index/219.png","sr");
INSERT INTO index_roles values(null,"古笼火","img/index/220.png","sr");
INSERT INTO index_roles values(null,"黑童子","img/index/221.png","sr");
INSERT INTO index_roles values(null,"花鸟卷","img/index/222.png","sr");
INSERT INTO index_roles values(null,"辉夜姬","img/index/223.png","sr");
INSERT INTO index_roles values(null,"雪女","img/index/224.png","sr");
INSERT INTO index_roles values(null,"三尾狐","img/index/225.png","sr");
INSERT INTO index_roles values(null,"座敷童子","img/index/226.png","sr");
INSERT INTO index_roles values(null,"九命猫","img/index/227.png","sr");
INSERT INTO index_roles values(null,"河童","img/index/228.png","sr");
INSERT INTO index_roles values(null,"鬼使黑","img/index/230.png","sr");
INSERT INTO index_roles values(null,"童女","img/index/231.png","sr");
INSERT INTO index_roles values(null,"灯笼鬼","img/index/232.png","sr");
INSERT INTO index_roles values(null,"鲤鱼精","img/index/233.png","sr");
INSERT INTO index_roles values(null,"狸猫","img/index/234.png","sr");
INSERT INTO index_roles values(null,"鬼使白","img/index/236.png","sr");
INSERT INTO index_roles values(null,"童男","img/index/237.png","sr");
INSERT INTO index_roles values(null,"恶鬼","img/index/238.png","sr");

#r人物(25)
INSERT INTO index_roles values(null,"孟婆","img/index/241.png","r");
INSERT INTO index_roles values(null,"大天狗","img/index/242.png","r");
INSERT INTO index_roles values(null,"酒吞童子","img/index/243.png","r");
INSERT INTO index_roles values(null,"食发鬼","img/index/244.png","r");
INSERT INTO index_roles values(null,"骨女","img/index/245.png","r");
INSERT INTO index_roles values(null,"跳跳弟弟","img/index/246.png","r");
INSERT INTO index_roles values(null,"巫蛊师","img/index/247.png","r");
INSERT INTO index_roles values(null,"鸦天狗","img/index/248.png","r");
INSERT INTO index_roles values(null,"犬神","img/index/249.png","r");
INSERT INTO index_roles values(null,"武士之灵","img/index/250.png","r");
INSERT INTO index_roles values(null,"雨女","img/index/251.png","r");
INSERT INTO index_roles values(null,"跳跳妹妹","img/index/252.png","r");
INSERT INTO index_roles values(null,"兵俑","img/index/253.png","r");
INSERT INTO index_roles values(null,"独眼小僧","img/index/254.png","r");
INSERT INTO index_roles values(null,"铁鼠","img/index/255.png","r");
INSERT INTO index_roles values(null,"椒图","img/index/256.png","r");
INSERT INTO index_roles values(null,"山兔","img/index/257.png","r");
INSERT INTO index_roles values(null,"蝴蝶精","img/index/258.png","r");
INSERT INTO index_roles values(null,"丑时之女","img/index/259.png","r");
INSERT INTO index_roles values(null,"鬼女红叶","img/index/260.png","r");
INSERT INTO index_roles values(null,"跳跳哥哥","img/index/261.png","r");
INSERT INTO index_roles values(null,"管狐","img/index/262.png","r");
INSERT INTO index_roles values(null,"莹草","img/index/263.png","r");
INSERT INTO index_roles values(null,"傀儡师","img/index/264.png","r");
INSERT INTO index_roles values(null,"山童","img/index/265.png","r");
#n人物(38)
INSERT INTO index_roles values(null,"提灯小僧","img/index/266.png","n");
INSERT INTO index_roles values(null,"海坊主","img/index/267.png","n");
INSERT INTO index_roles values(null,"觉","img/index/268.png","n");
INSERT INTO index_roles values(null,"判官","img/index/269.png","n");
INSERT INTO index_roles values(null,"吸血姬","img/index/270.png","n");
INSERT INTO index_roles values(null,"首无","img/index/271.png","n");
INSERT INTO index_roles values(null,"赤舌","img/index/272.png","n");
INSERT INTO index_roles values(null,"荒川之主","img/index/273.png","n");
INSERT INTO index_roles values(null,"青蛙瓷器","img/index/274.png","n");
INSERT INTO index_roles values(null,"凤凰火","img/index/275.png","n");
INSERT INTO index_roles values(null,"妖狐","img/index/276.png","n");
INSERT INTO index_roles values(null,"阎魔","img/index/277.png","n");
INSERT INTO index_roles values(null,"食梦貘","img/index/278.png","n");
INSERT INTO index_roles values(null,"小鹿男","img/index/279.png","n");
INSERT INTO index_roles values(null,"镰鼬","img/index/280.png","n");
INSERT INTO index_roles values(null,"二口女","img/index/281.png","n");
INSERT INTO index_roles values(null,"茨木童子","img/index/282.png","n");
INSERT INTO index_roles values(null,"妖琴师","img/index/283.png","n");
INSERT INTO index_roles values(null,"两面佛","img/index/285.png","n");
INSERT INTO index_roles values(null,"淸姬","img/index/286.png","n");

INSERT INTO index_roles values(null,"姑获鸟","img/index/287.png","n");
INSERT INTO index_roles values(null,"白狼","img/index/288.png","n");
INSERT INTO index_roles values(null,"青行灯","img/index/289.png","n");
INSERT INTO index_roles values(null,"樱花妖","img/index/290.png","n");
INSERT INTO index_roles values(null,"妖刀姬","img/index/291.png","n");
INSERT INTO index_roles values(null,"盗墓小鬼","img/index/292.png","n");
INSERT INTO index_roles values(null,"唐纸伞妖","img/index/293.png","n");
INSERT INTO index_roles values(null,"无邪鬼赤","img/index/300.png","n");
INSERT INTO index_roles values(null,"无邪鬼青","img/index/301.png","n");
INSERT INTO index_roles values(null,"惠比寿","img/index/400.png","n");
INSERT INTO index_roles values(null,"络新妇","img/index/401.png","n");
INSERT INTO index_roles values(null,"寄生魂","img/index/403.png","n");
INSERT INTO index_roles values(null,"天邪鬼绿","img/index/404.png","n");
INSERT INTO index_roles values(null,"天邪鬼黄","img/index/405.png","n");
INSERT INTO index_roles values(null,"帚神","img/index/406.png","n");
INSERT INTO index_roles values(null,"涂壁","img/index/407.png","n");
INSERT INTO index_roles values(null,"般若","img/index/408.png","n");
INSERT INTO index_roles values(null,"一目连","img/index/409.png","n");


#主页第三部分人物(同人专区)
CREATE TABLE fan_zone(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	spec VARCHAR(32),
	pic VARCHAR(128),
	title VARCHAR(128)
);
#第一栏
INSERT INTO fan_zone values(null,"精选推荐","img/index_coser/1.jpg","茨木茨球新皮就等实装啦 ​​​【作者】长阳");
INSERT INTO fan_zone values(null,"精选推荐","img/index_coser/2.jpg","我寮已成鹿窝【作者】爱开车的米大dick");
INSERT INTO fan_zone values(null,"精选推荐","img/index_coser/3.jpg","座敷童子表示不满【作者】易-放飞自我中");
INSERT INTO fan_zone values(null,"精选推荐","img/index_coser/4.jpg","大狗子新皮依旧俊朗【作者】易-放飞自我");
INSERT INTO fan_zone values(null,"精选推荐","img/index_coser/5.jpg","Q版大锤锤数珠【作者】雘雘子");
INSERT INTO fan_zone values(null,"精选推荐","img/index_coser/6.jpg","小鹿男(与三只小镰鼬) 【作者】 油盏灯先生");
INSERT INTO fan_zone values(null,"精选推荐","img/index_coser/7.jpg","茨木的心也到了白色相簿的季节(?) 【作者】");
INSERT INTO fan_zone values(null,"精选推荐","img/index_coser/8.jpg","马尾大天狗【作者】 画画的erry");

#第二栏
INSERT INTO fan_zone values(null,"同人绘画","img/index_coser/9.jpg","水彩小松丸【作者】一坨废连");
INSERT INTO fan_zone values(null,"同人绘画","img/index_coser/10.jpg","Q版茨木青竹白雪【作者】雘雘子");
INSERT INTO fan_zone values(null,"同人绘画","img/index_coser/11.jpg","「血之拥抱」吸血姬【作者】-NEGA-");
INSERT INTO fan_zone values(null,"同人绘画","img/index_coser/12.jpg","请自行脑补大作【作者】虫它丸");
INSERT INTO fan_zone values(null,"同人绘画","img/index_coser/13.jpg","花鸟卷【作者】易-放飞自我");
INSERT INTO fan_zone values(null,"同人绘画","img/index_coser/14.jpg","懵懂小妖数珠【作者】半仙儿_");
INSERT INTO fan_zone values(null,"同人绘画","img/index_coser/15.jpg","兔兔一族【作者】魂魂SOUL");
INSERT INTO fan_zone values(null,"同人绘画","img/index_coser/16.jpg","大天狗新皮就像公鸡外套 【作者】魂魂SOUL");
#第三栏
INSERT INTO fan_zone values(null,"玩家COS","img/index_coser/17.jpg","鬼女红叶cos【作者】琉璃白-");
INSERT INTO fan_zone values(null,"玩家COS","img/index_coser/18.jpg","彼岸花x吸血姬cos【作者】芊灵-雪影&林老");
INSERT INTO fan_zone values(null,"玩家COS","img/index_coser/19.jpg","妖狐 x 跳跳妹妹cos【作者】辣鸡的楼兰");
INSERT INTO fan_zone values(null,"玩家COS","img/index_coser/20.jpg","妖刀姬cos【作者】稲田千花");
INSERT INTO fan_zone values(null,"玩家COS","img/index_coser/21.jpg","判官cos【作者】辣鸡的楼兰");
INSERT INTO fan_zone values(null,"玩家COS","img/index_coser/22.jpg","妖狐cos风雅之士【作者】雪落墨初");
INSERT INTO fan_zone values(null,"玩家COS","img/index_coser/23.jpg","大天狗cos【作者】雪落墨初");
INSERT INTO fan_zone values(null,"玩家COS","img/index_coser/24.jpg","姑获鸟x大天狗【作者】白梨银针 & SOUL海");

#第四栏
INSERT INTO fan_zone values(null,"同人视频","img/index_coser/25.jpg","玩球的百目鬼-手绘作画过程【作者】弃疗萌");
INSERT INTO fan_zone values(null,"同人视频","img/index_coser/26.jpg","没出息的阴阳师一家 第三话【作者】FLAY");
INSERT INTO fan_zone values(null,"同人视频","img/index_coser/27.jpg","一起觉醒次元之力【作者】");
INSERT INTO fan_zone values(null,"同人视频","img/index_coser/28.jpg","【白磷】【阴阳师现世妖约】与狗子在炎炎夏");
INSERT INTO fan_zone values(null,"同人视频","img/index_coser/29.jpg","普通话的阴阳师开场白你敢听吗？");
INSERT INTO fan_zone values(null,"同人视频","img/index_coser/30.jpg","华丽现世召唤，突破次元壁之旅");
INSERT INTO fan_zone values(null,"同人视频","img/index_coser/31.jpg","【有声漫画】妖狐与天狗【莫逸工作室】");
INSERT INTO fan_zone values(null,"同人视频","img/index_coser/32.jpg","祝各位阴阳师大人六一节日快乐【作者】");

#第五栏
INSERT INTO fan_zone values(null,"同人小说","img/index_coser/33.jpg","百鬼夜行——第二章");
INSERT INTO fan_zone values(null,"同人小说","img/index_coser/34.jpg","百鬼夜行——第一章");
INSERT INTO fan_zone values(null,"同人小说","img/index_coser/35.jpg","华之乱#酒茨【作者】八点三十二分");
INSERT INTO fan_zone values(null,"同人小说","img/index_coser/36.jpg","狗崽【作者】929****41");
INSERT INTO fan_zone values(null,"同人小说","img/index_coser/37.jpg","指间冰雪（姑获鸟×雪女）【作者】瑶台镜");
INSERT INTO fan_zone values(null,"同人小说","img/index_coser/38.jpg","阴阳师妖狐前身传记二【作者】Heyingyao");
INSERT INTO fan_zone values(null,"同人小说","img/index_coser/39.jpg","阴阳师妖狐前身传记一【作者】Heyingyao");
INSERT INTO fan_zone values(null,"同人小说","img/index_coser/40.jpg","阴阳寮的元宵节【作者】月朝歌＃阴阳师同人");
#第六栏
INSERT INTO fan_zone values(null,"高手在民间","img/index_coser/41.jpg","一目连 超轻粘土【作者】-白木反-");
INSERT INTO fan_zone values(null,"高手在民间","img/index_coser/42.jpg","妖刀姬 超轻黏土【作者】 丶眼泪泪泪");
INSERT INTO fan_zone values(null,"高手在民间","img/index_coser/43.jpg","山兔 超轻黏土【作者】风吟wj");
INSERT INTO fan_zone values(null,"高手在民间","img/index_coser/44.jpg","玉藻前 超轻粘土【作者】佐颜丶");
INSERT INTO fan_zone values(null,"高手在民间","img/index_coser/45.jpg","一只小小风神 ​​【作者】Lolo一洛");
INSERT INTO fan_zone values(null,"高手在民间","img/index_coser/46.jpg","萤草胸像【作者】许蕾粘土手作");
INSERT INTO fan_zone values(null,"高手在民间","img/index_coser/47.jpg","青行灯超轻粘土【作者】青青取不出名字");
INSERT INTO fan_zone values(null,"高手在民间","img/index_coser/48.jpg","雪童子超轻粘土 ​​【作者】范泥泥233");

#登录/注册
CREATE TABLE reg_login(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	account VARCHAR(128) ,
	upwd VARCHAR(64) ,
	phone VARCHAR(64)
);

#充值页大轮播图
CREATE TABLE pay_carousel(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(128) UNIQUE
);
INSERT INTO pay_carousel values(null,"img/pay/c1.jpg");
INSERT INTO pay_carousel values(null,"img/pay/c2.jpg");
INSERT INTO pay_carousel values(null,"img/pay/c3.jpg");
INSERT INTO pay_carousel values(null,"img/pay/c4.jpg");
INSERT INTO pay_carousel values(null,"img/pay/c5.jpg");
#游戏栏目
CREATE TABLE pay_game(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(128) UNIQUE,
	type VARCHAR(128),
	title VARCHAR(128)
);
#热门
INSERT INTO pay_game values(null,"img/pay/r1.png","热门","飞刀又见飞刀");
INSERT INTO pay_game values(null,"img/pay/r2.png","热门","龙魂时刻");
INSERT INTO pay_game values(null,"img/pay/r3.png","热门","元气战姬学院");
INSERT INTO pay_game values(null,"img/pay/r4.png","热门","倩女幽魂手游");
INSERT INTO pay_game values(null,"img/pay/r5.png","热门","西楚霸王");
INSERT INTO pay_game values(null,"img/pay/r6.png","热门","大话西游手游");
INSERT INTO pay_game values(null,"img/pay/r7.png","热门","梦幻西游手游");
INSERT INTO pay_game values(null,"img/pay/r8.png","热门","乱斗西游2");
INSERT INTO pay_game values(null,"img/pay/r9.png","热门","乖离性百万亚瑟王");
INSERT INTO pay_game values(null,"img/pay/r10.png","热门","天下HD");
INSERT INTO pay_game values(null,"img/pay/r11.png","热门","梦幻西游电脑版");
INSERT INTO pay_game values(null,"img/pay/r12.png","热门","大话西游2经典版");
INSERT INTO pay_game values(null,"img/pay/r13.png","热门","天下3");
INSERT INTO pay_game values(null,"img/pay/r14.png","热门","天谕");
INSERT INTO pay_game values(null,"img/pay/r15.png","热门","新倩女幽魂");
INSERT INTO pay_game values(null,"img/pay/r16.png","热门","镇魔曲");
#端游
INSERT INTO pay_game values(null,"img/pay/d1.png","端游","龙魂时刻");
INSERT INTO pay_game values(null,"img/pay/d2.png","端游","泰亚史诗");
INSERT INTO pay_game values(null,"img/pay/d3.png","端游","秘境对决");
INSERT INTO pay_game values(null,"img/pay/d4.png","端游","大话西游2免费版");
INSERT INTO pay_game values(null,"img/pay/d5.png","端游","西楚霸王");
INSERT INTO pay_game values(null,"img/pay/d6.png","端游","梦幻西游电脑版");
INSERT INTO pay_game values(null,"img/pay/d7.png","端游","大话西游2经典版");
INSERT INTO pay_game values(null,"img/pay/d8.png","端游","天下3");
INSERT INTO pay_game values(null,"img/pay/d9.png","端游","天谕");
INSERT INTO pay_game values(null,"img/pay/d10.png","端游","新倩女幽魂");
INSERT INTO pay_game values(null,"img/pay/d11.png","端游","镇魔曲");
INSERT INTO pay_game values(null,"img/pay/d12.png","端游","大唐无双零");
INSERT INTO pay_game values(null,"img/pay/d13.png","端游","武魂2");
INSERT INTO pay_game values(null,"img/pay/d14.png","端游","新大话西游3");
INSERT INTO pay_game values(null,"img/pay/d15.png","端游","新飞飞");
INSERT INTO pay_game values(null,"img/pay/d16.png","端游","精灵传说");
#手游
INSERT INTO pay_game values(null,"img/pay/s1.png","手游","三国如龙传");
INSERT INTO pay_game values(null,"img/pay/s2.png","手游","魔法禁书目录");
INSERT INTO pay_game values(null,"img/pay/s3.png","手游","墟土之争");
INSERT INTO pay_game values(null,"img/pay/s4.png","手游","飞刀又见飞刀");
INSERT INTO pay_game values(null,"img/pay/s5.png","手游","元气战姬学院");
INSERT INTO pay_game values(null,"img/pay/s6.png","手游","天下手游");
INSERT INTO pay_game values(null,"img/pay/s7.png","手游","倩女幽魂手游");
INSERT INTO pay_game values(null,"img/pay/s8.png","手游","率土之滨");
INSERT INTO pay_game values(null,"img/pay/s9.png","手游","圣灵Zero");
INSERT INTO pay_game values(null,"img/pay/s10.png","手游","黑暗启元");
INSERT INTO pay_game values(null,"img/pay/s11.png","手游","大话西游手游");
INSERT INTO pay_game values(null,"img/pay/s12.png","手游","梦幻西游手游");
INSERT INTO pay_game values(null,"img/pay/s13.png","手游","乱斗西游2");
INSERT INTO pay_game values(null,"img/pay/s14.png","手游","乖离性百万亚瑟王");
INSERT INTO pay_game values(null,"img/pay/s15.png","手游","魔天记");
INSERT INTO pay_game values(null,"img/pay/s16.png","手游","主公莫慌");
#其它产品
INSERT INTO pay_game values(null,"img/pay/q1.png","其它产品","网易CC");
INSERT INTO pay_game values(null,"img/pay/q2.png","其它产品","VIP邮箱");

#游戏攻略
CREATE TABLE game_str(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	type VARCHAR(128),
	title VARCHAR(128),
	detail VARCHAR(1024)
);
#最新
INSERT INTO game_str values(null,"最新",
"11-27 【NGA】被遗忘的R卡，古笼火在椒图阵容横行的现版本斗鸡使用心得分享",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"最新",
"11-24 SR樱花妖：纷飞吧！落樱！",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"最新",
"11-22 【NGA】趁着滑头鬼活动没结束安利一波双陆生",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"最新",
"11-20 SSR奴良陆生：吾辈魑魅魍魉之主！",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"最新",
"11-17 SR追月神：清辉月华，云间追月",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");

#新手
INSERT INTO game_str values(null,"新手",
"08-28 萌新入坑指南(17.8.22最新版)",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"新手",
"08-02 【伞剑的守护】第十层攻略（仅供参考）",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"新手",
"07-14 资源的合理利用姿势 道具使用技巧",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"新手",
"07-07 阴阳师辅助式神排名，快来看你培养对了没",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"新手",
"05-30 秘闻！双奶过河童本十层",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");

#式神
INSERT INTO game_str values(null,"式神",
"11-27 【NGA】被遗忘的R卡，古笼火在椒图阵容横行的现版本斗鸡使用心得分享",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"式神",
"11-24 SR樱花妖：纷飞吧！落樱！",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"式神",
"11-22 【NGA】趁着滑头鬼活动没结束安利一波双陆生",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"式神",
"11-20 SSR奴良陆生：吾辈魑魅魍魉之主！",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"式神",
"11-17 SR追月神：清辉月华，云间追月",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");

#御魂
INSERT INTO game_str values(null,"御魂",
"10-17 阴阳师：极限输出雪童子，御魂怎么穿？",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"御魂",
"06-23 御魂立卷-闪现！稚魂篇",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"御魂",
"05-31 逆转的胜利！反击流式神阵容推荐！",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"御魂",
"05-29 青行灯，美腿姐姐的全面剖析！",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"御魂",
"05-24 小小黑反杀阵容+雨女十层攻略",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");

#斗技
INSERT INTO game_str values(null,"斗技",
"09-20 为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"斗技",
"09-19 为崽而战小课堂：兵俑雪女凤凰火，那个是神级控？",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"斗技",
"09-18 为崽而战小课堂：那些至今活跃在斗技场上的R卡",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"斗技",
"09-16 为崽而战小课堂：关于那些奶妈的故事！",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"斗技",
"08-15 安利一波犬神，3000分阿黄分斗花心得",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");

#玩法
INSERT INTO game_str values(null,"玩法",
"10-23 【爱萌】教你阴阳师如何克制反击流阵容",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"玩法",
"10-18 全图鉴时代的村服登顶斗鸡心得(五)",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"玩法",
"10-16 【爱萌】当周百鬼弈连胜强力阵容推荐，十二连胜不是梦",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"玩法",
"10-13 今天我就要打死你个小章鱼——石距车简单科普",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"玩法",
"09-29 阴阳师：百鬼弈周报 第七期 欢迎来到雪童子专场",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");

#帮助
INSERT INTO game_str values(null,"帮助",
"11-07 平安之旅第二期：狗粮卡的逆袭",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"帮助",
"11-07 平安之旅第二期：狗粮卡的逆袭",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"帮助",
"11-07 平安之旅第二期：狗粮卡的逆袭",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"帮助",
"11-07 平安之旅第二期：狗粮卡的逆袭",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
INSERT INTO game_str values(null,"帮助",
"11-07 平安之旅第二期：狗粮卡的逆袭",
"网易2016自研精品，唯美空灵的和风写意，经典的半即时回合制RPG，卡牌收集、养成，基于LBS地理技术的社交PK，上百种式神亟待觉醒");
