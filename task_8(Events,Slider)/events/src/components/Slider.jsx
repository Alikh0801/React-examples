import { useState } from "react";

const data = [
    {
        id: 1,
        title: "Slide 1",
        description: "This is the first slide",
        img: "/download.jpeg",
    },

    {
        id: 2,
        title: "Slide 2",
        description: "This is the second slide",
        img: "/kalki.jpeg",
    },
    {
        id: 3,
        title: "Slide 3",
        description: "This is the third slide",
        img: "/spider-man.jpeg",
    },

]

function Slider() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(data.length - 1);
        }
    };

    const slide = data[index];

    return (
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden text-center p-4">
            <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-80 object-cover rounded-lg"
            />

            <h2 className="text-2xl font-bold text-gray-800 mt-4">{slide.title}</h2>
            <p className="text-gray-600">{slide.description}</p>

            <div className="flex justify-between mt-6">
                <button
                    onClick={prevSlide}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg"
                >
                    Previous
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Slider;