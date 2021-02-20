const DaoHandlerJS= require('../db/daohandlerjs');

class UsuariosDAO extends DaoHandlerJS{
    constructor(){
        super("users");
    }

    getUsuarios(callback){
        this.exec_query('select * from users',null, (err, row, fields) => {
            callback(err, row, fields);
        });
    }

    getNameUser(id_user,callback){
        this.exec_query('SELECT users.name, users.email, users.id_user  FROM users WHERE users.id_user=?',[id_user], (err, row, fields) => {
            callback(err, row, fields);
        });
    }


    getEmail(user,callback){
        this.exec_query('SELECT id_user,user, email FROM users WHERE user = ?',[user], (err, row, fields) => {
            callback(err, row, fields);
        });
    }

    stats(callback){
        this.exec_query('select COUNT(*) from users',null,(err,row,fields)=>{
            callback((err,row,fields));
        })
    }
}

module.exports=UsuariosDAO;