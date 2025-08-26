export const useFetchMemes=async () =>{
    const {data:memes,refresh}=useFetch("https://meme-api.com/gimme/10");
    return{
        memes,
        refresh
    }
}