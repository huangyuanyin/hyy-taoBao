window.addEventListener('load',function() {
	//谁发生 就获取谁。 这里是大盒子发生消失事件。 所以不需要获取x盒子了。
	var phonetb = document.getElementById('phonetb');
	//怎么发生  x盒子添加一个点击事件 click
	x.addEventListener('click', function() {
		//发生了什么  phonetb盒子消失了
		phonetb.style.display = 'none';
	});
})

//定位 中国大陆
//获取元素
	var cdl_li01 = document.getElementById('cdl_li01');
	var areasBox = document.getElementById('areasBox');
	var areas = document.getElementById('areas');
	var area_change = document.getElementById('area_change');
	//注册鼠标经过事件
	//这里需要用冒泡 所以用mouseover mouseout
	cdl_li01.addEventListener('mouseover', function() {
		this.style.backgroundColor = '#fff';
		areasBox.style.display = 'block';
		//点击了全球 li的内容变成全球 
		for(var i = 0; i < areas.children.length; i++) {
			areas.children[i].addEventListener('click', function() {
				area_change.innerHTML = this.innerHTML;
				areasBox.style.display = 'none';
			});
		}
	});
	cdl_li01.addEventListener('mouseout', function() {
		this.style.backgroundColor = '#f5f5f5';
		areasBox.style.display = 'none';
	});
	//我的淘宝
	//获取元素
	var rig_chdalu_li01 = document.getElementById('rig_chdalu_li01');
	var mytbBox = document.getElementById('mytbBox');
	//给li注册事件 
	//需要冒泡 鼠标经过 mouseover 鼠标离开 mouseout
	rig_chdalu_li01.addEventListener('mouseover', function() {
		this.style.backgroundColor = '#fff';
		mytbBox.style.display = 'block';
	});
	rig_chdalu_li01.addEventListener('mouseout', function() {
		this.style.backgroundColor = '#f5f5f5';
		mytbBox.style.display = 'none';
	});


	//宝贝 天猫 店铺 搜索栏点击变化
	//获取元素
	var words_bb = document.getElementById('words_bb');
	var words_tm = document.getElementById('words_tm');
	var words_dp = document.getElementById('words_dp');
	var a = document.getElementById('a');
	var rleft_searchbar = document.getElementById('rleft_searchbar');
	var words_ul01 = document.getElementById('words_ul01');
	words_tm.addEventListener('click', function() {
		for(var i = 0; i < words_ul01.children.length; i++) {
			words_ul01.children[i].style.backgroundColor = '#fff';
			words_ul01.children[i].style.color = 'red';
			words_ul01.children[i].style.fontWeight = 'normal';
			words_ul01.children[i].style.borderRadius = 0;
		}
		a.style.display = 'none';
		rleft_searchbar.style.display = 'none';
		/*words_bb.style.backgroundColor = '#fff';
		words_bb.style.color = 'red';
		words_bb.style.fontWeight = 'normal';*/
		this.style.backgroundColor = '#FF6F00';
		this.style.color = '#fff';
		this.style.fontWeight = '700';
		this.style.borderRadius = '4px 4px 0 0';
		/*words_dp.style.backgroundColor = '#FFF';
		words_dp.style.color = 'red';
		words_dp.style.fontWeight = 'normal';
		words_dp.style.borderRadius = 0;*/
	});
	words_dp.addEventListener('click', function() {
		a.style.display = 'block';
		rleft_searchbar.style.display = 'none';
		words_bb.style.backgroundColor = '#fff';
		words_bb.style.color = 'red';
		words_bb.style.fontWeight = 'normal';
		words_tm.style.backgroundColor = '#FFF';
		words_tm.style.color = 'red';
		words_tm.style.fontWeight = 'normal';
		words_tm.style.borderRadius = 0;
		this.style.backgroundColor = '#FF6F00';
		this.style.color = '#fff';
		this.style.fontWeight = '700';
		this.style.borderRadius = '4px 4px 0 0';
		
	});
	words_bb.addEventListener('click', function() {
		a.style.display = 'block';
		rleft_searchbar.style.display = 'block';
		this.style.backgroundColor = '#FF6F00';
		this.style.color = '#fff';
		this.style.fontWeight = '700';
		this.style.borderRadius = '4px 4px 0 0';
		words_tm.style.backgroundColor = '#FFF';
		words_tm.style.color = 'red';
		words_tm.style.fontWeight = 'normal';
		words_tm.style.borderRadius = 0;
		words_dp.style.backgroundColor = '#FFF';
		words_dp.style.color = 'red';
		words_dp.style.fontWeight = 'normal';
		words_dp.style.borderRadius = 0;
		
	});
	//轮播图1
	//1，左右按钮初始隐藏 鼠标进入focus1_brm 按钮显示 鼠标离开focus1_brm 按钮隐藏
	//获取元素
	var focus1_brm = document.getElementById('focus1_brm');
	var leftbtn = document.getElementById('leftbtn');
	var rigbtn = document.getElementById('rigbtn');
	//因为图片宽度是多个事件需要用到 所以要定义为全局变量
	var pic_width = focus1_brm.clientWidth;
	//注册事件
	focus1_brm.addEventListener('mouseenter', function() {
		leftbtn.style.display = 'block';
		rigbtn.style.display = 'block';
		//清除定时器 停止自动播放 
		clearInterval(timer);
		//停止播放后 清空定时器变量 提升运行效率
		timer = null;
	});
	focus1_brm.addEventListener('mouseleave', function() {
		leftbtn.style.display = 'none';
		rigbtn.style.display = 'none';
		//timer在11条里声明过了 这里就不需要再加var进行声明了
		timer = setInterval(function() {
			rigbtn.click();
		}, 1500);
	});
	//6，创建动画函数animate 点击小圆点 图片会移动 
	//因为图片需要缓慢移动到目标位置 而不是瞬移 所以需要让动画函数带缓动效果
	function animate(obj, target, callback) {
		//obj是移动的对象 target是移动的目标位置 callback是回调函数
		clearInterval(obj.timer);
		//创建缓动函数 缓动的核心思想就是把移动到目标位置的距离分成若干小步
		//一定时间内走一小步，让这个距离在若干时间完成若干小步后走完
		function move() {
			//定义每一小步走的距离 把一次移动到目标位置的距离分为10份
			//每一份就是一个step
			var step = (target - obj.offsetLeft) / 10;
			//step可能不是整数 导致最终移动距离有误差 
			//所以要把每一步的step变成整数
			//如果step是正数 就取大于step的最小整数
			//如果step是负数 就取小于step的最大整数 用Math()的知识
			/*if(step > 0) {
				step = Math.ceil(step);//向上取整
			} else {
				step = Math.floor(step);//向下取整
			}*/
			//可以将上面的if else语句简化为三元运算符
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			//如果走到了目标位置 就清除定时器
			if(obj.offsetLeft == target) {
				clearInterval(obj.timer);
				//因为回调函数是定时器结束后再调用函数 
				//所以这里清除定时器后 需要判断一下是否有回调函数 有就调用 没有就不调用
				/*if(callback) {
					callback();
				}*/
				//上面的判断语句可以简化为
				callback&&callback();
			}
			//把每一小步移动的距离和offsetLeft之和，给obj的left值
			//注意，这里obj.style.left对应的是数值+像素单位，一定不要忘了+'px'
			obj.style.left = obj.offsetLeft + step + 'px';
		}
		//给obj创建专属的定时器 
		//用定时器实现一定时间走一小步的结果 这里是10毫秒移动一个step的距离
		//注意，专属定时器不需要用var了 
		obj.timer = setInterval(move, 10);
	}
	//2，动态添加小圆点 图片的数量就是小圆点的个数
	//获取元素
	var ul01 = document.getElementById('ul01');
	var ul02 = document.getElementById('ul02');
	//添加多个li 用for循环 
	for(var i = 0; i < ul01.children.length; i++) {
		//创建元素creLi
		var creLi = document.createElement('li');
		//3，创建自定义属性data-index 用来获取小圆点的索引号
		creLi.setAttribute('data-index', i); 
		//添加元素
		ul02.appendChild(creLi);
		//4,当前点击的小圆点 颜色发生变化 创建类urrent
		//因为图片默认开始显示第一张  所以先让第一个小圆点小时current类
		ul02.children[0].className = 'current';
		//5，给小圆点创建点击事件 点击小圆点 当前点击的小圆点变色
		//用排他思想 for循环
		//注册点击事件
		creLi.addEventListener('click', function() {
			//干掉所有人
			for(var i = 0; i < ul02.children.length; i++) {
				ul02.children[i].className = '';
			}
			//留下我自己
			this.className = 'current';
			//7，点击小圆点 图片跟着动 调用动画函数
			//分析 点击圆点1 图片向左移动0个图片的宽度focus1_brm.clientWidth
			//点击圆点2 图片向左移动1个图片的宽度 以此类推
			//图片移动的距离 就是 当前被点击圆点的索引号乘以图片的宽度
			
			//获取自定义属性 当前被点击的小圆点的索引号
			var index = this.getAttribute('data-index');
			num = index;
			circle = index;
			animate(ul01, -index*pic_width);
		});
	}
	//8，右侧按钮
	//8.1 点击右侧按钮 图片向左移动
	//点击1次 图片向左移动1个图片宽度 显示图片2
	//点击2次 向左移动2个图片宽度 显示图片3 以此类推
	//当显示到第3张图片即最后一张图片时  再点击右侧按钮 会显示空白
	//重点： 实现无缝链接，即当显示到最后一张图片时 再点击右侧按钮 会显示图片1
	//怎么做 在图片3后面克隆一张图片1
	//显示图片3时 再点击按钮 ul01继续向左移动 显示图片1
	//然后迅速跳转到跳转到图片1 让ul01.style.left归零
	//设置次数变量num
	var num = 0;
	//克隆图片1  先克隆 再添加 注意 克隆图片也是全局事件 不是局部的
	var liCopy = ul01.children[0].cloneNode(true)//深克隆
	ul01.appendChild(liCopy);//添加新的li后，注意取css里修改ul01的宽度
	//console.log(ul01.children.length); 元素个数变成了4
	//获取元素rigbtn
	var rigbtn = document.getElementById('rigbtn');
	//给按钮点击事件安装节流阀
	var flag = true; //左右按钮都要用 所以设置全局变量

	//注册点击事件
	rigbtn.addEventListener('click', function() {
		if(flag) {
			//初始状态 先把节流阀关了 让自动播放的图片播放完一张图片前 点击按钮无效
			flag = false;
			//先做个判断 
			//点击第2次的时候 显示图片3 再点击 就显示克隆的图片1 
			//这时候 让ul01位置归零 让num的值归零以便从头开始
			if(num == ul01.children.length - 1) {
				ul01.style.left = 0;
				num = 0;
			}
			//点击1次 移动距离就是1*pic_width
			//点击1次 让num自增1
			num++;
			//注意 这里如果先自增 再做判断
			//会出现一个bug 就是当再次显示图片1时 点击无效 重新点击才会显示图片2
			//因为点击第三次时 本来应该跳转到图片1的 结果num被归零了 再点击还是显示图片1
			//调用动画函数
				
			animate(ul01, -num*pic_width, function() {
				//function(){}是回调函数
				//动画结束一个动作后 即播放完该图片后 再回头打开节流阀 让下一次点击生效
				flag = true;
			});
			circle++;
			if(circle == ul02.children.length) {
				circle = 0;
			}
			//因为这段排他思想的小圆点代码重复使用 所以可以封装成一个函数进行调用
			/*for(var i = 0; i < ul02.children.length; i++) {
				ul02.children[i].className = '';
			}
			ul02.children[circle].className = 'current';*/
			cir();
		}
	});	

	function cir() {
		for(var i = 0; i < ul02.children.length; i++) {
			ul02.children[i].className = '';
		}
		ul02.children[circle].className = 'current';
	}
	//9，点击按钮 图片移动 小圆点跟着移动 点击小圆点 图片跟着移动 num次数也变化
	//让图片 小圆点 按钮次数 一起变化的核心 就是图片动 num变化 小圆点当前的current类发生变化
	//即 图片移动 当前小圆点变色 点击按钮 当前小圆点变色
	//当前小圆点变色 图片移动 按钮次数发生变化 num index 图片距离 一起变化 
	//但是index是局部变量  怎么让三者绑定呢
	//就要重新创建一个全局变量 代替index 作为小圆点当前的索引号 让三者绑定
	var circle = 0;
	//10，点击左侧按钮
	//和右侧按钮点击事件的代码基本相同  但是方向相反 需要修改一些数据
	//直接把右侧按钮点击事件的代码复制过来 然后修改数据
	//获取元素leftbtn
	var leftbtn = document.getElementById('leftbtn');
	//注册点击事件
	leftbtn.addEventListener('click', function() {
		//同理，给左侧按钮也加个节流阀
		if(flag) {
			flag = false;
			//先做个判断 
			//开始时 未点击 num为0
			if(num == 0) {
				num = ul01.children.length-1;
				ul01.style.left = -num*pic_width + 'px';
			}
			//点击左侧按钮时 num自减
			num--;
			
			animate(ul01, -num*pic_width, function() {
				flag = true;
			});
			circle--;
			if(circle < 0) {
				circle = ul02.children.length - 1;
			}
			//因为这段排他思想的小圆点代码重复使用 所以可以封装成一个函数进行调用
			/*for(var i = 0; i < ul02.children.length; i++) {
				ul02.children[i].className = '';
			}
			ul02.children[circle].className = 'current';*/
			cir();
		}
	});
	//11，图片自动播放 相当于每隔一定时间 用定时器调用点击右侧按钮的时间 
	var timer = setInterval(function() {
		rigbtn.click();
	}, 1500);
	//12，鼠标进入focus1_brm 停止自动播放 鼠标离开focus1_brm 继续自动播放
	//13，节流阀 控制图片播放的频率
	//当前 快速点击按钮 图片高速播放 timer定时器还没执行结束 就开始播放下一张图片了
	//用flag控制 flag为true 打开节流阀 启用定时器 播放图片
	//flag为false 关闭节流阀 关闭的定时器 点击按钮无效 停止播放图片
	//给按钮点击事件安装节流阀

	//头部head 公告 规则 论坛
	//公告 默认字体加粗 14px 底边有色
	//鼠标经过规则  规则字体加粗 14px 底边有色 公告 论坛 安全 公益 字体正常 12px 底边无色
	//鼠标经过论坛 论坛字体加粗 14px 底边有色  公告 规则 安全 公益 字体正常 12px 底边无色
	//以此类推
	//获取元素 
	var rb3h_ul = document.getElementById('rig_brm3_head_ul01');
	var rb3b = document.getElementById('rig_brm3_body');
	//以规则为例
	/*rb3h_ul.children[1].addEventListener('mouseover', function() {
		for(var i = 0; i < rb3h_ul.children.length; i++) {
			//干掉所有人
			rb3h_ul.children[i].style.borderBottom = '2px solid transparent';
			rb3h_ul.children[i].children[0].style.fontWeight = 'normal';
			rb3h_ul.children[i].children[0].style.fontSize = '12px';
		}
		this.style.borderBottom = '2px solid #FF4400';
		this.children[0].style.fontWeight = '700';
		this.children[0].style.fontSize = '14px';
	});*/
	//把1改成j 对数表经过事件进行遍历
	/*
	for(var j = 0; j < rb3h_ul.children.length; j++) {
		rb3h_ul.children[j].addEventListener('mouseover', function() {
		for(var i = 0; i < rb3h_ul.children.length; i++) {
			//干掉所有人
			rb3h_ul.children[i].style.borderBottom = '2px solid transparent';
			rb3h_ul.children[i].children[0].style.fontWeight = 'normal';
			rb3h_ul.children[i].children[0].style.fontSize = '12px';
		}
		//留下我自己
		this.style.borderBottom = '2px solid #FF4400';
		this.children[0].style.fontWeight = '700';
		this.children[0].style.fontSize = '14px';
		
		//干掉所有人 
		for(var m = 0; m < rb3b.children.length; m++) {
			rb3b.children[m].style.display = 'none';
		}
		//留下我自己 
		rb3b.children[j].style.display = 'block';
	});
	}
	*/
	//再以规则为例 鼠标经过规则 下面的第二个ul的内容显示出来 其他ul都隐藏
	//显示发生在鼠标经过事件的里面
	/*
	rb3h_ul.children[1].addEventListener('mouseover', function() {
		for(var i = 0; i < rb3h_ul.children.length; i++) {
			//干掉所有人
			rb3h_ul.children[i].style.borderBottom = '2px solid transparent';
			rb3h_ul.children[i].children[0].style.fontWeight = 'normal';
			rb3h_ul.children[i].children[0].style.fontSize = '12px';
		}
		//留下我自己
		this.style.borderBottom = '2px solid #FF4400';
		this.children[0].style.fontWeight = '700';
		this.children[0].style.fontSize = '14px';
		
		//干掉所有人 
		for(var m = 0; m < rb3b.children.length; m++) {
			rb3b.children[m].style.display = 'none';
		}
		//留下我自己 
		rb3b.children[1].style.display = 'block';
	});
	rb3h_ul.children[2].addEventListener('mouseover', function() {
		for(var i = 0; i < rb3h_ul.children.length; i++) {
			//干掉所有人
			rb3h_ul.children[i].style.borderBottom = '2px solid transparent';
			rb3h_ul.children[i].children[0].style.fontWeight = 'normal';
			rb3h_ul.children[i].children[0].style.fontSize = '12px';
		}
		//留下我自己
		this.style.borderBottom = '2px solid #FF4400';
		this.children[0].style.fontWeight = '700';
		this.children[0].style.fontSize = '14px';
		
		//干掉所有人 
		for(var m = 0; m < rb3b.children.length; m++) {
			rb3b.children[m].style.display = 'none';
		}
		//留下我自己 
		rb3b.children[2].style.display = 'block';
	});
	rb3h_ul.children[0].addEventListener('mouseover', function() {
		for(var i = 0; i < rb3h_ul.children.length; i++) {
			//干掉所有人
			rb3h_ul.children[i].style.borderBottom = '2px solid transparent';
			rb3h_ul.children[i].children[0].style.fontWeight = 'normal';
			rb3h_ul.children[i].children[0].style.fontSize = '12px';
		}
		//留下我自己
		this.style.borderBottom = '2px solid #FF4400';
		this.children[0].style.fontWeight = '700';
		this.children[0].style.fontSize = '14px';
		
		//干掉所有人 
		for(var m = 0; m < rb3b.children.length; m++) {
			rb3b.children[m].style.display = 'none';
		}
		//留下我自己 
		rb3b.children[0].style.display = 'block';
	});
	rb3h_ul.children[3].addEventListener('mouseover', function() {
		for(var i = 0; i < rb3h_ul.children.length; i++) {
			//干掉所有人
			rb3h_ul.children[i].style.borderBottom = '2px solid transparent';
			rb3h_ul.children[i].children[0].style.fontWeight = 'normal';
			rb3h_ul.children[i].children[0].style.fontSize = '12px';
		}
		//留下我自己
		this.style.borderBottom = '2px solid #FF4400';
		this.children[0].style.fontWeight = '700';
		this.children[0].style.fontSize = '14px';
		
		//干掉所有人 
		for(var m = 0; m < rb3b.children.length; m++) {
			rb3b.children[m].style.display = 'none';
		}
		//留下我自己 
		rb3b.children[3].style.display = 'block';
	});
	rb3h_ul.children[4].addEventListener('mouseover', function() {
		for(var i = 0; i < rb3h_ul.children.length; i++) {
			//干掉所有人
			rb3h_ul.children[i].style.borderBottom = '2px solid transparent';
			rb3h_ul.children[i].children[0].style.fontWeight = 'normal';
			rb3h_ul.children[i].children[0].style.fontSize = '12px';
		}
		//留下我自己
		this.style.borderBottom = '2px solid #FF4400';
		this.children[0].style.fontWeight = '700';
		this.children[0].style.fontSize = '14px';
		
		//干掉所有人 
		for(var m = 0; m < rb3b.children.length; m++) {
			rb3b.children[m].style.display = 'none';
		}
		//留下我自己 
		rb3b.children[4].style.display = 'block';
	});
	*/
