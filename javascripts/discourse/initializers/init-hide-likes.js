import { apiInitializer } from "discourse/lib/api";
export default apiInitializer("0.8", (api) => {

    api.reopenWidget("post-menu", {

        getWhoLiked() {
            const { attrs, state } = this;
            return new Promise((resolve, reject) => {
                state.likedUsers = [];
                state.total = 0;
                resolve();
            })
        },
        attachButton(name) {
            let button = this._super(name);
            if(name === 'like') {
                button.children[0].attrs.contents = 'X';
                button.children[0].contents = 'X';
            }
            return button;
        }
    });
});