
const Tableau = () => {
    return (
        <div className="p-10 flex justify-center items-center bg-green-50">
            <table className="w-full border-collapse border border-green-800 rounded-lg overflow-hidden shadow-lg">
                <thead>
                    <tr className="bg-green-800 text-white">
                        <th className="text-left p-2">Nom de la crypto</th>
                        <th className="text-left p-2">Prix</th>
                        <th className="text-left p-2">Volume</th>
                        <th className="text-left p-2">Changement 24h</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-green-800 hover:bg-green-100">
                        <td className="p-2">Bitcoin</td>
                        <td className="p-2">$</td>
                        <td className="p-2">$</td>
                        <td className="p-2">%</td>
                    </tr>
                    <tr className="border-b border-green-800 hover:bg-green-100">
                        <td className="p-2">Ethereum</td>
                        <td className="p-2">$</td>
                        <td className="p-2">$</td>
                        <td className="p-2">%</td>
                    </tr>
                    <tr className="border-b border-green-800 hover:bg-green-100">
                        <td className="p-2">Litecoin</td>
                        <td className="p-2">$</td>
                        <td className="p-2">$</td>
                        <td className="p-2">%</td>
                    </tr>
                    <tr className="border-b border-green-800 hover:bg-green-100">
                        <td className="p-2">Ripple</td>
                        <td className="p-2">$</td>
                        <td className="p-2">$</td>
                        <td className="p-2">%</td>
                    </tr>
                    <tr className="border-b border-green-800 hover:bg-green-100">
                        <td className="p-2">Cardano</td>
                        <td className="p-2">$</td>
                        <td className="p-2">$</td>
                        <td className="p-2">%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Tableau;