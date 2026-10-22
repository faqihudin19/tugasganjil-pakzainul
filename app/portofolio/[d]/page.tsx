import { arrayPorto } from "@/data/portofolio";

type Params = Promise<{
    id: string
}>

const portfolioDetailPage = async ({ params }: { params: Params }) => {
    const { id } = await params;
    const porto = arrayPorto.find((item) => item.id === parseInt(id));
    if (!porto) {
        return (
            <div>              
                <h2 className="text-2xl font-bold text-white">Portfolio Item Not Found</h2>            
            </div>
        );
    }
    return (
        <div>
            <h1>Portofolio Detail</h1>
            <img src={porto.image} 
            alt={porto.name} 
            className="rounded-lg w-full" width={500} height={500} />
        </div>
    )
}
export default portfolioDetailPage;