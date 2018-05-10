/***********************双向链表*************************/
function DoubleLinkedList(){
	//节点
	var Node=function(element){
		this.element=element;
		this.next=null;
		this.prev=null;//新增的
	}
	//初始化链表length、head、tail
	var head=null;//初始化head=null
	var tail=null;//初始化tail=null
	this.length=0;//初始化链表长度为0
	/*********相关的方法***********/
	////在任意位置插入新元素////
	this.insert=function(position,element){
		//检查越界值
		if(position>=0&&position<=this.length){
			var node=new Node(element);
			var current=head;
			var previous;
			var index=0;
			if(position==0){//在第一个位置(0)添加
				if(!head){//head=null
					head=node;//新增的node
					tail=node;
				}else{//当前的head!=null,则current(head)后移一位，head变为新加入的node
					node.next=current;
					current.prev=node;//新增的node
					head=node;
				}
			}else if(position==this.length){//在末尾添加
				current=tail;
				current.next=node;
				node.prev=current;
				tail=node;
			}else{//除头和尾之外的其它位置
				while(index++<position){
					previous=current;
					current=current.next;
				}
				//node插入后更新前后的指针
				node.next=current;
				previous.next=node;
				current.prev=node;
				node.prev=previous;
			}
			node.display=1;//缓冲池中新添的对象display赋值为1
			this.length++;//更新链表的长度
			return true;
		}else{
			return false;
		}
	}
	
	////从任意位置移除元素////
	this.removeAt=function(position){
		//检查越界值
		if(position>=0&&position<this.length){
			var current=head;
			var previous;
			var index=0;
			if(position==0){//移除第一项
				head=current.next;//更新head
				//如果链表只有一项，更新tail
				if(this.length==1){
					tail=null;//此时链表长度为0,head=null,tail=null
				}else{
					head.prev=null;
				}
			}else if(position==this.length-1){//移除最后一项
				current=tail;
				tail=current.prev;
				tail.next=null;
			}else{//移除头部和尾部之间的任意项
				while(index++<position){
					previous=current;
					current=current.next;
				}
				//将previous与current的下一项连接起来跳过current
				previous.next=current.next;
				current.next.prev=previous;
			}
			this.length--;
			return current.element;//返回移除的元素
		}else{
			return null;
		}
	}
	////查询链表中元素的位置////
	this.indexOf=function(element){
		var current=head;
		var index=0;//初始化下标为0
		while(current){
			if(element==current.element){
				return index;
			}
			index++;
			current=current.next;
		}
		return -1;
	}
	////移除指定的元素////
	this.remove=function(element){
		var index=this.indexOf(element);//获取元素位置
		return this.removeAt(index);//移除
	}
	////将LinkedList对象转为字符串进行输出////
	this.toString=function(){
		var current=head;
		var string='';
		while(current){
			if(typeof(current.element)=='object'){//适用于对象{},索引数组[]
				string+=JSON.stringify(current.element)+(current.next?'\n':'');
			}else{//适用于数字，字符串
				string+=current.element+(current.next?'\n':'');
			}
			
			current=current.next;
		}
		return string+'\n'+'长度:'+this.length;
	}
	////遍历缓冲池查找出与将要加载的对象数组对应的element////
	this.search=function(element){
		var current=head;
		while(current){
			if(element==current.element){
				return;
			}
			current=current.next;
		}
	}
	/////传入数组WillLoadIdArr,遍历缓冲池,找出存在的对象,则将该对象移到头部////
	this.cyclePool=function(WillLoadIdArr){
		var current=head;
		while(current){
			if(WillLoadIdArr.length>0){
				for(var i=0;i<WillLoadIdArr.length;i++){
					if(WillLoadIdArr[i]==current.element){
						//找到后先将element移除再放到头部
						this.remove(current.element);
						this.insert(0,current.element);
						//将WillLoadIdArr中匹配到的element删除,减少循环次数
						WillLoadIdArr.splice(i,1);
						break;//跳出当前for循环
					}			
				}	
			}
			//将current赋值为current.next,继续匹配下一个
			current=current.next;
		}
		
	}
}