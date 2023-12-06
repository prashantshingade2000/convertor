import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import { InputBox } from './component/Input'
import InputBox from './component/Input';

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(0);
    setconvertedAmount(0);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-100 rounded-xl h-96 w-1/2 p-5">
          <div className="flex justify-center">
            <h2 className="text-center text-black font-bold py-5 text-3xl">
              Convertor {from.toUpperCase()} to {to.toLowerCase()}
            </h2>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}>

            <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />

            <div className="flex justify-center mt-8">
              <button type="submit" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg"
                onClick={swap}>Swap Convertor
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)} />

            <div className="flex justify-center mt-5">
              <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg"
                onClick={convert}>Convertor</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
