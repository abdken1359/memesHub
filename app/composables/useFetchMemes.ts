export const useFetchMemes=async (count:number) =>{
    const data =await $fetch(`https://meme-api.com/gimme/${Math.floor(count)}`)
    return{
       data
    }
}