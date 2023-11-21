export default async function getBanner () {
    const res = await fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=forest&client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE')

    if(!res.ok) throw new Error('Fail to fetch image')

    return res.json()

    console.log(res.json)
}