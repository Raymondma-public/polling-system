var pollDao=require('../respositories/polls');
module.exports.getAll= ()=>{
    return pollDao.getAll();
};
