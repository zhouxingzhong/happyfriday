export default (type='GET', url='', data={}, async=true) => {
	return new Promise((resolve, reject) => { //定义一个promise
		type = type.toUpperCase();

		let requestObj;
		if (window.XMLHttpRequest) {
			requestObj = new XMLHttpRequest();
		} else {
			requestObj = new ActiveXObject;
		}
		
		//open(method, url, async, username, password)
		//async 参数指示请求使用应该异步地执行。如果这个参数是 false，请求是同步的
		//	后续对 send() 的调用将阻塞，直到响应完全接收
		// username 和 password 参数是可选的，为 url 所需的授权提供认证资格。如果指定了，它们会覆盖 url 自己指定的任何资格
		if (type == 'GET') {
			let dataStr = ''; //数据拼接字符串
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&';
			})
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
			requestObj.open(type, url, async);
			// 当action为get时候，浏览器用x-www-form-urlencoded的编码方式把form数据转换成一个字串
			// （name1=value1&name2=value2…），然后把这个字串append到url后面，用?分割，加载这个新的url
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			
			requestObj.send();
		}else if (type == 'POST') {
			requestObj.open(type, url, async);
			requestObj.setRequestHeader("Content-type", "application/json");
			requestObj.send(JSON.stringify(data));
		}else {
			reject('error type');
		}
		
		//当请求被发送到服务器时，我们需要执行一些基于响应的任务。
		//每当 readyState 改变时，就会触发 onreadystatechange 事件。
		requestObj.onreadystatechange = () => {
			// 0	UNSENT	代理被创建，但尚未调用 open() 方法。
			// 1	OPENED	open() 方法已经被调用。
			// 2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
			// 3	LOADING	下载中； responseText 属性已经包含部分数据。
			// 4	DONE	下载操作已完成。
			if (requestObj.readyState == 4) {
				// 100 Continue	101 Switching Protocols	200 OK	201 Created	202 Accepted
				if (requestObj.status == 200) {
					let obj = requestObj.response
					if (typeof obj !== 'object') {
						//我们使用 JSON.parse() 方法处理以上数据，将其转换为 JavaScript 对象
						obj = JSON.parse(obj);
					}
					//pending: 初始状态，成功或失败状态。	fulfilled: 意味着操作成功完成。 rejected: 意味着操作失败。
					// 当我们在excutor函数中调用resolve方法时，Promise的状态就变成fulfilled，即操作成功状态
					resolve(obj);
				}else {
					// 调用reject方法后，Promise状态变为rejected
					reject(requestObj);
				}
			}
		}
	})
}