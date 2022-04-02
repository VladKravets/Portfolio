import React from 'react';
import style from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <h1 className={style.title}>Contacts</h1>
                    <form action="#" className={style.contactsForm}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>
                    <a href="#"className={style.button}>Отправить</a>
            </div>
        </div>
    );
};
