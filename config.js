var CONFIG = (function () {
	var DataManager = require("./libs/dataManager/DataManager");
	var _MODELPATH = './models';
	var _SERVER_DATA = 'MongoDb';
	var _DEFAULTPORT = 80;
	var _PORT = _DEFAULTPORT;
	var _BASEPATH = 'http://gec-armitage1989.c9.io/'
	var _GOOGLE_SERVER_API_KEY = '';
	var _ANDROID_SDK_SYSTEM_PATH = '';
	var _IOS_SDK_SYSTEM_PATH = '';

	//db settings old
	var dbusername  = '*';
	var dbpassword = '*';
	var dbname = '*';
	var dbport = 51750;
	var dbhost = '@ds051750.mongolab.com';
		
	var DB = {
		Init : function(){
	        DataManager.setDatabase(dbname);
	        DataManager.setUsername(dbusername);
	        DataManager.setPassword(dbpassword);
	        DataManager.setHostname(dbhost);
	        DataManager.setPort(dbport);
	        DataManager.Initialize(CONFIG.SERVER_DATA);
		}	
	}
	
	var Auth = {
		facebook : {
			id:'',
			secret : ''
		},

		twitter : {
			key:'',
			secret : ''
		}
	}

	var _setPort = function(port){
		if(_PORT == port ){
			return;
		}

		_PORT = port;
	}

	var _getPort = function(){
		return _PORT == _DEFAULTPORT ? _DEFAULTPORT : _PORT;
	}

	return {
		setPort 	: _setPort,
		getPort 	: _getPort,
		auth 		: Auth,
		BASEPATH 	: _BASEPATH,
		MODELPATH	: _MODELPATH,
		SERVER_DATA :_SERVER_DATA,
		DB			:DB,
		GOOGLE_SERVER_API_KEY : _GOOGLE_SERVER_API_KEY
	}

})();

module.exports = CONFIG;