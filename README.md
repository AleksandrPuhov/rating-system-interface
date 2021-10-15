# rating-system-interface

Git: https://github.com/AleksandrPuhov/rating-system-interface

GH-Pages: https://aleksandrpuhov.github.io/rating-system-interface/

Этапы выполнения:

- Сверстал базовые блоки и списки. Реализовал табуляцию через state.
- Создал 3 редюсера, для каждого из списка. Они были проинициализированны
  фейковыми значениями по умолчанию, и подключены к компонентам.
- Получил данные по API. Из данных выбрал необходимые поля uid, first_name, last_name, username.
- Далее к userReduser подключил кнопки Обновить и Далее.
- Сделал функционал кнопок + и - для левого списка. На этом этапе добавил новый редюсер stateUIReduser
  и перенес в него логику работы Tabs. Когда user переносится на правую половинку
  у него появляется новое поле Raiting.
- Сделал изменение рейтинга по нажатию + и - для правой половины.
- Далее добавил кнопку удалить при нулевом рейтинге, и сделал удаление user.
- Добавил модальное окно. Модальное окно общее для goodUsers и badUsers. Информация о том, что надо
  показать модальное окно, и выбор сообщения сделано через stateUIReduser.
- Добавил тесты.
