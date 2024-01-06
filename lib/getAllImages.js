export default async function getAllImages () {
    const res = await fetch('https://api.unsplash.com/photos?per_page=40&client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE')

    if(!res.ok) throw new Error('Fail to fetch user')

    return res.json()

    console.log(res.json) 
}