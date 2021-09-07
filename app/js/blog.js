import { controlClass } from "./blogFunctions/classControl";

export default function blog() {
  const posts = document.querySelectorAll('.blog-item');
  const imgWrapper = document.querySelector('.blog-img-wrapper');
  const blogControls = document.querySelectorAll('.banner-blog-controls button');
  const blogInfo = {
    actualBlog: 0
  }

  if (!posts[0]) return null;

  controlClass(posts, blogInfo.actualBlog, imgWrapper);

  blogControls.forEach((control, index) => {
    control.addEventListener('click', e => {
      e.preventDefault();

      const { actualBlog } = blogInfo;
      
      if (index === 0) {
        const newActualBlog = actualBlog === 0 ? posts.length - 1 : actualBlog - 1;

        blogInfo.actualBlog = newActualBlog;

        controlClass(posts, blogInfo.actualBlog, imgWrapper);
      } else {
        const newActualBlog = actualBlog === posts.length - 1 ? 0 : actualBlog + 1;

        blogInfo.actualBlog = newActualBlog;

        controlClass(posts, blogInfo.actualBlog, imgWrapper);
      }
    });
  });
}
