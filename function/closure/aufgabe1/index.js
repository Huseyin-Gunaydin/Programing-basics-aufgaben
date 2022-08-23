
function aufgabe1(outnummer) {
    const nachKommaStellen = (nummer) => {
      console.log(nummer.toFixed(outnummer));
    };
    return nachKommaStellen;
  }
  
  const zweiToFixed = aufgabe1(2);
  const vierToFixed = aufgabe1(4);
  
  zweiToFixed(5.492858);
  zweiToFixed(12.7491313);
  
  
  vierToFixed(5.492858);
  vierToFixed(12.7491313);
  
  
  
  
  // function aufgabe2(param1){
  //     const link = (sucht) =>{
  //         if (param1 === "Google"){
  //             console.log(`https://www.google.com/search?q=${sucht}`)}
  //         else if (param1 === "DuckDuckGo"){
  //             console.log(`https://duckduckgo.com/?q=${sucht}`)}
  //         else if (param1 === "Bing"){
  //             console.log(`https://www.bing.com/search?q=${sucht}`)}
  //     } 
  //     return link
  // }
  
  // const google = aufgabe2("Google")           ///param1
  // const duckDuckGo = aufgabe2("DuckDuckGo")   ///param1
  // const bing = aufgabe2("Bing")               ///param1
  
  // google("Mars")      /// sucht
  // duckDuckGo("Erde")  /// sucht
  // bing("Jupiter")     /// sucht
  
  
  
  
  
  function aufgabe2(param1){
    const link = (sucht) =>{
      //return param1+sucht
      return param1+sucht
    } 
    return link
  }
  
  const google = aufgabe2("https://www.google.com/search?q=$")           ///param1
  const duckDuckGo = aufgabe2("https://duckduckgo.com/?q=")              ///param1
  const bing = aufgabe2("https://www.bing.com/search?q=")                ///param1
  
  
  
  console.log(google("Mars"))
  console.log(duckDuckGo("Erde"))
  console.log(bing ("Jepiter"))
  
  
  
  
  // google("Mars")      /// sucht
  // duckDuckGo("Erde")  /// sucht
  // bing("Jupiter")     /// sucht