/*
Uncaught TypeError: Cannot read property 'style' of undefined这个bug出现的原因：
因为 第一个for里面包含的是一个函数 function(),
addEventListener('mouseover', function() {})
而for里面的j是var声明的局部变量，不能进入function()函数里去循环执行
当j++后，j变成了5，不在for范围内了，成了块区域的变量 j=5就进入function里面执行
但是li的索引号最多是4，j=5进入后就会导致函数在执行时 从html页面找不到索引号
是5的li 。所以就会报错上面的bug。
bug的第一种解决方法：
把var 换成let就解决了
for(let j = 0; j < rb3h_ul.children.length; j++) {
	rb3h_ul.children[j].addEventListener('mouseover', function() {
		for(var i = 0; i < rb3h_ul.children.length; i++) {
			//干掉所有人
			rb3h_ul.children[i].style.borderBottom = '2px solid transparent';
			rb3h_ul.children[i].children[0].style.fontWeight = 'normal';
			rb3h_ul.children[i].children[0].style.fontSize = '12px';
			//干掉所有人
			rb3b.children[i].style.display = 'none';
		}
		//留下我自己
		this.style.borderBottom = '2px solid #FF4400';
		this.children[0].style.fontWeight = '700';
		this.children[0].style.fontSize = '14px';
		console.log(j);//输出01234
		//留下我自己 
		rb3b.children[j].style.display = 'block';
	});	
}	*/
//bug的第二种解决办法
for(var m = 0; m < rb3h_ul.children.length; m++) {
	(function(j) {
		rb3h_ul.children[j].addEventListener('mouseover', function() {
			for(var i = 0; i < rb3h_ul.children.length; i++) {
				//干掉所有人
				rb3h_ul.children[i].style.borderBottom = '2px solid transparent';
				rb3h_ul.children[i].children[0].style.fontWeight = 'normal';
				rb3h_ul.children[i].children[0].style.fontSize = '12px';
				//干掉所有人
				rb3b.children[i].style.display = 'none';
			}
			//留下我自己
			this.style.borderBottom = '2px solid #FF4400';
			this.children[0].style.fontWeight = '700';
			this.children[0].style.fontSize = '14px';
			
			//console.log(j);
			//留下我自己 
			rb3b.children[j].style.display = 'block';
		});	
	})(m)
}
//充话费 鼠标经过充话费盒子 显示下面的盒子
//获取元素 
var rig_brm4_ul = document.getElementById('rig_brm4_ul');//获取li的父元素ul
var rig_brm4_box1 = document.getElementById('rig_brm4_box1');//获取要显示的盒子
//注册鼠标经过事件 
rig_brm4_ul.children[0].addEventListener('mouseover', function() {
	rig_brm4_box1.style.display = 'block';
	/*this.style.borderColor = '#FF6C05';
	this.style.borderBottom = '1px solid transparent';*/
});
//点击× 盒子消失
var x2 = document.getElementById('x2');
x2.addEventListener('click', function() {
	rig_brm4_box1.style.display = 'none';
});
//充话费--输入手机号
//获取元素
var rb4b1c_02 = document.getElementById('rb4b1c_02');
var autoc = document.getElementById('autoc');
//输入框获得焦点 影像显示
rb4b1c_02.children[0].addEventListener('focus', function() {
	autoc.style.display = 'block';
	//console.log(autoc.innerHTML);为了检测是否有显示方面的bug
});
//输入时 把input的内容 给 自动显示框
rb4b1c_02.children[0].addEventListener('keyup', function() {
	//console.log(this.value);
	//手机号是11位数字 
	//首先要判断输入的是否为数字 不是数字 删除掉这个字符
	var n = this.value.length;
	if(isNaN(this.value)) {
		//console.log(1);
		//如果输入的不是整数 就删除输入的字符
		this.value = this.value.slice(0, n-1);
		autoc.innerHTML = this.value;
	} else {
		//console.log(0);
		//autoc.innerHTML = this.value;
		//判断输入的长度 如果达到11位数字了 就停止输入
		//停止输入就是只截取前面11位数字 
		//再简化一下 就是不管输入多少 只截取前面11位数字赋值给显示框
		
		//同时 因为autoc的内容显示格式是123-4567-7891
		//所以需要加个判断
		if(n < 3) {
			autoc.innerHTML = this.value;
		} else if(n == 3) { 
			autoc.innerHTML = this.value + '-';
		} else if(n>3 && n<7) {
			autoc.innerHTML = this.value.slice(0, 3) + '-' + this.value.slice(3);
		} else if(n == 7) {
			autoc.innerHTML = this.value.slice(0, 3) + '-' + this.value.slice(3, 7) + '-';
		} else if(n>7 && n<11) {
			autoc.innerHTML = this.value.slice(0, 3) + '-' + this.value.slice(3, 7) + '-' + this.value.slice(7, 11);
		}else {
			this.value = this.value.slice(0, 11);
			//意思是input输入框里只截图前面11个数字来显示 相当于只能输入11位数
			autoc.innerHTML = this.value.slice(0, 3) + '-' + this.value.slice(3, 7) + '-' + this.value.slice(7, 11);
			autoc.style.display = 'none';
		}
	}
	//autoc.innerHTML = this.value;
	//因为autoc的内容显示格式是123-4567-7891
	//所以需要加个判断
	
});
//失去焦点 显示框隐藏
rb4b1c_02.children[0].addEventListener('blur', function() {
	autoc.style.display = 'none';
});

