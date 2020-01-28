import styles from './styles.scss';

const component = () => {
    const element = document.createElement('div');

    element.innerHTML = 'Hello World!';
    element.classList.add(styles.hello);

    return element;
}

document.body.appendChild(component());
