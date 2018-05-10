// 定义坦克的属性和方法

function Tank(x,y,direct){
	// 属性
	this.x = x;
	this.y = y;
	this.speed = 8;
	this.isLive = true;
	this.direct = direct;

	// 方法
	this.moveUp = function(){
		this.y -= this.speed;
		this.direct = 0;
	}
    this.moveRight = function(){
		this.x += this.speed;
		this.direct = 1;
	}
	this.moveDown = function(){
		this.y += this.speed;
		this.direct = 2;
	}
	this.moveLeft = function(){
		this.x -= this.speed;
		this.direct = 3;
	}

}

// 通过对象冒充继承tank(),然后区分hero 和 enemy
function Hero(x,y,direct){
	this.tank = Tank;
	 //Tank指向的是最大的Tank类
	this.tank(x,y,direct);
	this.isLive = true;
	this.blood = 9;
	
	this.shotEnemy = function(){
		// 创建子弹，子弹的位置应该和hero有关，并且和hero的方向有关
		// this.x就是当前hero的横坐标
		
		switch(this.direct){
			case 0:
				heroBullet = new Bullet(this.x+16,this.y,this.direct,4);
				
				break;
			case 1:
				heroBullet = new Bullet(this.x+32,this.y+16,this.direct,4);
				break;
			case 2:
				heroBullet = new Bullet(this.x+16,this.y+32,this.direct,4);
				break;
			case 3:
				heroBullet = new Bullet(this.x,this.y+16,this.direct,4);
				break;

		}
		// 把这个子弹对象放入数组中---> push函数
		heroBullets.push(heroBullet);

		// 调用我们的子弹run，50
		// 下面的启动方式，每个子弹的定时器都是独立的
		// 如果按原来的方法，则所有的子弹共享一个定时器

		var timer = window.setInterval("heroBullets["+(heroBullets.length-1)+"].run()",50);
		// 把这个timer赋给这个子弹（js对象是引用传递）
		heroBullets[heroBullets.length-1].timer = timer;
	}

}

// 定义一个敌人的坦克类
function EnemyTank(x,y,direct){
	this.tank = Tank;

	this.count = 0;
	this.tank(x,y,direct);
	this.speed = 3;

	this.run = function(){

		// 判断敌人当前的方向
		switch(this.direct){
			case 0:
				if(this.y>0){
					this.y -= this.speed;
				}
				break;
			case 1:
				if(this.x<968){
					this.x += this.speed;
				}
				break;
			case 2:
				if(this.y<768){
					this.y += this.speed;
				}
				break;
			case 3:
				if(this.x>0){
					this.x -= this.speed;
				}
				break;

		}

		// 改变方向，走三十次再改变方向
		if(this.count>15){
			this.direct = Math.round(Math.random()*3);   //round() 方法可把一个数字舍入为最接近的整数
			this.count = 0;
		}
		this.count++;
	}

	this.shotHero = function(){
		// 创建子弹，子弹的位置应该和hero有关，并且和hero的方向有关
		// this.x就是当前hero的横坐标
		
		switch(this.direct){
			case 0:
				enemyBullet = new Bullet(this.x+16,this.y,this.direct,4);
				
				break;
			case 1:
				enemyBullet = new Bullet(this.x+32,this.y+16,this.direct,4);
				break;
			case 2:
				enemyBullet = new Bullet(this.x+16,this.y+32,this.direct,4);
				break;
			case 3:
				enemyBullet = new Bullet(this.x,this.y+16,this.direct,4);
				break;

		}
		// 把这个子弹对象放入数组中---> push函数
		enemyBullets.push(enemyBullet);

		// 调用我们的子弹run，50
		// 下面的启动方式，每个子弹的定时器都是独立的
		// 如果按原来的方法，则所有的子弹共享一个定时器

		var timer = window.setInterval("enemyBullets["+(enemyBullets.length-1)+"].run()",50);
		// 把这个timer赋给这个子弹（js对象是引用传递）
		enemyBullets[enemyBullets.length-1].timer = timer;
	}

}



