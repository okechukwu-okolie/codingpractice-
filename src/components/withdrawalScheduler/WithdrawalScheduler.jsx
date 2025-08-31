import React,{useState} from 'react'
import { FcLeft } from 'react-icons/fc'

const WithdrawalScheduler = () => {
    const [amount, setAmount] = useState('')
    const [day, setDay] = useState(false)
    const [week, setWeek] = useState(false)
    const [month, setMonth] = useState(false)
    const [threeMonths, setThreeMonths] = useState(false)
    const [sixMonths, setSixMonths] = useState(false)
    const [nineMonths, setNineMonths] = useState(false)
    const [oneYear, setOneYear] = useState(false)
    const [youDecide, setYouDecide] = useState(false)
    const [user, setUser] = useState([])





    const submit = (e) =>{
        e.preventDefault()
        const repetition =(!day || !week || !month)
        const duration = (!threeMonths || !sixMonths || !nineMonths || !oneYear || !youDecide)

        if (amount.trim() === '' && !repetition && !duration){
            console.log('provide an amount to schedule for saving')
            return; 
        }
    console.log( 'satisfied')
  
    return ('conditions have been satisfied')
        const userChoice = (amount, repetition, duration) =>{

            const userDetails = {
                amount,
                repetition,
                duration
        }
        setUser([...user, userDetails])
        setAmount('N0')
        setDay(false)
        setWeek(false)
        setMonth(false)
        setThreeMonths(false)
        setSixMonths(false)
        setNineMonths(false)
        setOneYear(false)
        setYouDecide(false)
        }
       
    }
      const handleAmount = (e) =>{
            setAmount(e.target.value)
        }
        const handleDay =() =>{
            setDay(!day)
           
                setWeek(week)
                setMonth(month)
                // setDay(!day)
                console.log('day has been handled')
                return ;
            
        }

        const handleWeek =()=>{
        setWeek(!week)
        setMonth(month)
        setDay(day)
        setWeek(!week)
        console.log('week has been handled')
        return
  
        }

        const handleMonth = ()=>{
            setMonth(!month)
          
            setWeek(week)
            setDay(day)
            setMonth(!month)
            
           console.log ('month has been handled')
            return;
        }

        const handleSixMonths =()=>{
            setSixMonths(!sixMonths)
            if(sixMonths){
                setThreeMonths(threeMonths)
                setSixMonths(!sixMonths)
                setNineMonths(nineMonths)
                setOneYear(oneYear)
                setYouDecide(youDecide)
                
                alert ('sixMonths have been handled')
            }
        }
         const handleNineMonths =()=>{
            setNineMonths(!nineMonths)
            if(nineMonths){
                setThreeMonths(threeMonths)
                setSixMonths(sixMonths)
                setNineMonths(!nineMonths)
                setOneYear(oneYear)
                setYouDecide(youDecide)
                
                alert ('nineMonths have been handled')
            }
        }

         const handleOneYear =()=>{
            setOneYear(!oneYear)
            if(oneYear){
                setThreeMonths(threeMonths)
                setSixMonths(sixMonths)
                setNineMonths(nineMonths)
                setOneYear(!oneYear)
                setYouDecide(youDecide)
                
                alert ('oneYear have been handled')
            }
        }

         const handleYouDecide =()=>{
            setYouDecide(!youDecide)
            if(youDecide){
                setThreeMonths(threeMonths)
                setSixMonths(sixMonths)
                setNineMonths(nineMonths)
                setOneYear(oneYear)
                setYouDecide(!youDecide)
                
                alert ('youDecide have been handled')
            }
        }

         const handleThreeMonths =()=>{
            setThreeMonths(!threeMonths)
            if(threeMonths){
                setThreeMonths(!threeMonths)
                setSixMonths(sixMonths)
                setNineMonths(nineMonths)
                setOneYear(oneYear)
                setYouDecide(youDecide)
                
                console.log ('three months have been handled')
            }
        }
         

  return (
    <main style={{marginBottom:'30px'}}>
        <form onSubmit={submit}>
            <div >
            <FcLeft/><span>General</span>
        </div>
        <div style={{border:'solid 1px lightGrey',width:'300px'}}>
            <p>I'm Saving</p>
            <input 
                type="number"
                value={amount}
                onChange={handleAmount}
                placeholder='Input amount to save regularly'
             />
        </div>
        <div style={{border:'solid 1px lightGrey',width:'300px'}}>
            <p>Every</p>
            <button onClick={handleDay}>Day</button>
            <button onClick={handleWeek}>Week</button>
            <button onClick={handleMonth}>Month</button>
           <div>
            <input type="checkbox" name="" id="" /><span>Just this once</span>
            </div> 
        </div>
        <div style={{border:'solid 1px lightGrey',width:'300px'}}>
            <p>For</p>
            <button onClick={handleThreeMonths}>3 months</button>
            <button onClick={handleSixMonths}>6 months</button>
            <button onClick={handleNineMonths}>9 months</button>
            <button onClick={handleOneYear}>1 year</button>
            <button onClick={handleYouDecide}>You decide</button>
        </div>
        <button >Continue</button>
        </form>
    </main>
  )
}

export default WithdrawalScheduler