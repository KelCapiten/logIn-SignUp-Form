const root = document.documentElement;

document.querySelector('button').addEventListener('click', () => {
    const newTheme = root.className === 'light'? 'dark' : 'light';
    root.className = newTheme;
    root.querySelector('button').className = newTheme;
})