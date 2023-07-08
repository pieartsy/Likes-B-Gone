# Likes-B-Gone
A ~~hacky~~ component for Discourse to get rid of the ability to see likes.

~~Taken from [this repository](https://github.com/tshenry/discourse-hide-likes) except it just turns it off for everyone using the theme, along with the "expand" menu. Currently I have not figured out how to turn off a user's ability to see others' likes yet still like things themself. F. Working on it.~~

Graciously rewritten by [Josh Grams](https://github.com/JoshuaGrams/) except he didn't fork it so I guess I just have this repository with code from someone else now

1. Go to the the theme area of your admin console. Something like this: `your.site.com/admin/customize/themes`

2. Click "Install"
   ![image](https://d11a6trkgmumsb.cloudfront.net/original/3X/1/b/1b33528136b6802d56e1538ff330be6392e2dd7a.png)

3. Click "From a git repository" and put this into the box: `https://github.com/pieartsy/Likes-B-Gone.git`
   ![image](https://d11a6trkgmumsb.cloudfront.net/original/3X/d/b/db174a87268798883fe0a96a38e9cca0d2e7b71a.png)

This adds the component to your Discourse so you can apply it to a theme.

4. After importing the component, go to the theme* you want to add it to and look for the "Included Components" section. Then add "Likes-B-Gone".
  ![image](https://d11a6trkgmumsb.cloudfront.net/original/3X/a/a/aa921dedfab385449556751417269e08225bd168.png)

*NOTE: If you do not want to add this component to an existing theme, feel free to do step 3 with this theme which I like `https://github.com/discourse/discourse-theme-hibiscus.git` (just put the url in the same box as indicated in step 3, and use that theme for step 4). You can name it Likes-B-Gone Hibiscus or something.

~~If it breaks, then it will only break for the people who have this theme installed (me) and it will be entirely my fault!~~