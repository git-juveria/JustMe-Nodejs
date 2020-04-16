const data = require('../../data')

const postData = data.postData
const uniqueTags = data.uniqueTags
const categoryData = data.categoryData

const recentPostsAmount = 6;

const defaultObj = { categoryData: categoryData }
const rightSideBarData = {
    uniqueTags: uniqueTags,
    recentPosts: postData.slice(0, recentPostsAmount)
}
const getHomePage = function(req, res) {
    const data = {
        ...defaultObj,
        title: "Just Me",
        posts: postData,
        active: "index"
    }
    res.render('index.ejs', data)
}

const getBlogPost = function({ params }, res) {
    let post = postData.find((val) => val.id == params.postid)
    if (!post) { res.redirect('/404') }

    const data = {
        ...defaultObj,
        ...rightSideBarData,
        title: post.title,
        post: post
    }
    res.render('post.ejs', data)
}

const get404 = function(req, res) {
    const data = {
        ...defaultObj,
        ...rightSideBarData,
        title: '404- Page Not Found',
    }
    res.render('404.ejs', data)
}

const redirect404 = function(req, res) {
    res.redirect('/404')
}

const getAbout = function(req, res) {
    const data = {
        ...defaultObj,
        title: 'About Me',
        active: "about"
    }
    res.render('about', data)
}
const getContact = function(req, res) {
    const data = {
        ...defaultObj,
        title: 'Contact Me',
        active: "contact"
    }
    res.render('contact', data)
}

const getFilteredList = function({ query }, res) {
    let filteredPosts = postData.filter((val) => {
        return val.category == query.category || val.tags.includes(query.tag)
    })
    const data = {
        ...defaultObj,
        title: "Just Me-filtered",
        active: query.category,
        posts: filteredPosts
    }

    res.render('filter.ejs', data)
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