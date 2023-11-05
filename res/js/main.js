function formatDate(str) {
  let date = new Date(str);

  let dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  let formattedDateString = dateFormatter.format(date);
  return formattedDateString;
}

// const url = "https://api.npoint.io/5f4bc9dc3e2b6adc8b6b";
const url = "./res/json/json_data.json";
const boxWrapper = document.querySelector("#box-wrapper");
const imgPath = "./res/images";

fetch(url)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((el) => {
      const box = document.createElement("article");
      box.className = "box";

      // create post header
      const postHeading = document.createElement("div");
      postHeading.className = "post_heading";

      const postAuthor = document.createElement("div");
      postAuthor.className = "post_author";
      const authorAvatar = document.createElement("img");
      authorAvatar.src = `${imgPath}/user.png`;
      authorAvatar.alt = "profile-img";
      const authorName = document.createElement("span");
      authorName.innerText = el.author_name;

      postAuthor.append(authorAvatar);
      postAuthor.append(authorName);

      const date = document.createElement("span");
      date.innerText = formatDate(el.created_time);

      postHeading.append(postAuthor);
      postHeading.append(date);

      // create post body
      const postBody = document.createElement("div");
      postBody.className = "post_body";
      if (el.message) {
        const message = document.createElement("p");
        message.innerText = el.message;
        postBody.append(message);
      }
      if (el.img) {
        const img = document.createElement("img");
        img.src = el.img.url;
        img.alt = el.img.alt;
        postBody.append(img);
      }

      // create postfooter
      const postFooter = document.createElement("div");
      postFooter.className = "post_footer";

      const likeIcon = document.createElement("img");
      likeIcon.src = `${imgPath}/like.png`;
      likeIcon.alt = "like-icon";

      const likeCount = document.createElement("span");
      likeCount.innerText = el.like_count;

      const commentIcon = document.createElement("img");
      commentIcon.src = `${imgPath}/comment.png`;
      commentIcon.alt = "comment-icon";

      const commentCount = document.createElement("span");
      commentCount.innerText = el.comment_count;

      postFooter.append(likeIcon);
      postFooter.append(likeCount);
      postFooter.append(commentIcon);
      postFooter.append(commentCount);

      box.append(postHeading);
      box.append(postBody);
      box.append(postFooter);

      boxWrapper.append(box);
    })
  );
