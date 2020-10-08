export default  async function(){
const resp = await fetch('/music/mock/data.json');
return await resp.json();
}