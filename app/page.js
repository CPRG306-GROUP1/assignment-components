import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
    return (
        <div className="flex flex-col min-w-full bg-gray-600">
            <Navbar />
        </div>
    );
}

