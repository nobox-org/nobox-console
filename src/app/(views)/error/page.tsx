"use client";
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div>
            <div className="bg-white flex items-center justify-center">
                <div className="text-[#404040] text-[24px] font-[400] text-center p-5">
                    <span>We are so sorry, </span>
                    <Link href={"/"} className="text-link font-medium">
                        Go back to the HomePage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
