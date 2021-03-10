module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao : {}, dadosForm: {}});
};

module.exports.cadastrar = function(application, req, res){
    var dadosForm = req.body;

    req.assert('nome', 'Nome deve ser preechido').notEmpty();
    req.assert('usuario', 'O usuário deve ser preechido').notEmpty();
    req.assert('senha', 'Digite uma Senha').notEmpty();
    req.assert('casa', 'Selecione a casa na qual deseja pertencer').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro', { validacao: erros, dadosForm : dadosForm });
        return;
    } else {
        res.send('Vamos começar a partida.')
    }
}