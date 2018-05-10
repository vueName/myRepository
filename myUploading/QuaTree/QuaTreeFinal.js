	var tree=[]; //初始化空数组
	//递归函数
	var newobj=function(width,height,oriPoint,coorPoint,level,node,globe,id){
		//如果聚合点未定义
		if(level==undefined||node==undefined||globe==undefined||id==undefined){
			//console.log(100);
			var minx=Number(coorPoint[0].pos_x);
			var maxx=Number(coorPoint[0].pos_x);
			var miny=Number(coorPoint[0].pos_y);
			var maxy=Number(coorPoint[0].pos_y);
			var minz=Number(coorPoint[0].pos_z);
			var maxz=Number(coorPoint[0].pos_z);
			for(var b of coorPoint){
				minx=minx>Number(b.pos_x)?Number(b.pos_x):minx;
				maxx=maxx<Number(b.pos_x)?Number(b.pos_x):maxx;
				miny=miny>Number(b.pos_y)?Number(b.pos_y):miny;
				maxy=maxy<Number(b.pos_y)?Number(b.pos_y):maxy;
				minz=minz>Number(b.pos_z)?Number(b.pos_z):minz;
				maxz=maxz<Number(b.pos_z)?Number(b.pos_z):maxz;
			}
			//节点坐标
			var nodeX=Number(((maxx+minx)/2).toFixed(6));
			var nodeY=Number(((maxy+miny)/2).toFixed(6));
			var nodeZ=Number(((maxz+minz)/2).toFixed(6));
			//球心坐标
			var cx=Number(Number(oriPoint[0]).toFixed(6));
			var cy=Number(Number(oriPoint[1]).toFixed(6));
			var cz=nodeZ;
			//象限外包球心半径
			var radii=Number(((Math.sqrt(width*width+height*height))/2).toFixed(6));
			var s={
					'child':{'arr1':[],'arr2':[],'arr3':[],'arr4':[]},
					'level':0,
					'node':[nodeX,nodeY,nodeZ],
					'globe':[cx,cy,cz,radii],
					'id':'0'
					};
			tree.push({'level':0,'node':[nodeX,nodeY,nodeZ],'arr':[],'globe':[cx,cy,cz,radii],'id':'0'});
		}else{
			var s={
					'child':{'arr1':[],'arr2':[],'arr3':[],'arr4':[]},//四个象限(下一级)
					'level':level,//当前级别
					'node':node,//当前节点(聚合点)
					'globe':globe,//当前球心
					'id':id
				  }	
			//主函数执行时,s.child.arr1,s.child.arr2,s.child.arr3,s.child.arr4-->均被赋值为子s对象
			//s.child.arr1:{
			//	'child':{'arr1':[],'arr2':[],'arr3':[],'arr4':[]},//四个象限(下一级)
			//	'level':level||0,//当前级别
			//	'node':node//当前节点(聚合点)
			//}
			//tree数组存储的为不同level下的节点、叶子组成的对象
			tree.push({'level':level,'node':node,'arr':[],'globe':globe,'id':id});
			//level-->当前级别
			//center-->当前节点
			//arr-->叶子		
		};
		
		//中心点和层级
		//console.log(CenPoint);
		var x=Number(oriPoint[0]);//坐标轴中点x坐标
		var y=Number(oriPoint[1]);//坐标轴中点y坐标
		var zx=Number(oriPoint[0])-Number(width/2);//1象限X坐标
		var yx=Number(oriPoint[0])+Number(width/2);//0象限X坐标
		var sy=Number(oriPoint[1])+Number(height/2);//上方Y坐标
		var xy=Number(oriPoint[1])-Number(height/2);//下方Y坐标
		//console.log(x);
		if(coorPoint.length>4){
			//level+1、划分象限
			var sublevel=s.level+1;
			//console.log(typeof(sublevel));
			for(var a of coorPoint){
				if(Number(a.pos_x)>x&&Number(a.pos_x)<yx){//判断是否在y轴右侧
					if(Number(a.pos_y)>y&&Number(a.pos_y)<sy){//判断是否为0象限
						s.child.arr1.push(a);
					}else if(Number(a.pos_y)<y&&Number(a.pos_y)>xy){//判断是否为3象限
						s.child.arr4.push(a);
					}
				}
				if(Number(a.pos_x)<x&&Number(a.pos_x)>zx){//判断是否在y轴左侧
					if(Number(a.pos_y)>y&&Number(a.pos_y)<sy){//判断是否为1象限
						s.child.arr2.push(a);
					}else if(Number(a.pos_y)<y&&Number(a.pos_y)>xy){//判断是否为2象限
						s.child.arr3.push(a);
					}
				}
			}
			//判断第0象限的坐标数>4？
			if(s.child.arr1.length>4){
				//console.log(typeof(Number(s.arr1[0].pos_x)));
				//console.log(typeof(minx,maxx,miny,maxy));
				//获取聚合点[(((maxx+minx)/2)),(maxy+miny)/2]-->(最小外包矩形)
				var minx=Number(s.child.arr1[0].pos_x);
				var maxx=Number(s.child.arr1[0].pos_x);
				var miny=Number(s.child.arr1[0].pos_y);
				var maxy=Number(s.child.arr1[0].pos_y);
				var minz=Number(s.child.arr1[0].pos_z);
				var maxz=Number(s.child.arr1[0].pos_z);
				for(var b of s.child.arr1){
					minx=minx>Number(b.pos_x)?Number(b.pos_x):minx;
					maxx=maxx<Number(b.pos_x)?Number(b.pos_x):maxx;
					miny=miny>Number(b.pos_y)?Number(b.pos_y):miny;
					maxy=maxy<Number(b.pos_y)?Number(b.pos_y):maxy;
					minz=minz>Number(b.pos_z)?Number(b.pos_z):minz;
					maxz=maxz<Number(b.pos_z)?Number(b.pos_z):maxz;
				
				}
				//中心点
				var oriPointX=Number(((yx+x)/2).toFixed(6));
				var oriPointY=Number(((sy+y)/2).toFixed(6));
				//节点
				var nodeX=Number(((maxx+minx)/2).toFixed(6));
				var nodeY=Number(((maxy+miny)/2).toFixed(6));
				var nodeZ=Number(((maxz+minz)/2).toFixed(6));
				//球心
				var cx=oriPointX;
				var cy=oriPointY;
				var cz=nodeZ;
				//象限外包球心半径
				var radii=Number(((Math.sqrt(width*width/4+height*height/4))/2).toFixed(6));
				var Identify=s.id+'-0';
				//s.child.arr1-->返回的新的s对象
				//s.child.arr1数组长度大于4则将该数组赋值为s对象({child:[],level:'',node:''})
				s.child.arr1=newobj(width/2,height/2,[oriPointX,oriPointY],s.child.arr1,sublevel,[nodeX,nodeY,nodeZ],[cx,cy,cz,radii],Identify);
				
			//如果该区域无法继续划分	
			}else if(s.child.arr1.length>0){
				tree.push({'level':sublevel,'node':[],'arr':[],'globe':[]});
				var cx=Number(((yx+x)/2).toFixed(6));
				var cy=Number(((sy+y)/2).toFixed(6));
				var cz;
				var minz=Number(s.child.arr1[0].pos_z);
				var maxz=Number(s.child.arr1[0].pos_z);
				//象限外包球心半径
				var radii=Number(((Math.sqrt(width*width/4+height*height/4))/2).toFixed(6));
				var Identify=s.id+'-0';
				//获取叶子坐标
				for(var a of s.child.arr1){
					minz=minz>Number(a.pos_z)?Number(a.pos_z):minz;
					maxz=maxz<Number(a.pos_z)?Number(a.pos_z):maxz;
					tree[tree.length-1].arr.push(a);
				}
				cz=Number(((maxz+minz)/2).toFixed(6));
				tree[tree.length-1].globe=[cx,cy,cz,radii];
				tree[tree.length-1].id=Identify;
			}
			//判断第1象限的坐标数>4？
			if(s.child.arr2.length>4){
				//console.log(s.arr2);
				var minx=Number(s.child.arr2[0].pos_x);
				var maxx=Number(s.child.arr2[0].pos_x);
				var miny=Number(s.child.arr2[0].pos_y);
				var maxy=Number(s.child.arr2[0].pos_y);
				var minz=Number(s.child.arr2[0].pos_z);
				var maxz=Number(s.child.arr2[0].pos_z);
				for(var b of s.child.arr2){
					minx=minx>Number(b.pos_x)?Number(b.pos_x):minx;
					maxx=maxx<Number(b.pos_x)?Number(b.pos_x):maxx;
					miny=miny>Number(b.pos_y)?Number(b.pos_y):miny;
					maxy=maxy<Number(b.pos_y)?Number(b.pos_y):maxy;
					minz=minz>Number(b.pos_z)?Number(b.pos_z):minz;
					maxz=maxz<Number(b.pos_z)?Number(b.pos_z):maxz;
				
				}
				//中心点
				var oriPointX=Number(((zx+x)/2).toFixed(6));
				var oriPointY=Number(((sy+y)/2).toFixed(6));
				//节点
				var nodeX=Number(((maxx+minx)/2).toFixed(6));
				var nodeY=Number(((maxy+miny)/2).toFixed(6));
				var nodeZ=Number(((maxz+minz)/2).toFixed(6));
				//球心
				var cx=oriPointX;
				var cy=oriPointY;
				var cz=nodeZ;
				//象限外包球心半径
				var radii=Number(((Math.sqrt(width*width/4+height*height/4))/2).toFixed(6));
				var Identify=s.id+'-1';
				s.child.arr2=newobj(width/2,height/2,[oriPointX,oriPointY],s.child.arr2,sublevel,[nodeX,nodeY,nodeZ],[cx,cy,cz,radii],Identify);
			}else if(s.child.arr2.length>0){
				tree.push({'level':sublevel,'node':[],'arr':[],'globe':[]});
				var cx=Number(((zx+x)/2).toFixed(6));
				var cy=Number(((sy+y)/2).toFixed(6));
				var cz;
				var minz=Number(s.child.arr2[0].pos_z);
				var maxz=Number(s.child.arr2[0].pos_z);
				//象限外包球心半径
				var radii=Number(((Math.sqrt(width*width/4+height*height/4))/2).toFixed(6));
				var Identify=s.id+'-1';
				for(var a of s.child.arr2){
					minz=minz>Number(a.pos_z)?Number(a.pos_z):minz;
					maxz=maxz<Number(a.pos_z)?Number(a.pos_z):maxz;
					tree[tree.length-1].arr.push(a);
				}
				cz=Number(((maxz+minz)/2).toFixed(6));
				tree[tree.length-1].globe=[cx,cy,cz,radii];
				tree[tree.length-1].id=Identify;
			}
			//判断第2象限的坐标数>4？
			if(s.child.arr3.length>4){
				//console.log(s.arr1,s.level);
				//console.log([(maxx-minx)/2,(maxy-miny)/2]);
				var minx=Number(s.child.arr3[0].pos_x);
				var maxx=Number(s.child.arr3[0].pos_x);
				var miny=Number(s.child.arr3[0].pos_y);
				var maxy=Number(s.child.arr3[0].pos_y);
				var minz=Number(s.child.arr3[0].pos_z);
				var maxz=Number(s.child.arr3[0].pos_z);
				for(var b of s.child.arr3){
					minx=minx>Number(b.pos_x)?Number(b.pos_x):minx;
					maxx=maxx<Number(b.pos_x)?Number(b.pos_x):maxx;
					miny=miny>Number(b.pos_y)?Number(b.pos_y):miny;
					maxy=maxy<Number(b.pos_y)?Number(b.pos_y):maxy;
					minz=minz>Number(b.pos_z)?Number(b.pos_z):minz;
					maxz=maxz<Number(b.pos_z)?Number(b.pos_z):maxz;
				}
				//中心点
				var oriPointX=Number(((zx+x)/2).toFixed(6));
				var oriPointY=Number(((xy+y)/2).toFixed(6));
				//节点
				var nodeX=Number(((maxx+minx)/2).toFixed(6));
				var nodeY=Number(((maxy+miny)/2).toFixed(6));
				var nodeZ=Number(((maxz+minz)/2).toFixed(6));
				//球心
				var cx=oriPointX;
				var cy=oriPointY;
				var cz=nodeZ;
				//象限外包球心半径
				var radii=Number(((Math.sqrt(width*width/4+height*height/4))/2).toFixed(6));
				var Identify=s.id+'-2';
				s.child.arr3=newobj(width/2,height/2,[oriPointX,oriPointY],s.child.arr3,sublevel,[nodeX,nodeY,nodeZ],[cx,cy,cz,radii],Identify);
				
			}else if(s.child.arr3.length>0){
				tree.push({'level':sublevel,'node':[],'arr':[],'globe':[]});
				var cx=Number(((zx+x)/2).toFixed(6));
				var cy=Number(((xy+y)/2).toFixed(6));
				var cz;
				var minz=Number(s.child.arr3[0].pos_z);
				var maxz=Number(s.child.arr3[0].pos_z);
				//象限外包球心半径
				var radii=Number(((Math.sqrt(width*width/4+height*height/4))/2).toFixed(6));
				var Identify=s.id+'-2';
				for(var a of s.child.arr3){
					minz=minz>Number(a.pos_z)?Number(a.pos_z):minz;
					maxz=maxz<Number(a.pos_z)?Number(a.pos_z):maxz;
					tree[tree.length-1].arr.push(a);
				}
				cz=Number(((maxz+minz)/2).toFixed(6));
				tree[tree.length-1].globe=[cx,cy,cz,radii];
				tree[tree.length-1].id=Identify;
			}
			//判断第3象限的坐标数>4？
			if(s.child.arr4.length>4){
				//console.log(s.arr1,s.level);
				var minx=Number(s.child.arr4[0].pos_x);
				var maxx=Number(s.child.arr4[0].pos_x);
				var miny=Number(s.child.arr4[0].pos_y);
				var maxy=Number(s.child.arr4[0].pos_y);
				var minz=Number(s.child.arr4[0].pos_z);
				var maxz=Number(s.child.arr4[0].pos_z);
				for(var b of s.child.arr4){
					minx=minx>Number(b.pos_x)?Number(b.pos_x):minx;
					maxx=maxx<Number(b.pos_x)?Number(b.pos_x):maxx;
					miny=miny>Number(b.pos_y)?Number(b.pos_y):miny;
					maxy=maxy<Number(b.pos_y)?Number(b.pos_y):maxy;
					minz=minz>Number(b.pos_z)?Number(b.pos_z):minz;
					maxz=maxz<Number(b.pos_z)?Number(b.pos_z):maxz;
				}
				//中心点
				var oriPointX=Number(((yx+x)/2).toFixed(6));
				var oriPointY=Number(((xy+y)/2).toFixed(6));
				//节点
				var nodeX=Number(((maxx+minx)/2).toFixed(6));
				var nodeY=Number(((maxy+miny)/2).toFixed(6));
				var nodeZ=Number(((maxz+minz)/2).toFixed(6));
				//球心
				var cx=oriPointX;
				var cy=oriPointY;
				var cz=nodeZ;
				//象限外包球心半径
				var radii=Number(((Math.sqrt(width*width/4+height*height/4))/2).toFixed(6));
				var Identify=s.id+'-3';
				s.child.arr4=newobj(width/2,height/2,[oriPointX,oriPointY],s.child.arr4,sublevel,[nodeX,nodeY,nodeZ],[cx,cy,cz,radii],Identify);
				
			}else if(s.child.arr4.length>0){
				tree.push({'level':sublevel,'node':[],'arr':[],'globe':[]});
				var cx=Number(((yx+x)/2).toFixed(6));
				var cy=Number(((xy+y)/2).toFixed(6));
				var cz;
				var minz=Number(s.child.arr4[0].pos_z);
				var maxz=Number(s.child.arr4[0].pos_z);
				//象限外包球心半径
				var radii=Number(((Math.sqrt(width*width/4+height*height/4))/2).toFixed(6));
				var Identify=s.id+'-3';
				for(var a of s.child.arr4){
					minz=minz>Number(a.pos_z)?Number(a.pos_z):minz;
					maxz=maxz<Number(a.pos_z)?Number(a.pos_z):maxz;
					tree[tree.length-1].arr.push(a);
				}
				cz=Number(((maxz+minz)/2).toFixed(6));
				tree[tree.length-1].globe=[cx,cy,cz,radii];
				tree[tree.length-1].id=Identify;
				
			}
		}
		
		return s;
		//return obj;
	}
	//定义获取中心点坐标的函数
	//初始化的矩形区域(还未划分象限)
	//var bound=[[-20,20],[-20,-20],[20,-20],[20,20]];
	//var oriPoint=[0,0];
	//ArrPoints数组中存的是坐标点(x,y)
	/*var ArrPoints=[
		[-10,-10],[-10,10],[10,10],[10,-10],
		[-15,-15],[-15,5],[5,5],[5,-5],
		[-6,8],[7,10],[7,3],[4,12],
		[10,-6],[9,-8],[7,-4],[-4,-12]
	];*/
	//console.log(newobj(40,40,[0,0],ArrPoints));
	//console.log(tree);
	
	
