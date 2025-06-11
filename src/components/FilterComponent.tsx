import React from "react";

const FilterComponent = () => {
    return (
        <div className="w-full ml-3 md:w-64 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

            {/* Name Search */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Search by Name</label>
                <input
                    type="text"
                    placeholder="e.g. Gucci"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>

            {/* Color Options */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <div className="space-y-1">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" value="black" />
                        Black
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" value="white" />
                        White
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" value="red" />
                        Red
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" value="blue" />
                        Blue
                    </label>
                </div>
            </div>

            {/* Size Options */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <div className="space-y-1">
                    {["S", "M", "L", "XL"].map((size) => (
                        <label key={size} className="flex items-center gap-2">
                            <input type="checkbox" value={size.toLowerCase()} />
                            {size}
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Options */}
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="space-y-1">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="price" value="" defaultChecked />
                        All
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="price" value="0-50" />
                        $0 - $50
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="price" value="51-100" />
                        $51 - $100
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="price" value="101-200" />
                        $101 - $200
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="price" value="201+" />
                        $201+
                    </label>
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
