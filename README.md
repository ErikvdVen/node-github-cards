# Node GitHub cards

Since LinkedIn closed the GitHub app, I didn't really know how to share my GitHub information on LinkedIn, till now. I loved 
[Guille Paz's](https://github.com/pazguille/github-card) idea of creating cards with your GitHub information, but it's not an image so not really suitable for LinkedIn. So I combined the GitHub API and Guille's idea of creating cards in an app which generates an image, using node-webshot. The result is a "real-time" image:

![github profile](http://node-github-cards.herokuapp.com/images/profile-basic)

LinkedIn screenshot:
![github linkedin](http://i.imgur.com/FygjY66.png)

This way you can share your github profile on LinkedIn the same way as [Stackoverflow flairs](stackoverflow.com/users/flair)

## Getting started
```
git clone https://github.com/ErikvdVen/Node-GitHub-cards.git
cd Node-GitHub-cards
```
After successfully cloning the GitHub repository, you need to rename `development-sample.json` inside the config folder to `production.json` and fill in the `user` and `oauthToken` keys. You can generate a token over here: [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)

After you successfully generated a valid production.json, you can enter the last commands in your terminal:
```
npm install
bower install
grunt build
grunt
```

Now you should be able to visit `http://localhost:8080/images/profile-basic` to generate your image. This is also the url you can enter as image, like in html:
```
<img src="http://localhost:8080/images/profile-basic" />
```

## Create Repo cards
Coming soon!

License & Credits

This software is published under the MIT License.

GitHub cards

This repository contains designs from Guille Paz's [github-card](https://github.com/pazguille/github-card) repository.
