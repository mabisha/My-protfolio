export default async function Page({ params }) {
    const { id } = await params
    console.log(id)
    return <div>My Post: {id}</div>
}