// 画坦克
function drawHeroTank(tank){
	
	//判断坦克是否isLive
	if(tank.isLive) {
		switch(tank.direct){
			case 0:
				var img1 = new Image();
				img1.src = "tankAll.gif";
				img1.onload = function(){
					btn.drawImage(img1,0,0,32,32,tank.x,tank.y,32,32);
				}

				break;
			case 1:
				var img2 = new Image();
				img2.src = "tankAll.gif";
				img2.onload = function(){
					btn.drawImage(img2,96,0,32,32,tank.x,tank.y,32,32);
				}
			
				break;
			case 2:
				var img3 = new Image();
				img3.src = "tankAll.gif";
				img3.onload = function(){
					btn.drawImage(img3,32,0,32,32,tank.x,tank.y,32,32);
				}
				break;
			case 3:
				var img4 = new Image();
				img4.src = "tankAll.gif";
				img4.onload = function(){
					btn.drawImage(img4,64,0,32,32,tank.x,tank.y,32,32);
				}
				break;

		}
	}
}

// 画敌人的坦克
function drawEnemyTank(tank){
	if(tank.isLive) {
		switch(tank.direct){
			case 0:
				var img1 = new Image();
				img1.src = "tankAll.gif";
				img1.onload = function(){
					btn.drawImage(img1,128,0,32,32,tank.x,tank.y,32,32);
				}
				break;
			case 1:
				var img2 = new Image();
				img2.src = "tankAll.gif";
				img2.onload = function(){
					btn.drawImage(img2,224,0,32,32,tank.x,tank.y,32,32);
				}
				break;
			case 2:
				var img3 = new Image();
				img3.src = "tankAll.gif";
				img3.onload = function(){
					btn.drawImage(img3,160,0,32,32,tank.x,tank.y,32,32);
				}
				break;
			case 3:
				var img4 = new Image();
				img4.src = "tankAll.gif";
				img4.onload = function(){
					btn.drawImage(img4,192,0,32,32,tank.x,tank.y,32,32);
				}
				break;

		}
	}
}

// 定义子弹的属性和方法
function Bullet(x,y,direct,speed){
	this.x = x;
	this.y = y;
	this.direct = direct;
	this.speed = 5;
	this.timer = null;
	this.isLive = true;

	// 运动轨迹
	this.run = function(){

		// 显示子弹的坐标，我们先判断子弹是否已经到边界

		if(this.x <= 0||this.x >= 1000||this.y <= 0||this.y >= 800){
			// 子弹停止
			window.clearInterval(this.timer);

			this.isLive = false;
		}else{
			// 在画布内再去修改坐标
			switch(this.direct){
				case 0:
					this.y -= this.speed;
					break;
				case 1:
					this.x += this.speed;
					break;
				case 2:
					this.y += this.speed;
					break;
				case 3:
					this.x -= this.speed;
					break;

			}
		}
		document.getElementById('aa').innerText = "子弹x="+this.x+"子弹y="+this.y;
	}

}

// 画子弹
function drawHeroBullet(){

	// 现在要画出所有的hero子弹
	for(var i = 0;i<heroBullets.length;i++){
		var heroBullet = heroBullets[i];
	

		// 这里我们加入了一段话，但是要知道在这里加，是需要对整个程序有把握
		if(heroBullet != null&&heroBullet.isLive){
			
			btn.fillStyle = "red";
			btn.fillRect(heroBullet.x,heroBullet.y,2,2);
		}
	}

	// 现在画所有的enemy的子弹
	for(var i = 0;i<enemyBullets.length;i++){
		var enemyBullet = enemyBullets[i];
	

		// 这里我们加入了一段话，但是要知道在这里加，是需要对整个程序有把握
		if(enemyBullet != null&&enemyBullet.isLive){
			
			btn.fillStyle = "red";
			btn.fillRect(enemyBullet.x,enemyBullet.y,2,2);
		}
	}

}

