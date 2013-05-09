
/*
 * GET home page.
 */

var calculation = function(n){
    return (n != 1) ? n * calculation(n-1) : 1;
};

exports.index = function(req, res){
   res.render('index', {title: calculation(10).toString()});
}