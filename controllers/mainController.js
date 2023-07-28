module.exports ={
index : (req, res) => res.render('index', { title: 'Express'}),
about : (req, res) => res.render('about', { title: 'Express'})
    
}