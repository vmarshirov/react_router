#!/bin/bash
echo "Content-type: text/html";
echo "";
echo '<!DOCTYPE html>';
echo '<html>';
echo '<head>';
echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
echo '<title>Запуск</title>';
echo '</head>';
echo '<body>';
echo '<pre>';
echo '';
date;
echo '';

cd  /var/www/g06/g06u35/react_router;
echo '--список из раздела--';
pwd;
jobs;
echo "ps -aux | grep node";
echo "kill -9 624";

ps -aux | grep node;
echo "sleep 1"
sleep 1
#npm run build
#serve -s build
nohup serve -s build &>/dev/null &
sleep 1
ps -aux | grep node

#nohup npm start &>/dev/null &
#npm start
#npm start &>/dev/null &
