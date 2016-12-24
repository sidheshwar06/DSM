var DB_SESSION = "form_registration";
var log = new Log();
var getDatabase = function() {
	var db = application.getDatabase(DB_SESSION);
	try{
		db = new Database("form_registration");
		application.put(DB_SESSION, db);
	} catch(e){
		log.error(e);
	}
	return db;
};
