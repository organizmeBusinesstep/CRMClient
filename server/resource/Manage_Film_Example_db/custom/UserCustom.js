
const app = require('../../../app.js');
const db_Manage_Film_Example_db = require('../../../db/Manage_Film_Example_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB User
 * 
	{
		mail: {
			type: 'String'
		},
		name: {
			type: 'String'
		},
		password: {
			type: 'String', 
			required : true
		},
		roles: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		username: {
			type: 'String', 
			required : true
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		
	}
 * 
 * 
 * 
 * 
		Name: changePassword
		Description: Change password of user from admin
		Params: 
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS



/*
Name: changePassword
Description: Change password of user from admin
Params: 
*/
app['post'](properties.api + '/Users/:id/changePassword', function(req, res){
	res.send([]);
});
			
