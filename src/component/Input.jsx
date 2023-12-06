import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false
}) {

    const uniqueId = useId();
    return (
        <>
            <label htmlFor={uniqueId} className="block text-xl">{label}</label>
            <div className="relative rounded-md shadow-sm">
                <input type="text" id={uniqueId} name="price" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    disabled={amountDisable} value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    placeholder="0" />
                <div className="absolute inset-y-0 right-0 flex items-center">

                    <select
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                        className="h-full rounded-md border-0 bg-slate-400 py-0 pl-10 pr-10 text-black-100 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default InputBox
