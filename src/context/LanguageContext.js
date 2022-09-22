import {createContext, useEffect, useState} from "react";
import cookies from "js-cookie";
import {useTranslation} from "react-i18next";

const Context = createContext()

export const LanguageContextProvider = ({children}) => {

    const { t } = useTranslation()

    return (
        <Context.Provider value={t}>
            {children}
        </Context.Provider>
    )
}
