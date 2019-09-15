# Github Page Not Found
## Check Jekyll Build Error Message
https://help.github.com/en/articles/viewing-jekyll-build-error-messages

## Trigger Rebuild
https://stackoverflow.com/questions/11577147/how-to-fix-http-404-on-github-pages
~~~
git commit --allow-empty -m "Trigger rebuild"
git push
~~~

# References:
* [Jekyll Official Documentation](https://jekyllrb.com/docs/)
* [Kramdown Quick Reference](https://kramdown.gettalong.org/quickref.html)
* [Advanced Use of SASS Maps](https://itnext.io/advanced-use-of-sass-maps-bd5a47ca0d1a)
* [Jekyll Collections 1](https://ben.balter.com/2015/02/20/jekyll-collections/)
* [Jekyll Collections 2](https://learn.cloudcannon.com/jekyll/introduction-to-jekyll-collections/)
* [Jekyll Collections 3](https://simpleit.rocks/ruby/jekyll/collections/understanding-how-collections-work/)

# TODO
* Documentation - SQL
* Improvement - styles for common HTML elements
* Improvement - styles for code highlighting (https://bnhr.xyz/2017/03/25/add-syntax-highlighting-to-your-jekyll-site-with-rouge.html)
* Improvement - BLOG Layout and styles
* Implementation - expand/collapse Documentation navbar
* Implementation - site footer
* Investigation - build pipeline (testing/verification, stylelint)
* Implementation - convention on documentation home page
* Investigation - search (the whole site and within documentation)
* Investigation - favicon
* Improvement - styles for other medias (responsive design)
* Improvement - README.md
* Investigation - the auto-generated style.css in assets/css
* Improvement - Minify JavaScript file

# CSS Properties Order
1. Position properties
   * float
   * position
   * top, bottom, left, write
   * z-index
2. Display
   * display
   * flex / table / list properties
3. Dimensions
   * box-sizing
   * margin
   * padding
   * border
   * width, min-width, max-width, height, min-height, max-height
4. Appearances (background, fonts, text)
   * background
   * color
   * font-family, font-size, font-weight
   * line-height
   * cursor
   * text-decoration
   * white-space
5. Content Display
   * overflow
   * visibility