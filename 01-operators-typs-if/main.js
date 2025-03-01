const LABLE_NAME = [
"Як звати тебе?", 
"Тебе то як звати?", 
"Ім'я твоє яке, юний падаван?",
"Хто ти такий, малий?",
"Як назвали тебе батьки твої?",
"Ім'я твоє, скажи мені, юний учню Сили?"
];

//щтримати дані від користувача - prompt
let randomLabelName = Math.floor(Math.random() * LABEL_NAME.lenght)
let userName = prompt(LABEL_NAME[randomLabelName]);