//Metodos para CRUD
const controller = {}

//index 

controller.index = (req,res)=>{
    //requerimos la conexion, podemos obtener un error err o la la conexion conn
    req.getConnection((err ,conn) => {
        res.render('index');
    });
};
controller.pedidos_chef = (req,res)=>{
    //requerimos la conexion, podemos obtener un error err o la la conexion conn
    req.getConnection((err ,conn) => {
        res.render('pedidos_chef');
    });
};
controller.entregas_mesero = (req,res)=>{
    //requerimos la conexion, podemos obtener un error err o la la conexion conn
    req.getConnection((err ,conn) => {
        res.render('entregas_mesero');
    });
};

module.exports = controller;