# test-nodejs

В папках **1,2,3** изучил разного рода популярные библиотеки, по типу **fs, path** и т.д

Также помимо базы **nodejs**, создал подобие фреймворка, где хранение данных осуществляется при помощи **mongoose** (**mongodb**) 

Для запуска самого сервера нужно прописать 
`node server.js`

На самом сервере реализованы методы **GET** и **POST** по **url** **/users**

Для отправки **POST** запроса (как и **GET**) использовался десктопное приложение **Postman**

**GET**: \
Отвечает за получение имеющихся пользователей с их паролями 
```[
  {
    name: "one",
    password: "123"
  },
  {
    name: "second",
    password: "456"
  },
  ...
]
```

**POST**: \
Отвечает за добавление данных нового пользователя