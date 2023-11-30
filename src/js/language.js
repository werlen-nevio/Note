const urlParams = new URLSearchParams(window.location.search);
const currentLanguage = urlParams.get('lang') || 'de';

const languages = {
    en: {
        text: "Text",
        todoList: "To-Do-List",
        header1: "Header 1",
        header2: "Header 2",
        header3: "Header 3",
        quote: "Quote"
    },
    de: {
        text: "Text",
        todoList: "To-Do-Liste",
        header1: "Überschrift 1",
        header2: "Überschrift 2",
        header3: "Überschrift 3",
        quote: "Zitat"
    }
};