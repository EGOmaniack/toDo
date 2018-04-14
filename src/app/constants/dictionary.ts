
export const port = (process.env.NODE_ENV === 'test') &&
process.env.npm_package_jest_globals_PORT ||
process.env.port;

export const serverip = location.hostname || 'localhost';

export const dictionary = Object.freeze({
    PACKS_FILTR: 'Фильтр пакетов',
    LOG_IN: 'Войти',
    SEND: 'Отправить',
    REGISTRATION: 'Регистрация',
    SEARCHING: 'Поиск...',
    TO_MAIN: 'Назад',
    LOADING: 'Загрузка...',
    TO_OLD: 'К старому интерфейсу',
    IN_DEVELOPMENT: 'Раздел в разработке',
    SPECPARCER_DESIGN_PLACE: 'Шифр корневой сбоки',
    IN_DEVELOPMENT_BUT_USE: 'Раздел в разработке, но можно пользоваться на свой страх и  риск',
    
    name: 'Имя',
    sName: 'Фамилия',
    patronymic: 'Отчество',
    nickName: 'Придумайте никнэйм',
    pass: 'Придумайте пароль',
    pass1: 'Повторите пароль',
    nick: 'Никнэйм',

    // Кнопки
    reg: 'Зарегистрирроваться',
    exit: 'Выйти',
    login: 'Войти',
    add: 'Добавить',
    loginpass: 'Ваш пароль',
    userlogin: 'Ваш никнэйм',
    next: 'Далее',
    prew: 'Назад',
    goBack: 'Вернуться назад',
    change: 'Изменить',
    delete: 'Удалить',

    // Названия
    MainPage: 'Главная страница',

    states: {
        TaskList: 'Ваши задачи'
    },
});

export const headerHeight = 60;