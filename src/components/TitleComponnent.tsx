import React from 'react'
import type { TitleComponentType } from '../types/TitleComponnentType'
const TitleComponnent: React.FC<TitleComponentType> = ({ label, title }) => {
    return (
        <div className="flex items-center gap-2 mb-4 sm:mb-0 ml-5">
            <div className="w-3 h-6 bg-red-500 rounded-sm"></div>
            <div>
                <p className="text-red-500 mt-5 text-sm font-semibold">{label}</p>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
        </div>
    )
}

export default TitleComponnent