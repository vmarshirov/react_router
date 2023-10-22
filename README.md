rsc -  для Pycharm

### Ссылка на пример:  http://185.182.111.214:3000/


service mysql stop - уменьшаем нагрузку на удаленном сервере (g06u35, root)



### Клонируем с GitHub (или после копирования *.zip)

Установив предварительно: https://nodejs.org/en/

git clone https://github.com/vmarshirov/react_router.git

cd react_router

ls -lAF

cat package.json

npm install

npm start


### Разворачиваем на удаленном сервере (build)


cp cgi-bin/npm_start.sh ~/cgi-bin/npm_start.sh

chmod 755 ~/cgi-bin/npm_start.sh

http://185.182.111.214:7635/cgi-bin/npm_start.sh


===========================

nohup npm start &>/dev/null &

http://185.182.111.214:7635/cgi-bin/npm_start.sh

ps -aux | grep node

kill -9 624

npm run build

serve -s build

# 👇️ Если возникли проблемы с установкой
rm -rf node_modules

rm -f package-lock.json

npm cache clean --force

npm install


### https://reactjs.org/docs/hello-world.html

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




###  https://reactrouter.com/en/main/start/tutorial

## Deploying a React App* to GitHub Pages
### https://github.com/gitname/react-gh-pages

