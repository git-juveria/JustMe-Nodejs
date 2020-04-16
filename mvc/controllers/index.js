const data = require('../../data')

const postData = data.postData
const uniqueTags = data.uniqueTags
const categoryData = data.categoryData

const recentPostsAmount = 6;

const getHomePage = function(req, res) {
    const templateData = {
        title: "Just Me",
        posts: postData
    }
    res.render('index.ejs', { title: "Just Me", posts: postData, active: "index" })
}

const getBlogPost = function({ params }, res) {
    let post = postData.find((val) => val.id == params.postid)
    if (!post) { res.redirect('/404') }
    res.render('post.ejs', { title: post.title, post: post, uniqueTags: uniqueTags, recentPosts: postData.slice(0, recentPostsAmount), categoryData: categoryData })
}

const get404 = function(req, res) {
    res.render('404.ejs', { title: '404- Page Not Found', uniqueTags: uniqueTags, recentPosts: postData.slice(0, recentPostsAmount), categoryData: categoryData })
}

const redirect404 = function(req, res) {
    res.redirect('/404')
}

const getAbout = function(req, res) {
    res.render('about', { title: 'About Me', active: "about", categoryData: categoryData })
}
const getContact = function(req, res) {
    res.render('contact', { title: 'Contact Me', active: "contact", categoryData: categoryData })
}

const getFilteredList = function({ query }, res) {
    let filteredPosts = postData.filter((val) => val.category == query.category)

    res.render('filter', { title: "Just Me-filtered", active: query.category, posts: filteredPosts, categoryData: categoryData })
}
module.exports = {
    getHomePage,
    getBlogPost,
    getAbout,
    getContact,
    getFilteredList,
    get404,
    redirect404

}