import React, { useEffect, useState } from 'react';
import TitleComponnent from './TitleComponnent';
const SaleCard: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0.1,
        seconds: 5,
    });

    const [dieTime, setdieTime] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    setdieTime(true);
                    clearInterval(interval);
                    return prev;
                }

                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const format = (val: number) => val.toString().padStart(2, '00000000000');

    return (
        <div className="flex flex-col w-full sm:flex-row gap-1 sm:gap-5 items-start sm:items-center ml-5 py-6 px-4 md:px-8">
            <div className="w-full sm:w-auto">
                <TitleComponnent label="Hôm nay" title="Giảm giá" />
            </div>

            {dieTime ? (
                <p className="text-red-600 font-semibold text-lg">Em đen lắm!</p>
            ) : (
                <div className="flex gap-4 md:ml-4 text-center text-sm relative">
                    {[
                        { label: 'Days', value: timeLeft.days },
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Minutes', value: timeLeft.minutes },
                        { label: 'Seconds', value: timeLeft.seconds },
                    ].map(({ label, value }, i) => (
                        <div key={label} className="flex flex-col items-center">
                            <span className="text-lg font-bold">{format(value)}</span>
                            <span className="text-gray-500">{label}</span>
                            {i < 3 && (
                                <span className="text-red-500 absolute translate-x-[22px] translate-y-[-8px]">:</span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
};

export default SaleCard;
