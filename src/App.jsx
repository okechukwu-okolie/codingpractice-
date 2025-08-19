

function App() {
 let searchSentence = 'this is the man he has a leg'
 let result = searchSentence.match(/men/)
 let result2 = searchSentence.replace(/man/,'woman')

 if(result){
  console.log(`the word man exists in the search sentence ${searchSentence}`)
 }
 if(result2){
  console.log(`the text of man has been changed to woman in the search sentence ${result2}`)
 }
 else{
  console.log(`the search word does `)
 }

  return (
    <>
      
    </>
  )
}

export default App