//隐藏导航栏的宝贝搜索
var serchnav_ul = document.getElementById('serchnav_ul');
var left_bb = document.getElementById('left_bb');
left_bb.addEventListener('mouseenter', function() {
	serchnav_ul.children[0].style.borderRadius = '20px 0 0 0';
	serchnav_ul.children[1].style.display = 'block';
	serchnav_ul.children[2].style.display = 'block';
});
serchnav_ul.addEventListener('mouseleave', function() {
	serchnav_ul.children[0].style.borderRadius = '20px 0 0 20px';
	serchnav_ul.children[1].style.display = 'none';
	serchnav_ul.children[2].style.display = 'none';
});
left_bb.addEventListener('mouseleave', function() {
	serchnav_ul.children[0].style.borderRadius = '20px 0 0 20px';
	serchnav_ul.children[1].style.display = 'none';
	serchnav_ul.children[2].style.display = 'none';
});

//显示和隐藏导航栏
//当页面滚动到一定位置时 显示导航栏 当页面距离顶部小于一定距离时 导航栏消失
document.addEventListener('scroll', function() {
	// console.log(window.scrollY);
	if(window.scrollY >= 188) {
		nav.style.display = 'block';
	} else {
		nav.style.display = 'none';
	}
	if(window.scrollY >= 470) {
		sidebar.style.position = 'fixed';
		sidebar.style.top = '88px';
	} else {
		sidebar.style.position = 'absolute';
		sidebar.style.top = '550px';
	}
	/* console.log(window.scrollY);
	console.log(sidebar.offsetTop);
	console.log(sidebar.clientTop + '-------'); */
});
















