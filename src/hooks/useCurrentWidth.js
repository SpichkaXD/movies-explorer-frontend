import { useEffect, useState } from 'react';

const useCurrentWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Тайм-аут для механизма отмены
        let resizeTimer = null;

        const resizeController = () => {
            // Тайм-аут для механизма отмены// предотвратить выполнение предыдущего setTimeout
            clearTimeout(resizeTimer);
            // измените ширину объекта состояния через 150 миллисекунд
            resizeTimer = setTimeout(() => setScreenWidth(window.innerWidth), 150);
        }
       // установить прослушиватель 
        window.addEventListener('resize', resizeController);

        // функция очистки после добавления
        return () => {
           //удалить прослушиватель
            window.removeEventListener('resize', resizeController);
        }
    }, []);

    return screenWidth;
}

export default useCurrentWidth;