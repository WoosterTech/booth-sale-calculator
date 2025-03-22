import {useState, useEffect} from "react";

export default function BoothSaleCalculator() {
    const [scouts, setScouts] = useState<{ name: string; time: number}[]>([]);
    const [totalBoxes, setTotalBoxes] = useState<number>(0);
    const [results, setResults] = useState<{ name: string; boxes: number }[]>([]);

    const addScout = () => {
        setScouts([...scouts, { name: '', time: 0 }]);
    };

    const updateScout = (index: number, field: string, value: string | number) => {
        const updatedScouts = scouts.map((scout, i) =>
            i === index ? { ...scout, [field]: field === "time" ? Number(value) : value } : scout
        );
        setScouts(updatedScouts);
    };

    const removeScout = (index: number) => {
        const updatedScouts = scouts.filter((_, i) => i !== index);
        setScouts(updatedScouts);
    };

    useEffect(() => {
        const calculateBoxes = () => {
            const totalTime = scouts.reduce((sum, scout) => sum + scout.time, 0);
            if (totalTime === 0) return;

            const distribution = scouts.map((scout) => ({
                name: scout.name,
                boxes: Math.round((scout.time / totalTime) * totalBoxes)
            }));
            setResults(distribution);
        };

        calculateBoxes();
    }, [scouts, totalBoxes]);

    return (
        <div className="p-4 max-2-md mx-auto" style={{ backgroundColor: '#d5f267' }}>
            <h1 className="text-2xl font-bold">Booth Sale Calculator</h1>
            <div className="my-4">
                <label className="block font-semibold">Total Boxes Sold:</label>
                <input
                    type="number"
                    value={totalBoxes}
                    onChange={(e) => setTotalBoxes(Number(e.target.value))}
                    className="w-full border p-2 rounded"
                />
            </div>
            <h2 className="text-lg font-semibold">Scouts</h2>
            {scouts.map((scout, index) => (
                <div key={index} className="flex gap-2 my-2">
                    <input
                     type="text"
                     placeholder="Name"
                     value={scout.name}
                     onChange={(e) => updateScout(index, "name", e.target.value)}
                     className="border p-2 flex-1 rounded"
                    />
                    <input
                     type="number"
                     placeholder="Hours"
                     value={scout.time}
                     onChange={(e) => updateScout(index, "time", e.target.value)}
                     className="border p-2 w-24 rounded"
                    />
                    <button onClick={() => removeScout(index)} className="ml-2">Remove</button>
                </div>
            ))}
            <button onClick={addScout}>Add Scout</button>
            {results.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Results</h2>
                    <table className="w-full border-collapse mx-auto table-auto">
                        <thead>
                            <tr>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Boxes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                                    <td className="border p-2">{result.name}</td>
                                    <td className="border p-2">{result.boxes}</td>
                                </tr>
                            ))}
                            <tr className="bg-yellow-200">
                                <td className="border p-2 font-semibold">Total</td>
                                <td className="border p-2 font-semibold">{results.reduce((sum, result) => sum + result.boxes, 0)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
