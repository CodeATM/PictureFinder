export default async function getBanner () {
    const res = await fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=forest&client_id=process.env.UNSPLASH_ACCESS_KEY')

    if(!res.ok) throw new Error('Fail to fetch image')

    return res.json()

    console.log(res.json)
}