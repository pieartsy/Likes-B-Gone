import { apiInitializer } from "discourse/lib/api";
export default apiInitializer("0.8", (api) => {

  api.reopenWidget("post-menu", {
    
    menuItems() {
      const hideForCurrentUser =
        settings.hide_from_current_user &&
        this.currentUser;
  const hideForAnon = settings.hide_from_anons && !this.currentUser;

      if (hideForCurrentUser || hideForAnon) {
        return this.siteSettings.post_menu
          .split("|")
          .filter((item) => item !== "like");
      }
      return this.siteSettings.post_menu.split("|").filter(Boolean);
    },

    // registerButton(){
    //     if (!attrs.showLike) {
    //       return null;
    //     }
    
    //     const className = attrs.liked
    //       ? "toggle-like has-like fade-out"
    //       : "toggle-like like";
    
    //     const button = {
    //       action: "like",
    //       icon: attrs.liked ? "d-liked" : "d-unliked",
    //       className,
    //       before: null,
    //       data: {
    //         "post-id": attrs.id,
    //       },
    //     };
    
    //     // If the user has already liked the post and doesn't have permission
    //     // to undo that operation, then indicate via the title that they've liked it
    //     // and disable the button. Otherwise, set the title even if the user
    //     // is anonymous (meaning they don't currently have permission to like);
    //     // this is important for accessibility.
    //     if (attrs.liked && !attrs.canToggleLike) {
    //       button.title = "post.controls.has_liked";
    //     } else {
    //       button.title = attrs.liked
    //         ? "post.controls.undo_like"
    //         : "post.controls.like";
    //     }
    //     if (currentUser && !attrs.canToggleLike) {
    //       button.disabled = true;
    //     }
    //     return button;
    //   },
    


    likeCount() {
      return null;
    },
  

    refreshLikes() {
      return null;
    },

    getWhoLiked() {
      return null;
    },

    toggleWhoLiked() {
      return null;
    }
  
  });
});
