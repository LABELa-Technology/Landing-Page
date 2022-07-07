

const IntroductionCard = () =>{
    return(
        <div className=" bg-white">
            <h2 className="text-center py-8 text-4xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-900 md:text-2xl md:pl-40 md:py-8 md:text-left">LABELa. Tech</h2>
            <div className="py-10">
                    <div className="md:text-center">
                        <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-red-900 drop-shadow-lg sm:text-6xl">來點 AI</p>
                        <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-purple-700 to-red-900 drop-shadow-lg sm:text-6xl">即刻走向產業尖端</p>
                        <p className="py-5 mt-4 max-w-2xl text-2xl font-black text-gray-900 md:mx-auto">來點科技提供 AI SaaS 數值型平台一站式服務 DigitalOps，讓企業理解數據、快速搭建各類預測分析模型，方便部署，提升企業商業競爭力。</p>
                    </div>
                    <div className="flex justify-center pt-8">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mx-4 rounded-full bg-gradient-to-r from-pink-500 via-blue-700 to-blue-700">免費試用</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mx-4 rounded-full">聯絡我們</button>
                    </div>
            </div>
        </div>
    );
}

export default IntroductionCard;