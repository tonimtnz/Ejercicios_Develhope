/*async function todoList(){
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
    console.log (response)
    
    const processedResponse = await response.json()
    console.log(processedResponse);

    const filteredData = processedResponse.filter((item) => {
        return item.completed
    })
    console.groupCollapsed(filteredData);
}*/

const todoList = async () => {
    const data = await fetch ( "https://jsonplaceholder.typicode.com/todos" ) 
    const datajson = await data.json()

    console.log(datajson);
} 


todoList()