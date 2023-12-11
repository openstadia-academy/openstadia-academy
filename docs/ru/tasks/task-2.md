# Задание 2

## Что должно быть сделано

- Зарегистрированы на
    - GitHub
    - GitHub Education
    - JetBrains
- Получен Student Pack на сайте JetBrains
- Установлены
    - Docker Desktop
    - PyCharm
    - ToolBox (Опционально)

## Подготовка

- Скачать и установить (если не установлены):

    - WebStorm ([https://www.jetbrains.com/ru-ru/webstorm/](https://www.jetbrains.com/ru-ru/webstorm/) или через
      ToolBox)

    - NodeJS ([https://nodejs.org/en/download](https://nodejs.org/en/download))

    - Yarn ([https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install))

- Из IDE WebStrom загрузить репозиторий openstadia-app с использованием функции **Get From VCS**. В поле URL
  ввести: https://github.com/openstadia-academy/openstadia-app.git

![изображение](/task2/image001.png)

- Выполнить команду для установки зависимостей:

```
yarn install
```

- В **корневой папке** (дальше все папки относительно корня проекта будут начинаться со слэша «/») создать файл *
  *.env.local** со следующим содержимым:

```
VITE_AUTH0_DOMAIN=openstadia.eu.auth0.com
VITE_AUTH0_CLIENT_ID=i6Mq5Xyc4e8uXVAjVdw8kiutDKduf2z4 
VITE_AUTH0_CALLBACK_URL=http://localhost:5173/callback
VITE_API_SERVER_URL=http://127.0.0.1:8000
```

- В командной строке, находясь в **корневой папке** проекта запустить сервер при помощи следующей команды:

```
yarn dev
```

## Задание

### 1. Серверное приложение (Python, PyCharm)

1.1. Выполнить Rollback изменений, сделанных в рамках 2 ДЗ и обновить проект до последней версии.

![изображение](/task2/image002.png)

1.2. Изменить ветку проекта на **hw3**

![изображение](/task2/image003.png)

1.3. Создать ендпоинт на сервере, для изменения имени для сервера.

1.4. Ендпоинт должен обслуживать метод POST на URL /servers/{server_id}/name, обработчик должен находиться в файле *
**/openstadia_hub/api/servers.py**. Обработчик должен проверять, имеет ли данный пользователь права работать с данным
сервером.

1.5. Создать метод, для принятия изменений в базу данных в файле **/openstadia_hub/crud/server.py**.

1.6. Создать схему данных, в которой обработчик будет получать данные, в файле /**openstadia_hub/schemas/server.py**.
Который должен иметь следующую структуру:

 ```json 
 {
  "name": "new-name"
}
 ```

Подсказка: <https://fastapi.tiangolo.com/tutorial/body/>

### 2. Клиентское приложение (Vue, WebStorm)

1. Изменить ветку проекта на **hw3** (аналогично пункту 1.2.)


2. В файле /src/apis/servers.ts создать метод запроса для изменения данных об имени сервера.
    - Метод: POST
    - Тело запроса: JSON в формате, который описан в пункте 1.6.
    - Заголовки:
        - Authorization: Beraer \<user-auth-token\>
        - Content-Type: application/json

3. В файле /src/components/settings/basic/SettingsBasic.vue в функции rename, которая срабатывает на нажатие кнопки
   Rename, добавить тело обработчика, которое:

    - Получает авторотационный токен пользователя (<https://learn.javascript.ru/fetch>)
    - Получает значение из поля Name. Подсказки:
        1. https://vuejs.org/tutorial/#step-5
        2. https://vuejs.org/guide/essentials/forms.html

- Отправляет полученное значение с использованием метода, написанного в пункте 2.2.

### 3. Проверить работоспособность своего решения
