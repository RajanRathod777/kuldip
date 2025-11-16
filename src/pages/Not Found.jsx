import { ArrowLeft, Home, Search } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">

            {/* Glowing Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative max-w-3xl mx-auto px-4 py-28 text-center">

                {/* 404 Heading */}
                <h1 className="text-7xl md:text-9xl font-extrabold text-white drop-shadow-lg">
                    404
                </h1>

                <p className="text-xl text-blue-100 mt-4">
                    Oops! The page you’re looking for doesn’t exist.
                </p>

                {/* Glass Card */}
                <div className="mt-10 bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl text-center">
                    <p className="text-blue-100 text-lg mb-6">
                        It may have been moved, deleted, or you might have mistyped the URL.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">

                        {/* Back Button */}
                        <Link
                            to={-1}
                            className="flex items-center gap-2 justify-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl text-white hover:bg-white/20 transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </Link>

                        {/* Home Button */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 justify-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-all"
                        >
                            <Home className="w-5 h-5" />
                            Go Home
                        </Link>

                    </div>

                    {/* Search Option */}
                    <div className="mt-6">
                        <Link
                            to="/search"
                            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm"
                        >
                            <Search className="w-4 h-4" />
                            Search for something else
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;