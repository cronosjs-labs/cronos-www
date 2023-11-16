import logo from "../../public/logo.png";
import { SVGProps } from "react";

export function IcSharpMenuBook(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M21 5c-1.11-.35-2.33-.5-3.5-.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v15.5C2.45 20.4 4.55 20 6.5 20s4.05.4 5.5 1.5c1.45-1.1 3.55-1.5 5.5-1.5c1.17 0 2.39.15 3.5.5c.75.25 1.4.55 2 1V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5v11.5z"
            ></path>
            <path
                fill="currentColor"
                d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99c.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24c-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99c.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"
            ></path>
        </svg>
    );
}

export function MdiGithubBox(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                fill="currentColor"
            ></path>
        </svg>
    );
}

const Nav = () => {
    return (
        <>
            <div className="w-screen h-16 bg-[#080808] flex border-b-2 border-[#1f1f1f] justify-between items-center px-4 fixed top-0 z-50">
                <div className="flex items-center ml-4">
                    <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
                    <h3 className="text-white text-2xl font-mulish-black max-[470px]:text-xl">
                        Cronos
                    </h3>
                </div>

                <div></div>

                <div className="flex items-center h-full">
                    <button className="flex items-center justify-center h-full cursor-not-allowed">
                        <IcSharpMenuBook
                            onClick={() =>
                                window.open("https://cronos-js.github.io/docs/", "_blank")
                            }

                            color="white"
                            className="w-[30px] h-[30px] max-[470px]:w-[24px] max-[470px]:h-[24px]"
                        ></IcSharpMenuBook>
                        <h3 className="text-white text-2xl font-mulish-black ml-2 max-[470px]:text-xl">
                            Docs
                        </h3>
                    </button>

                    <MdiGithubBox
                        cursor="pointer"
                        onClick={() =>
                            window.open("https://github.com/cronos-js", "_blank")
                        }

                        color="white"
                        className="ml-4 w-[50px] h-[50px] max-[470px]:w-[35px] max-[470px]:h-[35px]"
                    ></MdiGithubBox>
                </div>
            </div>
        </>
    );
};

export default Nav;
