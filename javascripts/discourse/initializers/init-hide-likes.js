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

    likeCount() {
      return null;
    },
  
    like() {
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
