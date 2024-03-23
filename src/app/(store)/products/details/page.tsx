export const ProductsDetails = () => {
    return (
        <div className='min-h-svh padding-x flex gap-10 max-container w-full'>
            <div className="flex flex-col xl:w-2/4 w-full">
                <div className="w-full h-[60%] border border-black" />
                <div className="flex gap-4 mt-5">
                    <div className="w-28 h-20 bg-pink-500" />
                    <div className="w-28 h-20 bg-red-500" />
                    <div className="w-28 h-20 bg-blue-500" />
                    <div className="w-28 h-20 bg-green-500" />
                    <div className="w-28 h-20 bg-yellow-500" />
                </div>
            </div>

            <div className="flex flex-1 flex-col">
                <p className="text-3xl font-semibold sm:max-w-sm">Tênis Nike Revolution 6 Next Nature Masculino</p>
                <p className="text-gray-500 mt-1"><small>Casual | Nike | REF:23897123</small></p>
                <div className="flex gap-3 mt-1">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>4.7⭐</p>
                    <p><span className="text-gray-500">(90 avaliações)</span></p>
                </div>
                <div className="flex gap-3 mt-3">
                    <p><small className="text-gray-500">R$</small><span className="text-3xl">219</span>,00</p>
                    <p className="text-gray-500 mt-[9px]"><small><del>219,00</del></small></p>
                </div>
                <div className="flex flex-col gap-1 mt-5">
                    <p className="text-gray-500">Descrição do produto</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam minus necessitatibus fugiat temporibus nostrum eum impedit, enim aperiam harum odio. Ad iusto consectetur, ex enim at alias et? Ducimus, ipsam.</p>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-gray-500">Tamanho</p>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-pink-500" />
                        <div className="w-10 h-10 bg-red-500" />
                        <div className="w-10 h-10 bg-blue-500" />
                        <div className="w-10 h-10 bg-green-500" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-gray-500">Cor</p>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-pink-500" />
                        <div className="w-8 h-8 rounded-full bg-red-500" />
                        <div className="w-8 h-8 rounded-full bg-blue-500" />
                        <div className="w-8 h-8 rounded-full bg-green-500" />
                    </div>
                </div>
                <button type="button" className="w-60 mt-6 rounded-xl bg-orange-400 text-white font-bold py-2 px-4 hover:bg-orange-600 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700">
                    Comprar
                </button>
            </div>
        </div>
    )
}

export default ProductsDetails
