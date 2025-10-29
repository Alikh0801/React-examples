function Contact() {
    return (
        <div className="max-w-md mx-auto mt-16 bg-white shadow-lg p-8 rounded-xl">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h1>
            <form className="flex flex-col gap-3">
                <input className="border p-2 rounded" type="text" placeholder="Your Name" />
                <input className="border p-2 rounded" type="email" placeholder="Your Email" />
                <textarea className="border p-2 rounded" placeholder="Your Message" rows="4"></textarea>
                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send</button>
            </form>
        </div>
    );
}

export default Contact;
