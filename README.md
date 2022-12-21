# Тестовое задание для Junior Frontend Engineer

## Окружение

Запуск Dev окружения:

```
yarn
yarn dev
```

Сборка:

```
yarn
yarn build
```

Превью:

```
yarn
yarn build
yarn serve
```

Красивое:

```
yarn
yarn fmt
```

## Задача

Нужно сверстать макет -
https://www.figma.com/file/qLRwioXKcaeb9L2BAwlWYV/DropsTab-Test-Task. Данные в
макете ради примера, вы можете подставить туда другие. Данные можете хранить в json, либо развернуть свой mock server.

**Требования**:

- По клику на кнопку "Show More" нужно загружать дополнительно 5 записей
  (ассетов) в таблицу
- Summary, Top Gainer\Loser должны динамически изменяться, когда в таблицу
  подгружаются новые записи
- Summary содержит сумму всех ассетов (price * quantity), также доход за 24 часа
  (сумма по столбцу 24H Profit)
- Top Gainers\Losers содержат ассет из таблицы с максимальным\минимальным
  значением по столбцу 24H Profit

**Требования к верстке:**

- Cемантичность
- Доступность
- Картинки должны быть оптимизированы

**Используемые технологии:**

- React
- Tailwind.css
