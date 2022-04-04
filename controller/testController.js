var persons = [];
const testGet = function(req,res){
    const value = {title: 'HomePage',nome:"dario", email : 'dariodimeo@gmail.com'};
    res.render('index',value);
};
const testPost = function(req,res){
    var person = {name:req.body.name, email:req.body.email}
    persons.push(person);
    console.log(persons);
    res.send(`Nome = ${person.name}, email = ${person.email}`);
};
module.exports = {
    testGet,
    testPost
};