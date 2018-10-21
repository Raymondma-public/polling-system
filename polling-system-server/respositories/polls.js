
var fs = require('fs');
module.exports.getAll=()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('resources/poll.json', 'utf8', function(err, contents) {
            if(err){
                return reject(err);
            }
            console.log(contents);
            return resolve(contents);
                
            });
    });
};
    
