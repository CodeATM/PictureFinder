

export default async function getOneImage (id) {
    const res = await fetch(`https://api.unsplash.com/photos/${id}?client_id=dthP8VNzMTvgPPCHRVAInVjlov43oenGQx8UkNn2VqE`)

    if(!res.ok) throw new Error('Fail to fetch user')

    return res.json()

    console.log(res.json)
}