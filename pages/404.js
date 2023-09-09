// import Image from "next/image";
import Container from "../components/Container";
import Layout from "../components/Layout";

export default function Custom404() {
    return (
        <Layout>
            <Container className="container mx-auto px-10">
                {/* <img src="/sorry.mp4" height="auto" width={20} /> */}
                {/* <video src="/sorry.mp4" className="text-center items-center jus" height="auto" width={200} ></video> */}
                <iframe className="mt-4 w-[80%] mx-auto" src="https://open.spotify.com/embed/playlist/2fdifReMjfs30VM9aDpxyi?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                         <br />
                <h1 className="text-center items-center text-lg mb-4 text-white">404 - Page Not Found :)</h1>
            </Container>
        </Layout>
    )
}