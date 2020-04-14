const data = require('../../data')

const postData = data.postData

const getHomePage = function(req, res) {
    const templateData = {
        title: "Just Me",
        posts: postData
    }
    res.render('index.ejs', { title: "Just Me", posts: postData })
}

const getBlogPost = function({ params }, res) {
    let post = postData.find((val) => val.id == params.postid)
    if (!post) { res.redirect('/404') }
    res.render('post.ejs', { title: post.title, post: post })
}

const get404 = function(req, res) {
    res.render('404.ejs', { title: '404- Page Not Found' })
}

const redirect404 = function(req, res) {
    res.redirect('/404')
}
module.exports = {
    getHomePage,
    getBlogPost,
    get404,
    redirect404

}