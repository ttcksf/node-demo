const Blog = require('../models/blog');

const blogCreatePage = (req, res) => {
  res.render('create', { title: 'ブログ投稿' });
};

const createdBlogPost = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((data) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};

const blogIndex = (req, res) => {
  Blog.find()
    .then((data) => {
      res.render('index', {
        title: 'トップページ',
        blogs: data,
      });
    })
    .catch((err) => console.log(err));
};

// 404ページ追加
const blogAbout = (req, res) => {
  const blogId = req.params.id;
  Blog.findById(blogId)
    .then((data) => {
      res.render('about', { blog: data, title: 'ブログ詳細' });
    })
    .catch((err) =>
      res.status(404).render('404', {
        title: 'ページが見つかりませんでした',
      })
    );
};

const blogDelete = (req, res) => {
  const blogId = req.params.id;
  Blog.findByIdAndDelete(blogId)
    .then(() => {
      res.json({ redirect: '/' });
    })
    .catch((err) => console.log(err));
};
// 切り出した関数をエクスポートする
module.exports = {
  createdBlogPost,
  blogCreatePage,
  blogIndex,
  blogAbout,
  blogDelete,
};
