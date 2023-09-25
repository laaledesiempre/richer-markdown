const process=(text)=>{
  
  
  let values= text.split("\n")

  let elements =""
  for (x of values) {
    let attr;
    try {
      let match = x.match(/{[^{}]*}/)[0]
      console.log(match)
      attr = match.substring(1,match.length-1)
      console.log("attr is: "+attr)
    }
    catch(error) {
      console.log("here")
      attr = ""
    }
    
               
    if (x[0] == "#") {
    elements = elements + "<h1 "+attr+" >"+x.substring(1).replace("{"+attr+"}","")+"</h1>"+"\n"
    } 
    else {
    elements = elements + x + "\n" }}
  console.log(elements)
  return elements
}