// 判断是否中弹
function isHitHeroBullet(){
	for(var i = 0;i < heroBullets.length;i++){

		//取出一颗子弹
		var heroBullet = heroBullets[i];
		if(heroBullet.isLive){
			for(var j = 0;j<enemyTanks.length;j++){
				var enemyTank = enemyTanks[j];    //得到每个敌方坦克
				if(enemyTank.isLive){
					

		// 			// 子弹击中敌人的条件是什么
		// 			// 看看这个子弹是否进入敌人坦克的矩形
						var aaa = heroBullet.x>=enemyTank.x&&heroBullet.x<=enemyTank.x+32
						&&heroBullet.y>=enemyTank.y&&heroBullet.y<=enemyTank.y+32;
						// console.log(aaa);
					if(aaa){
		// 				// 子弹的位置在enemyTank的矩形内
		// 			    //  把坦克isLive设为false，表示死亡
					    enemyTank.isLive = false;

					    heroBullet.isLive = false;

					    var bomb = new Bomb(enemyTank.x,enemyTank.y);

					    // 然后把该炸弹放入到bombs数组中
					    bombs.push(bomb);
					 }
				}
			}
		}
	}

	for(var i = 0;i < enemyBullets.length;i++){

		//取出一颗子弹
		var enemyBullet = enemyBullets[i];
		if(enemyBullet.isLive){
			
			    //得到hero坦克

			    var heroTank = hero;
				if(heroTank.isLive){
					

		// 			// 子弹击中敌人的条件是什么
		// 			// 看看这个子弹是否进入敌人坦克的矩形
						var bbb = enemyBullet.x>=heroTank.x&&enemyBullet.x<=heroTank.x+32
						&&enemyBullet.y>=heroTank.y&&enemyBullet.y<=heroTank.y+32;
						// console.log(aaa);
					if(bbb){
		// 				// 子弹的位置在enemyTank的矩形内
		// 			    //  把坦克isLive设为false，表示死亡
					    heroTank.isLive = false;

					    enemyBullet.isLive = false;

					    var bomb = new Bomb(heroTank.x,heroTank.y);

					    // 然后把该炸弹放入到bombs数组中
					    bombs.push(bomb);
					 }
				}
			}
		}
	}
	

// // 定义一个炸弹类
function Bomb(x,y){
	this.x = x;
	this.y = y;
	this.isLive = true;  //炸弹是活的，默认是活的

	// 炸弹有一个生命值
	this.blood = 9;
	// 减少生命值
	this.bloodDown = function(){
		if(this.blood>0){
			this.blood--;
		}else{
			// 说明炸弹死亡
			this.isLive = false;
		}
	}
}

// // 画中弹后enemy爆炸的图像
function drawEnemyBomb(){

	for(var i = 0;i<bombs.length;i++){

		// 取出一个炸弹
		var bomb = bombs[i];
		if(bomb.isLive){
			var x = bomb.x;
			var y = bomb.y;

			// 根据当前的生命值画出不同的炸弹
			if(bomb.blood>6){    //显示最大的炸弹图
				var img1 = new Image();
				img1.src = "tankAll.gif";
				
				img1.onload = function(){
					btn.drawImage(img1,320,0,32,32,x,y,32,32);
			}

			}else if(bomb.blood>3){
				var img2 = new Image();
				img2.src = "tankAll.gif";
				
				img2.onload = function(){
					btn.drawImage(img2,352,0,32,32,x,y,32,32);
				}
			}else{
				var img3 = new Image();
				img3.src = "tankAll.gif";
				
				img3.onload = function(){
					btn.drawImage(img3,384,0,32,32,x,y,32,32);
			}
		}

		bomb.bloodDown();
		if(bomb.blood<=0){
			// 把炸弹从数组里去掉
			bombs.splice(i,1);
		}
	}
}}
