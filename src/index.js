import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode> <App /> </React.StrictMode>);



// створити фай в корні jsconfig.json середині пишем звідки будуть відосні шляхи і після . тобто вже ю../  а можна зразу ставити 'components/App' відносний шлях считається вд папки src