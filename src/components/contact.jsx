export default function Contact() {
    return (
        <div className="bg-black text-black flex flex-col  min-h-screen px-6 mt-10 ">
            <div className="flex items-center justify-center min-h-screen bg-black ">
                <form className="bg-black rounded-lg shadow-lg p-8 w-full max-w-md border-4 border-blue-500 shadow-[0_0_15px_3px_rgba(59,130,246,0.6)]">
                    <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>
                    <div className="mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white font-medium mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            id="message"
                            rows="4"
                            placeholder="Type your message here..."
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-white text-black py-3 rounded hover:bg-blue-800 transition-colors font-semibold"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}