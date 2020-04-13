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
    res.render('post.ejs', { title: post.title, post: post })
}

module.exports = {
    getHomePage,
    getBlogPost

}